---
title: "grim-rs v0.2.0 and rust-fmt v0.1.7 - Windows Support and Macro Parser Improvements"
description: "grim-rs v0.2.0 adds a Windows backend (DXGI Desktop Duplication / D3D11), rust-fmt v0.1.7 improves the macro parser, and 4 solutions were added to LeetCode (doocs/leetcode)."
pubDate: 2026-08-19
tags: ["grim-rs", "rust-fmt", "leetcode", "rust", "release"]
draft: false
lang: en
---

> Note: `grim-rs` v0.2.0 was released on **June 11, 2026** and `rust-fmt` v0.1.7 on **June 22, 2026**.

This is a summary of updates to `grim-rs` and `rust-fmt`, plus contributions to the LeetCode open-source project.

## TL;DR

- `grim-rs` is now at **v0.2.0** with a new Windows backend.
- `rust-fmt` is now at **v0.1.7** with macro parser improvements.
- 4 solutions were merged into LeetCode (`doocs/leetcode`).

## grim-rs v0.2.0

Main changes in this release:

- Added a Windows backend (DXGI Desktop Duplication API, D3D11 hardware acceleration).
- Added a Platform abstraction layer with static dispatch for Wayland / Windows.
- Added `DirectXError` / `ProtectedContent` / `NoGpuAdapter` error variants.
- Added the `examples/windows_capture.rs` sample.
- `Grim::new_ext()` / `Grim::new_wlr()` now return `UnsupportedProtocol` on Windows.
- Wayland-related dependencies are gated behind `cfg(target_os = "linux")`.

In short, grim-rs is now a cross-platform screenshot library that works on both Wayland compositors and Windows.

## rust-fmt v0.1.7

Main changes in this release:

- Fixed raw string closing delimiter order (`"#` instead of `#"`), an off-by-one with escapes at the end of macro bodies, and parsing of empty arm bodies.
- Rewrote `normalize_body_indent` as a state machine tracking structural depth (fixes indentation for where clauses, nested repetitions, inline braces, and multi-level `$()` nesting).
- Pre-computed per-line brace counts in the VS Code extension's `normalizeMacroBodies`, speeding up O(n²) to O(1).

## LeetCode contributions

Added 4 solutions to `doocs/leetcode`:

- [No.1331 Rank Transform of an Array](https://github.com/doocs/leetcode/pull/5309) — Rust (PR #5309)
- [No.3559 Number of Ways to Assign Edge Weights II](https://github.com/doocs/leetcode/pull/5298) — C (PR #5298)
- [No.3699 Number of ZigZag Arrays I](https://github.com/doocs/leetcode/pull/5297) — C (PR #5297)
- [No.3753 Total Waviness of Numbers in Range II](https://github.com/doocs/leetcode/pull/5249) — C (PR #5249)

## Links

- grim-rs repository: https://github.com/vremyavnikuda/grim-rs
- rust-fmt repository: https://github.com/shikoucore/rust-fmt
- doocs/leetcode: https://github.com/doocs/leetcode