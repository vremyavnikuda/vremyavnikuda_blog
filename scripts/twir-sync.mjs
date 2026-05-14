import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const TWIR_FEED_URL = 'https://this-week-in-rust.org/atom.xml';
const TWIR_ARCHIVE_URL = 'https://this-week-in-rust.org/blog/archives/index.html';
const TWIR_SOURCE_NAME = 'twir';
const TWIR_LICENSE = 'CC BY-SA 4.0';
const DEFAULT_TAGS = ['rust', 'twir', 'newsletter'];

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

export function decodeXmlEntities(input) {
  let decoded = input;

  for (let index = 0; index < 4; index += 1) {
    const next = decoded.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (_, entity) => decodeEntity(entity));

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

function normalizeIssueRecord(issue, discoverySource) {
  return {
    ...issue,
    discoverySource,
  };
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
      summaryHtml: decodeXmlEntities(extractTagContent(block, 'summary')),
      contentHtml: decodeXmlEntities(extractTagContent(block, 'content')),
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

export function planIssuesToImport({ existingIssueNumbers, feedEntries, archiveEntries, bootstrapCount }) {
  const feedMap = new Map(feedEntries.map((issue) => [issue.issueNumber, normalizeIssueRecord(issue, 'feed')]));
  const archiveMap = new Map(archiveEntries.map((issue) => [issue.issueNumber, normalizeIssueRecord(issue, 'archive')]));
  const remoteIssueNumbers = [...new Set([...feedMap.keys(), ...archiveMap.keys()])].sort((left, right) => left - right);

  if (remoteIssueNumbers.length === 0) {
    return [];
  }

  if (existingIssueNumbers.size === 0) {
    if (bootstrapCount <= 0) {
      return [];
    }

    return remoteIssueNumbers
      .slice(-bootstrapCount)
      .map((issueNumber) => feedMap.get(issueNumber) ?? archiveMap.get(issueNumber))
      .filter(Boolean);
  }

  const latestExistingIssue = Math.max(...existingIssueNumbers);
  const latestRemoteIssue = remoteIssueNumbers[remoteIssueNumbers.length - 1];

  if (latestRemoteIssue <= latestExistingIssue) {
    return [];
  }

  const plannedIssues = [];

  for (let issueNumber = latestExistingIssue + 1; issueNumber <= latestRemoteIssue; issueNumber += 1) {
    const issue = feedMap.get(issueNumber) ?? archiveMap.get(issueNumber);

    if (!issue) {
      throw new Error(`Missing This Week in Rust issue ${issueNumber} in both feed and archive.`);
    }

    plannedIssues.push(issue);
  }

  return plannedIssues;
}

function stripHtmlTags(html) {
  return decodeXmlEntities(html)
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeYamlString(value) {
  return JSON.stringify(value);
}

function issueDateFromIso(isoString) {
  return isoString.slice(0, 10);
}

function buildDescription(issue) {
  const text = stripHtmlTags(issue.summaryHtml || issue.contentHtml || '');

  if (!text) {
    return 'Weekly Rust community roundup imported from This Week in Rust.';
  }

  return text.length <= 160 ? text : `${text.slice(0, 157).trimEnd()}...`;
}

function buildFrontmatter(issue, importMode) {
  return [
    '---',
    `title: ${escapeYamlString(issue.title)}`,
    `description: ${escapeYamlString(buildDescription(issue))}`,
    `pubDate: ${issueDateFromIso(issue.published)}`,
    `updatedDate: ${issueDateFromIso(issue.updated || issue.published)}`,
    `tags: ${JSON.stringify(DEFAULT_TAGS)}`,
    'draft: false',
    'lang: en',
    `source: ${TWIR_SOURCE_NAME}`,
    `sourceUrl: ${escapeYamlString(issue.link)}`,
    `externalId: ${escapeYamlString(issue.externalId || issue.link)}`,
    `issueNumber: ${issue.issueNumber}`,
    `license: ${escapeYamlString(TWIR_LICENSE)}`,
    `importMode: ${importMode}`,
    '---',
  ].join('\n');
}

function normalizeImportedHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\r\n/g, '\n')
    .trim();
}

export function createMirrorPost(issue) {
  return `${buildFrontmatter(issue, 'mirror')}\n\n${normalizeImportedHtml(issue.contentHtml)}`;
}

export function createLinkPost(issue) {
  const summary = normalizeImportedHtml(issue.summaryHtml || '<p>This issue could not be mirrored safely, so this page links to the original release.</p>');

  return `${buildFrontmatter(issue, 'linkpost')}\n\n> Imported from [${issue.title}](${issue.link}). This fallback keeps the issue in the local archive without risking a broken build.\n\n${summary}\n\n[Continue to the original issue →](${issue.link})`;
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
    summaryHtml: '',
  };
}

