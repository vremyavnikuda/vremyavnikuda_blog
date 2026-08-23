---
title: "rust-fmt v0.1.8–v0.1.10 - Macro Formatter Safety Pipeline"
description: "rust-fmt v0.1.8 reworks macro formatting around a token-verified pipeline, v0.1.9 speeds things up with batch formatting, and v0.1.10 fixes CRLF input failures."
pubDate: 2026-08-23
tags: ["rust-fmt", "rust", "vscode", "release"]
draft: false
lang: en
---

> Note: `rust-fmt` v0.1.8 was released on **August 22, 2026**, and v0.1.9 and v0.1.10 on **August 23, 2026**.

This is a summary of three consecutive releases of `rust-fmt`. The centerpiece is the v0.1.8 rework of the native macro formatter.

## TL;DR

- v0.1.8 makes macro formatting a verified, safety-checked pipeline.
- Formatting outcomes are now explicit; lossy transformations preserve the original macro and report SKIPPED instead.
- Bundled platform coverage grew from four to six targets.
- v0.1.9 speeds up same-file macros with batch formatting.
- v0.1.10 fixes formatting failures on CRLF line endings.

## rust-fmt v0.1.8

Main changes in this release:

- Explicit per-macro outcomes: `FORMATTED`, `UNCHANGED`, and `SKIPPED` with a reason and source range. Diagnostics go to stderr while stdout remains valid formatted Rust.
- A safety oracle verifying exact significant-token preservation, complete-file syntax, and byte-identical output on a second pass.
- Replaced byte-level `macro_rules!` discovery with `ra-ap-rustc_lexer`, fixing false detection inside strings/comments and UTF-8 corruption.
- Unsupported or lossy transformations preserve the original macro and report `SKIPPED` — fail closed. Formatting converges to a fixed point in at most eight passes.
- The VS Code extension sends the original document directly to the native formatter and falls back to plain `rustfmt` without TypeScript rewrites.
- Native formatting now runs for every Rust document, not only files containing `macro_rules!`.
- Added linux-arm64 / win32-arm64 binaries, extending bundled coverage from four to six platforms.
- Removed a stray `max_width=80` override so output matches an unconfigured `rustfmt` exactly.

In short: from "rewrite it somehow" to "verify it before returning". Formatted output is guaranteed to stay syntactically valid with tokens preserved.

## rust-fmt v0.1.9

- Macro definitions in the same file are now formatted in one combined `rustfmt` call per convergence pass, falling back to per-definition calls only if the batch fails the token-preservation check.
- On a 21-macro fixture, `rustfmt` subprocess spawns dropped from 47 to 27 and wall-clock time from ~1.0s to ~0.62s.

## rust-fmt v0.1.10

- Fixed formatting a file with CRLF line endings and at least one `//` comment failing closed with `SKIPPED` or an error.
- CRLF input is detected, normalized to LF for internal passes, and `\r\n` is restored in the final output. LF-only input is unaffected.

## Links

- rust-fmt repository: https://github.com/shikoucore/rust-fmt
- VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=vremyavnikuda.rust-fmt