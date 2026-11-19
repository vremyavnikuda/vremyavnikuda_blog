---
title: "This Week in Rust 678"
description: "This week's crate is xdgen, a crate for translation of AppStream metainfo files via fluent."
pubDate: 2026-11-18
updatedDate: 2026-11-18
draft: false
lang: en
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/11/18/this-week-in-rust-678/"
externalId: "tag:this-week-in-rust.org,2026-11-18:/blog/2026/11/18/this-week-in-rust-678/"
issueNumber: 678
license: "CC BY-SA 4.0"
importMode: mirror
---

<p>Hello and welcome to another issue of <em>This Week in Rust</em>!
<a href="https://www.rust-lang.org/">Rust</a> is a programming language empowering everyone to build reliable and efficient software.
This is a weekly summary of its progress and community.
Want something mentioned? Tag us at
<a href="https://bsky.app/profile/thisweekinrust.bsky.social">@thisweekinrust.bsky.social</a> on Bluesky or
<a href="https://mastodon.social/@thisweekinrust">@ThisWeekinRust</a> on mastodon.social, or
<a href="https://github.com/rust-lang/this-week-in-rust">send us a pull request</a>.
Want to get involved? <a href="https://github.com/rust-lang/rust/blob/main/CONTRIBUTING.md">We love contributions</a>.</p>
<p><em>This Week in Rust</em> is openly developed <a href="https://github.com/rust-lang/this-week-in-rust">on GitHub</a> and archives can be viewed at <a href="https://this-week-in-rust.org/">this-week-in-rust.org</a>.
If you find any errors in this week's issue, <a href="https://github.com/rust-lang/this-week-in-rust/pulls">please submit a PR</a>.</p>
<p>Want TWIR in your inbox? <a href="https://this-week-in-rust.us11.list-manage.com/subscribe?u=fd84c1c757e02889a9b08d289&id=0ed8b72485">Subscribe here</a>.</p>
<h2 id="updates-from-rust-community"><a class="toclink" href="#updates-from-rust-community">Updates from Rust Community</a></h2>


