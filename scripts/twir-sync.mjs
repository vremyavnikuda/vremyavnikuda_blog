import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const TWIR_FEED_URL = 'https://this-week-in-rust.org/atom.xml';
const TWIR_ARCHIVE_URL = 'https://this-week-in-rust.org/blog/archives/index.html';
const TWIR_SOURCE_NAME = 'twir';
const TWIR_LICENSE = 'CC BY-SA 4.0';
const FIRST_TRANSLATION_ISSUE = 679;

function decodeEntity(entity) {
  const namedEntities = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
  };

  if (entity.startsWith('#x') || entity.startsWith('#X')) {
    const codePoint = Number.parseInt(entity.slice(2), 16);
    return Number.isNaN(codePoint) ? `&${entity};` : String.fromCodePoint(codePoint);
  }

  if (entity.startsWith('#')) {
    const codePoint = Number.parseInt(entity.slice(1), 10);
    return Number.isNaN(codePoint) ? `&${entity};` : String.fromCodePoint(codePoint);
  }

  return namedEntities[entity] ?? `&${entity};`;
}

function decodeXmlLayer(input) {
  return input.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (_, entity) => decodeEntity(entity));
}

export function decodeXmlEntities(input) {
  let decoded = input;

  for (let index = 0; index < 4; index += 1) {
    const next = decodeXmlLayer(decoded);

    if (next === decoded) {
      return next;
    }

    decoded = next;
  }

  return decoded;
}

