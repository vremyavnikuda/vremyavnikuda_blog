import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createLinkPost,
  createMirrorPost,
  parseArchiveIssues,
  parseAtomFeed,
  planIssuesToImport,
} from '../scripts/twir-sync.mjs';

test('parseAtomFeed extracts issue metadata and decoded HTML content', () => {
  const xml = `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <entry>
      <title>This Week in Rust 651</title>
      <link href="https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/" rel="alternate"></link>
      <published>2026-05-13T00:00:00-04:00</published>
      <updated>2026-05-13T00:00:00-04:00</updated>
      <id>tag:this-week-in-rust.org,2026-05-13:/blog/2026/05/13/this-week-in-rust-651/</id>
      <summary type="html">&lt;p&gt;Short summary&lt;/p&gt;</summary>
      <content type="html">&lt;h2&gt;Updates&lt;/h2&gt;&lt;p&gt;Hello &amp;amp; welcome&lt;/p&gt;</content>
    </entry>
  </feed>`;

  const [issue] = parseAtomFeed(xml);

  assert.equal(issue.issueNumber, 651);
  assert.equal(issue.title, 'This Week in Rust 651');
  assert.equal(issue.link, 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/');
  assert.match(issue.contentHtml, /<h2>Updates<\/h2>/);
  assert.match(issue.contentHtml, /Hello & welcome/);
  assert.equal(issue.externalId, 'tag:this-week-in-rust.org,2026-05-13:/blog/2026/05/13/this-week-in-rust-651/');
});

test('parseArchiveIssues extracts issue links and publication dates', () => {
  const html = `
    <li>
      <time pubdate="pubdate" datetime="2026-05-06T00:00:00-04:00">06 MAY 2026</time>
      <a href="https://this-week-in-rust.org/blog/2026/05/06/this-week-in-rust-650/">This Week in Rust 650</a>
    </li>
    <li>
      <time pubdate="pubdate" datetime="2026-05-13T00:00:00-04:00">13 MAY 2026</time>
      <a href="https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/">This Week in Rust 651</a>
    </li>
  `;

  const issues = parseArchiveIssues(html);

  assert.deepEqual(issues.map((issue) => issue.issueNumber), [650, 651]);
  assert.equal(issues[0].published, '2026-05-06T00:00:00-04:00');
  assert.equal(issues[1].link, 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/');
});

test('planIssuesToImport fills feed gaps from archive and keeps chronological order', () => {
  const feedEntries = [
    {
      issueNumber: 651,
      title: 'This Week in Rust 651',
      link: 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/',
      published: '2026-05-13T00:00:00-04:00',
      updated: '2026-05-13T00:00:00-04:00',
      externalId: '651',
      summaryHtml: '<p>651</p>',
      contentHtml: '<p>651</p>',
    },
  ];
  const archiveEntries = [
    {
      issueNumber: 650,
      title: 'This Week in Rust 650',
      link: 'https://this-week-in-rust.org/blog/2026/05/06/this-week-in-rust-650/',
      published: '2026-05-06T00:00:00-04:00',
    },
    {
      issueNumber: 651,
      title: 'This Week in Rust 651',
      link: 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/',
      published: '2026-05-13T00:00:00-04:00',
    },
  ];

  const plan = planIssuesToImport({
    existingIssueNumbers: new Set([649]),
    feedEntries,
    archiveEntries,
    bootstrapCount: 0,
  });

  assert.deepEqual(plan.map((issue) => issue.issueNumber), [650, 651]);
  assert.equal(plan[0].discoverySource, 'archive');
  assert.equal(plan[1].discoverySource, 'feed');
});

test('planIssuesToImport bootstraps the newest issues when there is no local state', () => {
  const feedEntries = [649, 650, 651].map((issueNumber) => ({
    issueNumber,
    title: `This Week in Rust ${issueNumber}`,
    link: `https://this-week-in-rust.org/blog/2026/05/${issueNumber}/this-week-in-rust-${issueNumber}/`,
    published: `2026-05-${issueNumber}T00:00:00-04:00`,
    updated: `2026-05-${issueNumber}T00:00:00-04:00`,
    externalId: `${issueNumber}`,
    summaryHtml: `<p>${issueNumber}</p>`,
    contentHtml: `<p>${issueNumber}</p>`,
  }));

  const plan = planIssuesToImport({
    existingIssueNumbers: new Set(),
    feedEntries,
    archiveEntries: [],
    bootstrapCount: 2,
  });

  assert.deepEqual(plan.map((issue) => issue.issueNumber), [650, 651]);
});

test('createMirrorPost renders frontmatter and imported HTML body', () => {
  const post = createMirrorPost({
    issueNumber: 651,
    title: 'This Week in Rust 651',
    link: 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/',
    externalId: '651',
    published: '2026-05-13T00:00:00-04:00',
    updated: '2026-05-13T00:00:00-04:00',
    summaryHtml: '<p>Summary</p>',
    contentHtml: '<h2>Updates</h2><p>Hello</p>',
  });

  assert.match(post, /source: twir/);
  assert.match(post, /importMode: mirror/);
  assert.match(post, /issueNumber: 651/);
  assert.match(post, /<h2>Updates<\/h2>/);
});

test('createMirrorPost strips HTML comments from imported content', () => {
  const post = createMirrorPost({
    issueNumber: 651,
    title: 'This Week in Rust 651',
    link: 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/',
    externalId: '651',
    published: '2026-05-13T00:00:00-04:00',
    updated: '2026-05-13T00:00:00-04:00',
    summaryHtml: '<p>Summary</p>',
    contentHtml: '<p>Hello</p><!-- remove me --><p>World</p>',
  });

  assert.doesNotMatch(post, /remove me/);
  assert.match(post, /<p>Hello<\/p><p>World<\/p>/);
});

test('createLinkPost falls back to a safe local wrapper around the original issue', () => {
  const post = createLinkPost({
    issueNumber: 651,
    title: 'This Week in Rust 651',
    link: 'https://this-week-in-rust.org/blog/2026/05/13/this-week-in-rust-651/',
    externalId: '651',
    published: '2026-05-13T00:00:00-04:00',
    updated: '2026-05-13T00:00:00-04:00',
    summaryHtml: '<p>Short summary</p>',
  });

  assert.match(post, /importMode: linkpost/);
  assert.match(post, /Imported from \[This Week in Rust 651\]/);
  assert.match(post, /Continue to the original issue/);
});