<h3 id="official"><a class="toclink" href="#official">Official</a></h3>
<ul>
<li><a href="https://blog.rust-lang.org/2026/11/16/enabling-parallel-frontend-on-nightly/">Enabling the parallel frontend on nightly</a></li>
</ul>
<h3 id="foundation"><a class="toclink" href="#foundation">Foundation</a></h3>
<ul>
<li><a href="https://rustfoundation.org/media/how-policy-is-shaping-development-tune-in-to-the-next-jetbrains-rust-foundation-livestream/">How Policy Is Shaping Development - Tune in to the Next JetBrains | Rust Foundation Livestream</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">Newsletters</a></h3>
<ul>
<li><a href="https://rust-trends.com/newsletter/rust-1-100-ships-the-never-type/">Rust Trends Issue 87 - Rust 1.100 Ships the Never Type</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">Project/Tooling Updates</a></h3>
<ul>
<li><a href="https://slint.dev/blog/slint-1.19-released">Slint 1.19 Released</a></li>
<li><a href="https://burntsushi.net/jiff/">Jiff 1.0</a></li>
<li><a href="https://tvm.apache.org/2026/11/16/rust-native-cross-language-ml-compiler-foundation">Rust-Native Cross-Language ML Compiler Foundation</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">Observations/Thoughts</a></h3>
<ul>
<li><a href="https://blog.startifact.com/posts/how-rust-changed-me/">How Rust Changed Me As A Developer</a></li>
<li><a href="https://bryarworld.com/tutorials/opencode-browse-rust-rewrite/">OpenCode Browse rewrote its browser tool in Rust: 97% less memory</a></li>
<li><a href="https://bertptrs.nl/2026/11/16/mutex-poisoning-is-not-for-everyone.html">Mutex poisoning is not for everyone</a></li>
<li><a href="https://rust-trends.com/linux-rust/">Rust in the Linux kernel: lines of code, unsafe and calls into C for every release since v6.1</a></li>
<li><a href="https://edvong.com/bypass-orphan-rule/">How to Bypass Rust's Orphan Rule</a></li>
<li><a href="https://blog.legoktm.com/2026/11/15/most-rust-projects-dont-bundle-ca-roots.html">Most Rust projects don't bundle CA roots</a></li>
<li><a href="https://kerkour.com/rust-fast-cryptography">Modern cryptography is fast, so you have no excuse for continuing to use C and Assembly</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust Walkthroughs</a></h3>
<ul>
<li><a href="https://tasarma.github.io/posts/ffi-part1/">Foreign Function Interface (FFI) in Rust, Part 1: Unsafe Foundations</a></li>
<li><a href="https://korntewin-b.medium.com/sccache-stop-compiling-the-same-rust-code-again-and-again-6ab2b584b3a7">sccache: Stop compiling the same Rust code again and again</a></li>
<li>[series] <a href="https://noahkawaguchi.com/blog/typenet-post-2/">Encoding TCP in Rust's Type System, Part 2: Placeholder Values Are Not Our Friends</a></li>
<li>[series] <a href="https://kapteko.com/15-million-webservers/">15 million web servers on one VM - smoltcp, DPDK, AF_XDP</a></li>
<li>[video] <a href="https://www.youtube.com/watch?v=-dNsUB7QRk4">Miscompilation in Rust 1.97 with Yoni Peleg</a></li>
</ul>
<h3 id="research"><a class="toclink" href="#research">Research</a></h3>
<ul>
<li><a href="https://calif.io/research/rust-in-peace">Rust in Peace</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">Crate of the Week</a></h2>
<p>This week's crate is <a href="https://github.com/pop-os/xdgen">xdgen</a>, a crate for translation of AppStream metainfo files via fluent.</p>
<p>Thanks to <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1720">Sosthène Guédon</a> for the suggestion!</p>
<p><a href="https://users.rust-lang.org/t/crate-of-the-week/2704">Please submit your suggestions and votes for next week</a>!</p>
<h2 id="calls-for-testing"><a class="toclink" href="#calls-for-testing">Calls for Testing</a></h2>
<p>An important step for RFC implementation is for people to experiment with the
implementation and give feedback, especially before stabilization.</p>
<p>If you are a feature implementer and would like your RFC to appear in this list, add a
<code>call-for-testing</code> label to your RFC along with a comment providing testing instructions and/or
guidance on which aspect(s) of the feature need testing.</p>
<p><em>No calls for testing were issued this week by
<a href="https://github.com/rust-lang/rust/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rust</a>,
<a href="https://github.com/rust-lang/cargo/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Cargo</a>,
<a href="https://github.com/rust-lang/rustup/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rustup</a> or
<a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing%20state%3Aopen">Rust language RFCs</a>.</em></p>
<p><a href="https://github.com/rust-lang/this-week-in-rust/issues">Let us know</a> if you would like your feature to be tracked as a part of this list.</p>
<h3 id="rfcs"><a class="toclink" href="#rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing">RFCs</a></a></h3>
<h3 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/labels/call-for-testing">Rust</a></a></h3>
<h3 id="rustup"><a class="toclink" href="#rustup"><a href="https://github.com/rust-lang/rustup/labels/call-for-testing">Rustup</a></a></h3>
<p>If you are a feature implementer and would like your RFC to appear on the above list, add the new <code>call-for-testing</code>
label to your RFC along with a comment providing testing instructions and/or guidance on which aspect(s) of the feature
need testing.</p>
<h2 id="call-for-participation-projects-and-speakers"><a class="toclink" href="#call-for-participation-projects-and-speakers">Call for Participation; projects and speakers</a></h2>
<h3 id="cfp-projects"><a class="toclink" href="#cfp-projects">CFP - Projects</a></h3>
<p>Always wanted to contribute to open-source projects but did not know where to start?
Every week we highlight some tasks from the Rust community for you to pick and get started!</p>
<p>Some of these tasks may also have mentors available, visit the task page for more information.</p>