function extractTagContent(block, tagName) {
  const match = block.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)</${tagName}>`, 'i'));
  return match?.[1]?.trim() ?? '';
}

function extractLinkHref(block) {
  const alternate = block.match(/<link\b[^>]*href="([^"]+)"[^>]*rel="alternate"[^>]*>/i);

  if (alternate?.[1]) {
    return alternate[1];
  }

  return block.match(/<link\b[^>]*href="([^"]+)"[^>]*>/i)?.[1] ?? '';
}

function issueNumberFromString(value) {
  const match = value.match(/this-week-in-rust-(\d+)/i) ?? value.match(/This Week in Rust\s+(\d+)/i);
  return match ? Number.parseInt(match[1], 10) : Number.NaN;
}

export function parseAtomFeed(xml) {
  return Array.from(xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi), (match) => {
    const block = match[1] ?? '';
    const title = decodeXmlEntities(extractTagContent(block, 'title'));
    const link = extractLinkHref(block);
    const issueNumber = issueNumberFromString(link || title);

    return {
      issueNumber,
      title,
      link,
      published: extractTagContent(block, 'published'),
      updated: extractTagContent(block, 'updated') || extractTagContent(block, 'published'),
      externalId: decodeXmlEntities(extractTagContent(block, 'id')) || link,
      contentHtml: decodeXmlLayer(extractTagContent(block, 'content')),
    };
  }).filter((issue) => Number.isFinite(issue.issueNumber) && issue.link);
}

export function parseArchiveIssues(html) {
  return Array.from(
    html.matchAll(/<time\b[^>]*datetime="([^"]+)"[^>]*>[\s\S]*?<\/time>[\s\S]*?<a href="([^"]*this-week-in-rust-(\d+)\/?)[^"]*">([^<]+)<\/a>/gi),
    (match) => ({
      issueNumber: Number.parseInt(match[3], 10),
      title: decodeXmlEntities(match[4].trim()),
      link: match[2],
      published: match[1],
    }),
  ).sort((left, right) => left.issueNumber - right.issueNumber);
}

function mergeIssues(feedEntries, archiveEntries) {
  const issues = new Map();
  for (const issue of [...archiveEntries, ...feedEntries]) {
    const match = issue.link.match(/^(?:https:\/\/this-week-in-rust\.org)?(\/blog\/\d{4}\/\d{2}\/\d{2}\/this-week-in-rust-(\d+)\/?)$/);
    if (match && Number(match[2]) === issue.issueNumber) {
      issues.set(issue.issueNumber, { ...issue, link: new URL(match[1], TWIR_FEED_URL).href });
    }
  }
  return issues;
}

export function planIssuesToImport({ translatedIssueNumbers, feedEntries, archiveEntries }) {
  return [...mergeIssues(feedEntries, archiveEntries).values()]
    .filter(({ issueNumber }) => issueNumber >= FIRST_TRANSLATION_ISSUE && !translatedIssueNumbers.has(issueNumber))
    .sort((left, right) => left.issueNumber - right.issueNumber);
}

function stripHtmlTags(html) {
  return decodeXmlEntities(html)
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:)\]])(?=\s|$)/g, '$1')
    .replace(/([(\[])\s+/g, '$1')
    .trim();
}

function escapeYamlString(value) {
  return JSON.stringify(value);
}

function issueDateFromIso(isoString) {
  return isoString.slice(0, 10);
}

// Cuts on a word boundary; slicing at a fixed offset left things like "This i...".
function clampText(text, max = 160) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 3);
  const space = cut.lastIndexOf(' ');
  return `${(space > 40 ? cut.slice(0, space) : cut).trimEnd().replace(/[,;:]$/, '')}...`;
}

// Every issue opens with the same boilerplate paragraph, so a description taken
// from the top was byte-identical across all of them - a wall of repeats in the
// list and duplicate meta descriptions for search engines. The crate of the week
// is the one short thing that differs every issue.
export function crateOfTheWeek(contentHtml) {
  const section = contentHtml.match(/<h2[^>]*id="crate-of-the-week"[\s\S]*?<\/h2>([\s\S]{0,600})/i)?.[1];
  if (!section) return '';

  // Drop the standing note that follows the blurb. Issues word it either way.
  const blurb = stripHtmlTags(section).split(/\s*(?:Thanks to |Despite |Please submit )/)[0].trim();

  // First sentence only, and only a period that ends a word - ".editorconfig"
  // must not count. An issue with an empty blurb yields nothing and falls back.
  return blurb.match(/^This week's crate is [\s\S]*?\.(?=\s|$)/)?.[0] ?? '';
}

export function buildDescription(issue) {
  const crate = crateOfTheWeek(issue.contentHtml || '');

  // No falling back to the issue text: its opening paragraph is the same every
  // week, which is what produced 18 byte-identical descriptions. The numbered
  // line is at least unique per issue.
  return crate
    ? clampText(crate)
    : `This Week in Rust ${issue.issueNumber}: the weekly roundup of Rust project updates, calls for participation, and upcoming events.`;
}

function buildFrontmatter(issue) {
  return [
    '---',
    `title: ${escapeYamlString(issue.title)}`,
    `description: ${escapeYamlString(buildDescription(issue))}`,
    `pubDate: ${issueDateFromIso(issue.published)}`,
    `updatedDate: ${issueDateFromIso(issue.updated || issue.published)}`,
    'draft: true',
    'lang: en',
    `source: ${TWIR_SOURCE_NAME}`,
    `sourceUrl: ${escapeYamlString(issue.link)}`,
    `externalId: ${escapeYamlString(issue.externalId || issue.link)}`,
    `issueNumber: ${issue.issueNumber}`,
    `license: ${escapeYamlString(TWIR_LICENSE)}`,
    'importMode: mirror',
    '---',
  ].join('\n');
}

export function normalizeImportedHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>')
    .replace(/\r\n/g, '\n')
    .trim();
}

export function createMirrorPost(issue) {
  return `${buildFrontmatter(issue)}\n\n${normalizeImportedHtml(issue.contentHtml)}`;
}

function extractIssueContentFromPage(html) {
  const titleMatch = html.match(/<div class="col-xs-12 col-sm-8[^"]*">\s*<a href="[^"]+">([^<]+)<\/a>/i)
    ?? html.match(/<title>([^<]+?)\s+·\s+This Week in Rust/i);
  const published = html.match(/<time\b[^>]*datetime="([^"]+)"[^>]*>/i)?.[1] ?? '';
  const articleHtml = html.match(/<article class="post-content">([\s\S]*?)<\/article>/i)?.[1]?.trim() ?? '';
  const title = decodeXmlEntities(titleMatch?.[1]?.trim() ?? '');
  const issueNumber = issueNumberFromString(title);

  if (!title || !published || !articleHtml || !Number.isFinite(issueNumber)) {
    throw new Error('Unable to extract issue details from This Week in Rust issue page.');
  }

  return {
    issueNumber,
    title,
    published,
    updated: published,
    contentHtml: articleHtml,
  };
}

export async function publishedIssueNumbers(contentDir = path.join(repoRoot, 'src/content/blog')) {
  const entries = await readdir(contentDir, { withFileTypes: true });
  const published = new Set();
  for (const entry of entries) {
    const match = entry.name.match(/^this-week-in-rust-(\d+)\.mdx?$/);
    if (!entry.isFile() || !match) continue;

    const markdown = await readFile(path.join(contentDir, entry.name), 'utf8');
    const frontmatter = markdown.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/)?.[1];
    if (frontmatter !== undefined && !/^draft[ \t]*:[ \t]*true[ \t]*(?:#.*)?$/im.test(frontmatter)) {
      published.add(Number(match[1]));
    }
  }
  return published;
}

async function fetchText(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(30_000),
    headers: {
      'user-agent': 'vremyavnikuda-blog-twir-sync/1.0 (+https://this-week-in-rust.org/)'
    },
  }).catch((error) => {
    throw new Error(`Failed to fetch ${url}: ${error.cause?.message ?? error.message}`, { cause: error });
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function hydrateIssue(issue) {
  if (issue.contentHtml && issue.published) {
    return issue;
  }

  const pageHtml = await fetchText(issue.link);
  const pageIssue = extractIssueContentFromPage(pageHtml);
  if (pageIssue.issueNumber !== issue.issueNumber) {
    throw new Error(`Expected issue ${issue.issueNumber}, got ${pageIssue.issueNumber}.`);
  }

  return {
    ...issue,
    ...pageIssue,
    link: issue.link,
    externalId: issue.externalId || issue.link,
    updated: issue.updated || pageIssue.updated,
  };
}

async function fetchIssueSources() {
  const [feed, archive] = await Promise.allSettled([
    fetchText(TWIR_FEED_URL).then(parseAtomFeed),
    fetchText(TWIR_ARCHIVE_URL).then(parseArchiveIssues),
  ]);
  for (const source of [feed, archive]) {
    if (source.status === 'rejected') console.warn(source.reason.message);
  }
  const feedEntries = feed.status === 'fulfilled' ? feed.value : [];
  const archiveEntries = archive.status === 'fulfilled' ? archive.value : [];
  if (feedEntries.length === 0 && archiveEntries.length === 0) {
    throw new Error('No This Week in Rust issues found in the feed or archive.');
  }
  return { feedEntries, archiveEntries };
}

export async function downloadIssue(issueNumber, inboxDir = path.join(repoRoot, '.cache/twir')) {
  if (!Number.isSafeInteger(issueNumber) || issueNumber < 1) {
    throw new Error('Provide a positive This Week in Rust issue number.');
  }

  const { feedEntries, archiveEntries } = await fetchIssueSources();
  const issue = mergeIssues(feedEntries, archiveEntries).get(issueNumber);
  if (!issue) {
    throw new Error(`This Week in Rust issue ${issueNumber} was not found.`);
  }

  const hydratedIssue = await hydrateIssue(issue);
  const filename = path.join(inboxDir, `this-week-in-rust-${issueNumber}-en.md`);
  await mkdir(inboxDir, { recursive: true });
  await writeFile(filename, createMirrorPost(hydratedIssue), { encoding: 'utf8', flag: 'wx' });
  return filename;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--list') {
    const [sources, translatedIssueNumbers] = await Promise.all([fetchIssueSources(), publishedIssueNumbers()]);
    for (const issue of planIssuesToImport({ ...sources, translatedIssueNumbers })) {
      console.log(`${issue.issueNumber}\t${issue.link}`);
    }
    return;
  }
  if (args.length === 2 && args[0] === '--download' && /^\d+$/.test(args[1])) {
    console.log(await downloadIssue(Number(args[1])));
    return;
  }
  throw new Error('Usage: --list or --download <issue-number>');
}

const isMainModule = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
