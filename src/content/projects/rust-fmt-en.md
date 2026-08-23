---
title: "rust-fmt"
description: "VS Code extension for formatting Rust code via rustfmt"
github: "https://github.com/shikoucore/rust-fmt"
link: "https://marketplace.visualstudio.com/items?itemName=vremyavnikuda.rust-fmt"
tags: ["rust", "typescript", "vscode", "formatter", "developer-tools"]
featured: true
lang: en
projectType: "project"
category: "projects"
parentProject: "Shikou Core"
status: "active"
version: "0.1.10"
roadmap:
  - version: "0.1.0"
    releaseStatus: "release"
  - version: "0.1.1"
    releaseStatus: "release"
    items:
      - "Workspace formatting command `rust-fmt.formatWorkspace` and `Shift+Alt+F`/`Shift+Option+F` binding for Rust files"
      - "Status bar indicator (\"rust-fmt: active\") with quick access to workspace formatting"
      - "Cancellation support and protection against parallel formatting runs per file"
      - "File size guard (skip formatting files larger than 2 MB)"
      - "Auto-detect `Cargo.toml` to set crate root and `--edition`"
      - "Auto-detect `rustfmt.toml` / `.rustfmt.toml` and pass `--config-path`"
      - "Auto-detect `rust-toolchain(.toml)` and set `RUSTUP_TOOLCHAIN` when running rustfmt"
  - version: "0.1.2"
    releaseStatus: "release"
    items:
      - "Add workspace context cache for faster formatting"
  - version: "0.1.3"
    releaseStatus: "release"
    items:
      - "Quick command to set rust-fmt as the default formatter with Global or Workspace scope selection"
      - "Smart prompt when Rust is not using rust-fmt as the default formatter"
      - "Workspace formatting is now faster on large projects"
  - version: "0.1.4"
    releaseStatus: "release"
    items:
      - "Changed: Updated workspace format shortcut to Ctrl+Alt+Shift+F / Cmd+Option+Shift+F"
      - "Changed: Parallel filesystem searches in context resolution for faster formatting"
      - "Changed: Context cache with mtime-based invalidation reduces repeated filesystem lookups during format-on-save"
      - "Added: New Git-based formatting commands: Format Changed Rust Files and Format Staged Rust Files"
      - "Added: New Control Center and Logs commands accessible via Command Palette"
      - "Added: New rustfmt.onboarding.mode setting (quiet / guided)"
      - "Added: Status bar shows format duration after each format"
      - "Added: Format Selection support with rustfmt --file-lines"
  - version: "0.1.5"
    releaseStatus: "release"
    items:
      - "Added: Native macro formatter (rust-fmt-mf) with nativeMacroFormatter.native and .path settings"
      - "Fixed: Incorrect body indentation in struct_with_bounds $() repetition patterns"
  - version: "0.1.6"
    releaseStatus: "release"
    items:
      - "Added: Full cross-platform support: native macro formatter binaries for Linux (linux-x64) and macOS (darwin-x64, darwin-arm64) in addition to Windows"
  - version: "0.1.7"
    releaseStatus: "release"
    items:
      - "Fixed: Raw string closing delimiter order, off-by-one in brace matching with trailing escape, and empty arm body parsing"
      - "Changed: Rewrote normalize_body_indent as a structural depth-tracking state machine (fixes where clauses, nested repetitions, inline braces, multi-level $() nesting)"
      - "Changed: Pre-computed per-line brace counts in VS Code extension normalizeMacroBodies (O(n²) -> O(1))"
  - version: "0.1.8"
    releaseStatus: "release"
    items:
      - "Added: Explicit per-macro outcomes (FORMATTED / UNCHANGED / SKIPPED with a reason) and diagnostics written to stderr"
      - "Added: Safety oracle verifying exact token preservation, complete-file syntax, and byte-identical output on a second pass"
      - "Added: linux-arm64 / win32-arm64 binaries extending bundled platform coverage to six targets, plus CI validation on macOS and arm runners"
      - "Changed: Token-aware macro discovery via ra-ap-rustc_lexer (fixes false detection inside strings/comments and UTF-8 corruption)"
      - "Changed: Unsupported or lossy transformations preserve the original macro and report SKIPPED instead of returning partially rewritten code"
      - "Changed: The VS Code extension sends the original document directly to the native formatter, falling back to plain rustfmt without TypeScript rewrites"
      - "Changed: Native formatting now runs for every Rust document, not only files containing macro_rules!"
      - "Fixed: Removed a stray max_width=80 override so output matches an unconfigured rustfmt exactly"
  - version: "0.1.9"
    releaseStatus: "release"
    items:
      - "Changed: Macro definitions in the same file are formatted in one combined rustfmt call per convergence pass, falling back to per-definition calls if the batch fails token preservation (47 -> 27 spawns, ~1.0s -> ~0.62s on a 21-macro fixture)"
  - version: "0.1.10"
    releaseStatus: "release"
    items:
      - "Fixed: Formatting a CRLF file with // comments no longer fails closed; input is normalized to LF internally and CRLF restored in the final output"
---

VS Code extension for formatting Rust code via rustfmt. Simple and fast extension: runs `rustfmt --emit stdout`, automatically detects your `rustfmt.toml` (if present), and works on Linux/Windows/macOS. Supports format-on-save, manual execution from the command palette, and custom parameters such as binary path and additional arguments.