<ul>
<li><a href="https://github.com/Kolgrim33/appbridge/issues/1">AppBridge - [easy] Add CLI subcommand <code>appbridge delta</code> to inspect byte savings between two .appbridge bundles</a></li>
<li><a href="https://github.com/Kolgrim33/appbridge/issues/2">AppBridge - [medium] Support real Ed25519 asymmetric keypair generation and verification for .appbridge bundles</a></li>
<li><a href="https://github.com/vindeckyy/presswork/issues/6">presswork - Hardware matrix: run the IPP conformance suite against real printers</a></li>
<li><a href="https://github.com/vindeckyy/presswork/issues/7">presswork - Expand ipptool conformance matrix to remaining upstream .test files</a></li>
<li><a href="https://github.com/rightcommit/rightcommit/issues/11">rightcommit - Add a minimal Local CI workflow example</a></li>
<li><a href="https://github.com/rightcommit/rightcommit/issues/13">rightcommit - Add a regression test for Local CI Makefile precedence</a></li>
<li><a href="https://github.com/MasihMoafi/rustidian/issues/4">Rustidian - Make the AppImage open its demo vault on first launch</a></li>
</ul>


<p>If you are a Rust project owner and are looking for contributors, please submit tasks <a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">here</a> or through a <a href="https://github.com/rust-lang/this-week-in-rust">PR to TWiR</a> or by reaching out on <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> or <a href="https://mastodon.social/@thisweekinrust">Mastodon</a>!</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - Events</a></h3>
<p>Are you a new or experienced speaker looking for a place to share something cool? This section highlights events that are being planned and are accepting submissions to join their event as a speaker.</p>