function filenameForIssue(issueNumber) {
  return `this-week-in-rust-${issueNumber}-en.md`;
}

async function getExistingIssueNumbers(contentDir) {
  const entries = await readdir(contentDir, { withFileTypes: true });

  return new Set(
    entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name.match(/^this-week-in-rust-(\d+)-en\.md$/)?.[1])
      .filter(Boolean)
      .map((value) => Number.parseInt(value, 10)),
  );
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'vremyavnikuda-blog-twir-sync/1.0 (+https://this-week-in-rust.org/)'
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }

  return response.text();
}

async function hydrateIssue(issue) {
  if (issue.contentHtml) {
    return issue;
  }

  const pageHtml = await fetchText(issue.link);
  const pageIssue = extractIssueContentFromPage(pageHtml);

  return {
    ...issue,
    ...pageIssue,
    link: issue.link,
    externalId: issue.externalId || issue.link,
    summaryHtml: issue.summaryHtml || pageIssue.summaryHtml,
    updated: issue.updated || pageIssue.updated,
  };
}

function parseCliArgs(argv) {
  const args = {
    dryRun: false,
    bootstrapCount: 0,
    contentDir: path.join(repoRoot, 'src/content/blog'),
  };

  for (const arg of argv) {
    if (arg === '--dry-run') {
      args.dryRun = true;
      continue;
    }

    if (arg.startsWith('--bootstrap=')) {
      args.bootstrapCount = Number.parseInt(arg.split('=')[1] ?? '0', 10);
      continue;
    }

    if (arg.startsWith('--backfill=')) {
      args.bootstrapCount = Number.parseInt(arg.split('=')[1] ?? '0', 10);
    }
  }

  return args;
}

export async function syncTwir({ dryRun = false, bootstrapCount = 0, contentDir = path.join(repoRoot, 'src/content/blog') } = {}) {
  const existingIssueNumbers = await getExistingIssueNumbers(contentDir);
  const [feedXml, archiveHtml] = await Promise.all([
    fetchText(TWIR_FEED_URL),
    fetchText(TWIR_ARCHIVE_URL),
  ]);

  const feedEntries = parseAtomFeed(feedXml);
  const archiveEntries = parseArchiveIssues(archiveHtml);
  const plannedIssues = planIssuesToImport({ existingIssueNumbers, feedEntries, archiveEntries, bootstrapCount });
  const hydratedIssues = await Promise.all(plannedIssues.map((issue) => hydrateIssue(issue)));

  if (!dryRun) {
    await mkdir(contentDir, { recursive: true });
  }

  const results = [];

  for (const issue of hydratedIssues) {
    const targetPath = path.join(contentDir, filenameForIssue(issue.issueNumber));
    const sourceFile = issue.contentHtml ? createMirrorPost(issue) : createLinkPost(issue);

    if (!dryRun) {
      await writeFile(targetPath, sourceFile, 'utf8');
    }

    results.push({
      issueNumber: issue.issueNumber,
      targetPath,
      mode: issue.contentHtml ? 'mirror' : 'linkpost',
      discoverySource: issue.discoverySource,
    });
  }

  return results;
}

async function main() {
  const args = parseCliArgs(process.argv.slice(2));
  const results = await syncTwir(args);

  if (results.length === 0) {
    console.log('No new This Week in Rust issues to import.');
    return;
  }

  for (const result of results) {
    console.log(`${args.dryRun ? 'plan' : 'wrote'} issue ${result.issueNumber} as ${result.mode} via ${result.discoverySource}: ${result.targetPath}`);
  }
}

const isMainModule = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
