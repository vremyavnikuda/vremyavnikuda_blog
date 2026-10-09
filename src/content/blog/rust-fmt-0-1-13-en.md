---
title: "rust-fmt v0.1.13 - Blank Lines Stay, Format Selection Works, Vim Install in One Line"
description: "rust-fmt v0.1.13 stops deleting your blank lines, makes Format Selection work on stable rustfmt, adds a one-line installer for Vim and Neovim, and fixes a dozen macro formatting bugs."
pubDate: 2026-10-09
draft: false
lang: en
---

> Note: `rust-fmt` v0.1.13 was released on **October 9, 2026**.

This release is mostly about trust. The formatter should not produce a diff you didn't ask for, it should not lose your buffer, and it should format the inside of a `macro_rules!` the same way it formats everything else.

## TL;DR

- Blank lines are left alone by default. The old compact output is now an opt-in setting.
- Format Selection works on stable `rustfmt` and only changes the selected lines.
- `rust-fmt-mf` for Vim and Neovim installs with one command on Linux, macOS and Windows.
- `rust-fmt-mf` never leaves you with an empty buffer, even if formatting fails or crashes.
- A dozen macro formatting fixes, including single-arm macros that used to block the whole file.

## Changed: your blank lines are left alone

Before 0.1.13, every blank line inside braces, between struct fields and after an attribute was deleted. The first format of an ordinary file produced a huge diff that had nothing to do with macros.

Now blank lines are kept by default. If you liked the old compact output, turn it back on:

```json
{
  "rustfmt.compactBlankLines": true
}
```

The standalone binary has the same switch: `--compact-blank-lines`.

## Added

- **`rustfmt.compactBlankLines`** setting and **`--compact-blank-lines`** flag. Off by default; on, it strips blank lines inside braces to keep large files short.
- **`--rustfmt-arg`** for the standalone binary. It passes one extra argument to every `rustfmt` call; repeat it for each argument:

  ```bash
  rust-fmt-mf --rustfmt-arg=--config --rustfmt-arg=max_width=80
  ```

- **One-line install for Vim and Neovim.** One script for all three systems, needing Python 3.8 or newer.

  Linux and macOS:

  ```bash
  curl -fsSL https://raw.githubusercontent.com/vremyavnikuda/rust-fmt/main/install.py | python3 -
  ```

  Windows (PowerShell):

  ```powershell
  irm https://raw.githubusercontent.com/vremyavnikuda/rust-fmt/main/install.py | python -
  ```

  It puts `rust-fmt-mf` in `~/.local/bin` and checks its SHA-256 against the release. On Linux and macOS it prints the line to add to your shell config; on Windows it adds the directory to your user `PATH`. `RUSTFMT_MF_VERSION` pins a release, `RUSTFMT_MF_BIN_DIR` installs elsewhere.

## Fixed

### Editor integration

- **No more empty buffers in Vim and Neovim.** The editor replaces the formatted lines with whatever the formatter printed, whatever its exit status. When formatting fails, `rust-fmt-mf` now prints the source it was given and exits with an error. Formatting runs in a child process, so the parent does the same if that child panics, overflows its stack or is killed. Deeply nested `$( ... )*` repetitions were one input that overflowed the stack.
- **Format Selection works**, on stable `rustfmt` too, and formats macro bodies like a whole-document format does. It used to rely on `--file-lines`, which stable `rustfmt` does not have and nightly accepts only with `--unstable-features`, so it failed everywhere. With the native formatter on, it reformatted the whole file instead. Now the file is formatted as usual and only the changes that touch the selected lines are kept; a change that crosses the edge of the selection is taken whole. When the selection cannot be formatted apart from the rest, such as an import that `rustfmt` would move elsewhere, nothing changes and the log says why.
- **`rustfmt.extraArgs` applies with the native formatter on**, which is the default. It was silently ignored. An `--edition` or `--config-path` there replaces the detected one instead of reaching `rustfmt` twice, which it rejects.
- **Workspace editions are respected.** A crate with `edition.workspace = true` is formatted with the workspace's edition. Before, the macro formatter assumed 2021 and plain `rustfmt` got no edition at all. The edition is also read from `[package]` only, not from whichever table mentions `edition` first.
- **Non-ASCII text in large files no longer turns into `�`.** The output was decoded chunk by chunk, so a character split across two pipe reads was corrupted.
- **`rust-fmt: Open Logs` shows the log again.** It was empty in 0.1.12 unless you changed VS Code's log level by hand. Now every line is there, including which formatter binary actually ran.

### Macro formatting

- **A `macro_rules!` whose last arm has no `;` no longer stops the whole file from formatting.** `rustfmt` adds that `;`, and the safety check read the addition as corrupted code. Any file with such a macro fell back to plain `rustfmt` in VS Code and was left untouched in Vim. That is the usual way to write a single-arm macro:

  ```rust
  macro_rules! square {
      ($x:expr) => {
          $x * $x
      }
  }
  ```

- **Code inside a macro body is laid out like code outside one.** Items get a blank line between them, and `fn f() {}` stays on one line instead of being split in two.
- **Blank lines inside a `macro_rules!` body are kept**, like everywhere else. They were deleted even with `rustfmt.compactBlankLines` off; with it on they are still removed.
- **Comments between arms no longer make the macro `SKIPPED`.** A comment between two arms, or right after the opening brace, stays where it was.
- **Generated structs keep their fields on separate lines** when the `where` clause stands alone on a line. With the `{ fields }` on a line further down, the body stayed glued together as `{ $(pub $field: $ty),+ }`.
- **A transcriber holding two blocks**, `{{ a }; { b }}`, is no longer laid out as one `{{ .. }}` block with a stray `}; {` in the middle.
- **A generic closing `>` followed by `=` keeps its space.** `pub type Alias<T> = Vec<T>` inside a macro body came out as `Vec<T>= ...`, which reads as the operator `>=`, and formatting again never fixed it.

## Upgrading

VS Code updates the extension automatically. For Vim and Neovim, run the install command again; it fetches the latest release.

If the first format after the upgrade shows fewer changes than before, that is expected: your blank lines are no longer being removed.

## Links

- rust-fmt repository: https://github.com/vremyavnikuda/rust-fmt
- Changelog: https://github.com/vremyavnikuda/rust-fmt/blob/main/CHANGELOG.md
- VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=vremyavnikuda.rust-fmt