<p><em>No Calls for papers or presentations were submitted this week.</em></p>
<p>If you are an event organizer hoping to expand the reach of your event, please submit a link to the website through a <a href="https://github.com/rust-lang/this-week-in-rust">PR to TWiR</a> or by reaching out on <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> or <a href="https://mastodon.social/@thisweekinrust">Mastodon</a>!</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Updates from the Rust Project</a></h2>
<p>616 pull requests were <a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-11-10..2026-11-17">merged in the last week</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">Compiler</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164864">avoid hoisting uninitialized reads in EarlyOtherwiseBranch</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165406">do not suggest <code>as_deref</code> for a slice pattern on <code>Err</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165979">improve index inference diagnostics</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/166032">normalize the simd field type before reading its length</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165810">reflection: reflect attributes from adts, fields, and variants</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165872">some attribute related cleanups</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163077">support nested functions with <code>#[offload_kernel]</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162848">use 2 parallel frontend threads by default on the nightly and dev channel</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">Library</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165902">add <code>allocator()</code> to <code>vec_deque::IntoIter</code> and <code>vec_deque::Drain</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164043">alloc: unstably add <code>Vec::repeat</code> and <code>Vec::repeat_in</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165746">don't overflow when rounding up huge thread stack sizes on unix</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165412">implement <code>core::ops::FnAddr</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163696">stabilize <code>int_from_ascii</code></a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17708"><code>config</code>: Add a generated schema file</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17714"><code>config</code>: Iterate on config.toml's schema</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17556"><code>trim-paths</code>: sanitize absolute source paths in fingerprint</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17735">add support for <code>annotate-snippets</code>'s <code>no-graphics</code> output format</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17518">compile: switch dev profile to debug=lines-and-tables-only</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17732">reworked output mtime tracking</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17737">test: add unordered to <code>pub_priv::verify_mix_cargo_feature_z</code></a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17718">unified invoked.timestamp location for compilation and build script units</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165922">prevent inlining of foreign items through glob reexports named <code>_</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/166045">correctly filter deref impls on type aliases</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7251">consistently use "Diff Check" throughout</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7197">don't split link destinations when <code>wrap_comments</code> is enabled</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/6696">fix idempotency issue with raw strings</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/6979">don't leave trailing whitespace before a skipped impl item</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/18060"><code>missing_errors_doc</code>: exempt never-like error types</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17946">extend <code>assert_is_empty</code> to cover <code>VecDeque</code></a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/18017">fix <code>single_match</code>/<code>single_match_else</code> suggestion lose semicolon</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/18049">fix incorrect suggestions from <code>unnecessary_literal_unwrap</code></a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23654"><code>.for</code> add ref when only ref impls into-iter</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23647">complete <code>fn unsafe</code> after <code>const</code></a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23649">do not complete types when trait in type anchor</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23638">large u128 values should not const eval to negative floats</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23665">replace <code>builtin #</code> with forced keywords</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rust Compiler Performance Triage</a></h3>
<p>A generally positive week, with improvements significantly outweighing
regressions for an average of -1.1% instructions on primary benchmarks.</p>
<p>Triage done by <strong>@simulacrum</strong>.
Revision range: <a href="https://perf.rust-lang.org/?start=54d0b7edad511e84181ad50ec8413ef10f93b367&end=6ca2b34602bf2f3591ffa7359c166b6409a44b0a&absolute=false&stat=instructions%3Au">54d0b7ed..6ca2b346</a></p>
<p>5 Regressions, 12 Improvements, 4 Mixed; 0 of them in rollups
147 artifact comparisons made in total</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/main/triage/2026/2026-11-15.md">Full report here</a></p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">Approved RFCs</a></a></h3>
<p>Changes to Rust follow the Rust <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC (request for comments) process</a>. These
are the RFCs that were approved for implementation this week:</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/3527">RFC: Associated const underscore</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">Final Comment Period</a></h3>
<p>Every week, <a href="https://www.rust-lang.org/team.html">the team</a> announces the 'final comment period' for RFCs and key PRs
which are reaching a decision. Express your opinions now.</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">Tracking Issues & PRs</a></h4>
<h5 id="rust_1"><a class="toclink" href="#rust_1"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163910">debugger: stabilize trim-paths unremap file loading</a></li>
<li><a href="https://github.com/rust-lang/rust/issues/163896">Stabilization of the <code>documentation</code> scope in <code>rustc</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165434">Stabilize <code>char::is_case_ignorable</code>, <code>char::is_cased</code>, and the <code>titlecase</code> feature</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165125">std: use <code>_exit</code> for <code>process::exit</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165366">Add lint against duplicate parameter names in fns without body</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164485">Stabilize unchecked <code>nonzero_ops</code></a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164473">Update <code>PartialEq</code>/<code>PartialOrd</code> guarantees for comparisons to match reality</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164918">Move lint validation to attribute parsing</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160235">parser: Feature-gate ambiguous attributes on expressions (take 2)</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165238">make conflicting_repr_hints a hard error</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165782">Make unsafe unknown diagnostic attributes an error again</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCPs only)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1049">Promote powerpc64-unknown-linux-gnuelfv2 to tier 2 with host tools</a></li>
</ul>
<h5 id="language-reference"><a class="toclink" href="#language-reference"><a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/reference/pull/2334">document that extern statics may be bigger than the declared size</a></li>
</ul>
<p><em>No Items entered Final Comment Period this week for
<a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFCs</a>,
<a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a>,
<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>,
<a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a> or
<a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a>.</em>
Let us know if you would like your PRs, Tracking Issues or RFCs to be tracked as a part of this list.</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">New and Updated RFCs</a></a></h3>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4029">Funding team charter</a></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">Upcoming Events</a></h2>
<p>Rusty Events between 2026-11-18 - 2026-12-16 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">Virtual</a></h3>
<ul>
<li>2026-11-18 | Hybrid (Vancouver, CA) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Writing a firmware for Xteink ereader in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-19 | Virtual (Berlin, DE) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907781/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-22 | Virtual (Bengaluru, India) | <a href="https://discord.com/invite/pvYY69PvyS">Embedded Rust Discord</a><ul>
<li><a href="https://discord.gg/t9Cb2gjjq7?event=1563494405086904360"><strong>Silicon Sundays 5: Making a cute robot visor with <code>no_std</code> Rust</strong></a></li>
</ul>
</li>
<li>2026-11-24 | Virtual (Dallas, TX, US) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254769/"><strong>Fourth Tuesday Rust Bookclub</strong></a></li>
</ul>
</li>
<li>2026-11-26 | Virtual | <a href="https://rust.bettercode.eu/">betterCode() Rust</a><ul>
<li><a href="https://rust.bettercode.eu/"><strong>betterCode() Rust 2026</strong></a></li>
</ul>
</li>
<li>2026-11-28 | Virtual (Charlottesville, VA, US) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/317399210/"><strong>Getting Started with Game Development in Rust and Bevy</strong></a></li>
</ul>
</li>
<li>2026-12-01 | Virtual | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/omlooqv8"><strong>Cursed Rust</strong></a></li>
</ul>
</li>
<li>2026-12-01 | Virtual | <a href="https://www.eventbrite.es/o/erni-30130841744">ERNI</a><ul>
<li><a href="https://www.eventbrite.es/e/memory-safe-by-design-how-rust-strengthens-security-in-medtech-tickets-2003651953931"><strong>Memory-safe by design: How Rust strengthens security in medtech</strong></a></li>
</ul>
</li>
<li>2026-12-01 | Virtual (London, UK) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993134/"><strong>Christmas Coding Challenge - Kick Off!</strong></a></li>
</ul>
</li>
<li>2026-12-02 | Virtual (Indianapolis, IN, US) | <a href="https://www.meetup.com/indyrs">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/317404144/"><strong>Indy.rs - with Social Distancing</strong></a></li>
</ul>
</li>
<li>2026-12-03 | Virtual (Berlin, DE) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907782/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-12-04 | Hybrid (Moscow, RU) | <a href="https://rustcon.ru/">RustCon RU</a><ul>
<li><a href="https://rustcon.ru/"><strong>RustCon 2026</strong></a></li>
</ul>
</li>
<li>2026-12-05 | Virtual (Charlottesville, VA, US) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/317399385/"><strong>Entities, Components, and Systems: How Bevy Games Work</strong></a></li>
</ul>
</li>
<li>2026-12-06 | Virtual (Dallas, TX, US) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316331278/"><strong>Rust Deep Learning: First Sunday</strong></a></li>
</ul>
</li>
<li>2026-12-08 | Virtual (Dallas, TX, US) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254767/"><strong>Second Tuesday</strong></a></li>
</ul>
</li>
<li>2026-12-08 | Virtual (London, UK) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993086/"><strong>👋 Community Catch Up</strong></a></li>
</ul>
</li>
<li>2026-12-12 | Virtual (Charlottesville, VA, US) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/317399435/"><strong>Building a Game with Rust and Bevy: Putting It All Together</strong></a></li>
</ul>
</li>
<li>2026-12-15 | Virtual (Washington, DC, US) | <a href="https://www.meetup.com/rustdc">Rust DC</a><ul>
<li><a href="https://www.meetup.com/rustdc/events/316916636/"><strong>Mid-month Rustful</strong></a></li>
</ul>
</li>
<li>2026-12-16 | Hybrid (Vancouver, CA) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210235/"><strong>Rust Study/Hack/Hang-out</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">Asia</a></h3>
<ul>
<li>2026-12-12 | Bangalore, IN | <a href="https://hasgeek.com/rustbangalore">Rust Bangalore</a><ul>
<li><a href="https://hasgeek.com/rustbangalore/december-2026-rustacean-meetup/"><strong>December 2026 Rustacean Meetup</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">Europe</a></h3>
<ul>
<li>2026-11-19 | Aarhus, DK | <a href="https://www.meetup.com/rust-aarhus">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316938696/"><strong>Talk Night at EIVA</strong></a></li>
</ul>
</li>
<li>2026-11-19 | Bergen, NO | <a href="https://www.meetup.com/bergen-rust-new-technology/events/">Rust Bergen</a><ul>
<li><a href="https://www.meetup.com/de-de/bergen-rust-new-technology/events/317045463/"><strong>Rust: FFI with C++, and Intro to Async</strong></a></li>
</ul>
</li>
<li>2026-11-20 - 2026-11-21 | Augsburg, DE | <a href="https://rust-augsburg.github.io/meetup">Rust Meetup Augsburg</a><ul>
<li><a href="https://my.tuxedocomputers.com/event/embedded-rust-mit-embassy-workshop-und-projekttag-28/register"><strong>Embedded Rust mit Embassy - Workshop und Projekttag</strong></a></li>
</ul>
</li>
<li>2026-11-24 | Basel, CH | <a href="https://www.meetup.com/rust-basel">Rust Basel</a><ul>
<li><a href="https://www.meetup.com/rust-basel/events/317258865/"><strong>Rust Meetup #17 @ ERNI</strong></a></li>
</ul>
</li>
<li>2026-11-25 | Amsterdam, NL | <a href="https://www.meetup.com/rust-amsterdam-group">Rust Developers Amsterdam Group</a><ul>
<li><a href="https://www.meetup.com/rust-amsterdam-group/events/317381204/"><strong>Rust Meetup @ Reclamefolder</strong></a></li>
</ul>
</li>
<li>2026-11-25 | Dortmund, DE | <a href="https://www.meetup.com/rust-dortmund">Rust Dortmund</a><ul>
<li><a href="https://www.meetup.com/rust-dortmund/events/317393392/"><strong>On-site Rust Ratatui Workshop in Dortmund</strong></a></li>
</ul>
</li>
<li>2026-11-26 | Copenhagen, DK | <a href="https://www.meetup.com/copenhagen-rust-community">Copenhagen Rust Community</a><ul>
<li><a href="https://www.meetup.com/copenhagen-rust-community/events/317181792/"><strong>Rust meetup #73 sponsored by Adapt!</strong></a></li>
</ul>
</li>
<li>2026-11-26 | London, UK | <a href="https://www.meetup.com/rust-london-user-group">Rust London User Group</a><ul>
<li><a href="https://www.meetup.com/rust-london-user-group/events/317253958/"><strong>Rust London x Zed</strong></a></li>
</ul>
</li>
<li>2026-11-26 | Manchester, UK | <a href="https://www.meetup.com/rust-manchester">Rust Manchester</a><ul>
<li><a href="https://www.meetup.com/rust-manchester/events/317222338/"><strong>Rust Manchester November Code Night</strong></a></li>
</ul>
</li>
<li>2026-11-26 | Stockholm, SE | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/317161063/"><strong>Rust Meetup @Lovable</strong></a></li>
</ul>
</li>
<li>2026-11-28 | Stockholm, SE | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/317458938/"><strong>Ferris' Fika Forum #32</strong></a></li>
</ul>
</li>
<li>2026-12-01 | Paris, FR | <a href="https://www.meetup.com/rust-paris">Rust Paris</a><ul>
<li><a href="https://www.meetup.com/rust-paris/events/316865676/"><strong>Rust meetup #90</strong></a></li>
</ul>
</li>
<li>2026-12-02 | Frankfurt, DE | <a href="https://www.meetup.com/rust-rhein-main">Rust Rhein-Main</a><ul>
<li><a href="https://www.meetup.com/rust-rhein-main/events/317186779/"><strong>From Curiosity to Capability: Build Your Own Device Swarm</strong></a></li>
</ul>
</li>
<li>2026-12-04 | Hybrid (Moscow, RU) | <a href="https://rustcon.ru/">RustCon RU</a><ul>
<li><a href="https://rustcon.ru/"><strong>RustCon 2026</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">North America</a></h3>
<ul>
<li>2026-11-18 | Hybrid (Vancouver, CA) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Writing a firmware for Xteink ereader in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-18 | San Francisco, CA, US | <a href="https://luma.com/bayarearust">Bay Area Rust</a><ul>
<li><a href="https://luma.com/v0mxbgs8"><strong>Bay Area Rust - Social Night</strong></a></li>
</ul>
</li>
<li>2026-11-21 | Boston, MA, US | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924366/"><strong>Winter Hill Rust Lunch, Nov 21</strong></a></li>
</ul>
</li>
<li>2026-11-21 | Minneapolis, MN, US | <a href="https://www.meetup.com/minneapolis-rust-meetup">Minneapolis Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/minneapolis-rust-meetup/events/317401121/"><strong>Minneapolis Rust Meetup Happy Hour</strong></a></li>
</ul>
</li>
<li>2026-11-28 | Boston, MA, US | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924412/"><strong>South Station Rust Lunch, Nov 28</strong></a></li>
</ul>
</li>
<li>2026-12-03 | Montréal, CA | <a href="https://www.meetup.com/rust-montreal">Rust Montréal</a><ul>
<li><a href="https://www.meetup.com/rust-montreal/events/317415310/"><strong>December Monthly Social</strong></a></li>
</ul>
</li>
<li>2026-12-04 | New York, NY, US | <a href="https://www.meetup.com/rust-nyc">Rust NYC</a><ul>
<li><a href="https://www.meetup.com/rust-nyc/events/317259308/"><strong>Rust NYC: The UnConf 2026.</strong></a></li>
</ul>
</li>
<li>2026-12-04 | New York, NY, US | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/317383331/"><strong>👋Women in Rust x Rust NYC UnConf 2026</strong></a></li>
</ul>
</li>
<li>2026-12-15 | San Francisco, CA, US | <a href="https://www.meetup.com/san-francisco-rust-study-group">San Francisco Rust Study Group</a><ul>
<li><a href="https://www.meetup.com/san-francisco-rust-study-group/events/315783990/"><strong>Rust Hacking in Person</strong></a></li>
</ul>
</li>
<li>2026-12-16 | Hybrid (Vancouver, CA) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210235/"><strong>Rust Study/Hack/Hang-out</strong></a></li>
</ul>
</li>
</ul>
<h3 id="oceania"><a class="toclink" href="#oceania">Oceania</a></h3>
<ul>
<li>2026-11-24 | Barton, AU | <a href="https://www.meetup.com/rust-canberra">Canberra Rust User Group</a><ul>
<li><a href="https://www.meetup.com/rust-canberra/events/316907340/"><strong>November Meetup</strong></a></li>
</ul>
</li>
</ul>
<p>If you are running a Rust event please add it to the <a href="https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com">calendar</a> to get
it mentioned here. Please remember to add a link to the event too.
Email the <a href="mailto:community-team@rust-lang.org">Rust Community Team</a> for access.</p>
<h2 id="jobs"><a class="toclink" href="#jobs">Jobs</a></h2>
<p>Please see the latest <a href="https://www.reddit.com/r/rust/comments/1xzlbqp/official_rrust_whos_hiring_thread_for_jobseekers/">Who's Hiring thread on r/rust</a></p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">Quote of the Week</a></h2>
<blockquote>
<p><strong>Presenter</strong>: One of the obvious dangers of AI, it may one day rewrite all code in some cryptic programming language no human is capable of understanding, just because AI understands it much better and finds so efficient to work with ...</p>
<p><strong>Voice from the hall</strong>: "Do you mean Rust?"</p>
</blockquote>
<p>– Unknown people overheard during a meeting</p>
<p>Thanks to <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1848">Bourumir</a> for the suggestion!</p>
<p><a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328">Please submit quotes and vote for next week!</a></p>
<p>This Week in Rust is edited by:</p>
<ul>
<li><a href="https://github.com/nellshamrell">nellshamrell</a></li>
<li><a href="https://github.com/llogiq">llogiq</a></li>
<li><a href="https://github.com/ericseppanen">ericseppanen</a></li>
<li><a href="https://github.com/extrawurst">extrawurst</a></li>
<li><a href="https://github.com/U007D">U007D</a></li>
<li><a href="https://github.com/mariannegoldin">mariannegoldin</a></li>
<li><a href="https://github.com/bdillo">bdillo</a></li>
<li><a href="https://github.com/opeolluwa">opeolluwa</a></li>
<li><a href="https://github.com/bnchi">bnchi</a></li>
<li><a href="https://github.com/KannanPalani57">KannanPalani57</a></li>
<li><a href="https://github.com/tzilist">tzilist</a></li>
<li><a href="https://github.com/alex-semenyuk">alex-semenyuk</a></li>
</ul>
<p><em>Email list hosting is sponsored by <a href="https://foundation.rust-lang.org/">The Rust Foundation</a></em></p>
<p><small><a href="https://www.reddit.com/r/rust/comments/1y01pc6/this_week_in_rust_678/">Discuss on r/rust</a></small></p>