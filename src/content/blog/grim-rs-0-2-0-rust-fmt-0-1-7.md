---
title: "grim-rs v0.2.0 と rust-fmt v0.1.7 - Windowsサポートとマクロパーサー改善"
description: "grim-rs v0.2.0 は Windows バックエンド（DXGI Desktop Duplication / D3D11）を追加し、rust-fmt v0.1.7 はマクロパーサーを改善。さらに LeetCode（doocs/leetcode）へ4件のソリューションを追加。"
pubDate: 2026-08-19
tags: ["grim-rs", "rust-fmt", "leetcode", "rust", "release"]
draft: false
lang: ja
---

> 注: `grim-rs` v0.2.0 は **2026年6月11日** に、`rust-fmt` v0.1.7 は **2026年6月22日** にリリースされました。

これは `grim-rs` と `rust-fmt` のアップデートと、LeetCode オープンソースプロジェクトへのコントリビューションのまとめです。

## ざっくりまとめ

- `grim-rs` は **v0.2.0** になり、Windows バックエンドを追加しました。
- `rust-fmt` は **v0.1.7** になり、マクロパーサーが改善されました。
- LeetCode（`doocs/leetcode`）に 4 件のソリューションがマージされました。

## grim-rs v0.2.0

このリリースの主な変更点:

- Windows バックエンドを追加（DXGI Desktop Duplication API、D3D11 ハードウェアアクセラレーション）。
- Wayland / Windows の静的ディスパッチによる Platform 抽象レイヤーを追加。
- `DirectXError` / `ProtectedContent` / `NoGpuAdapter` のエラーバリアントを追加。
- `examples/windows_capture.rs` サンプルを追加。
- Windows では `Grim::new_ext()` / `Grim::new_wlr()` が `UnsupportedProtocol` を返すように変更。
- Wayland 関連の依存を `cfg(target_os = "linux")` でゲート。

要するに、grim-rs は Wayland コンポジターと Windows の両方で動作するクロスプラットフォームのスクリーンショットライブラリになりました。

## rust-fmt v0.1.7

このリリースの主な変更点:

- raw string のクロージングデリミタ順序を修正（`#"` ではなく `"#`）。マクロ本体末尾のエスケープによるオフバイワンと、空アーム本体のパースも修正。
- `normalize_body_indent` を構造的深さを追跡するステートマシンに書き直し（where 句、ネストした繰り返し、インラインブレース、多段 `$()` ネストのインデントを修正）。
- VS Code 拡張の `normalizeMacroBodies` で行ごとのブレースカウントを事前計算し O(n²) を O(1) に高速化。

## LeetCode へのコントリビューション

`doocs/leetcode` に 4 件のソリューションを追加しました:

- [No.1331 Rank Transform of an Array](https://github.com/doocs/leetcode/pull/5309) — Rust（PR #5309）
- [No.3559 Number of Ways to Assign Edge Weights II](https://github.com/doocs/leetcode/pull/5298) — C（PR #5298）
- [No.3699 Number of ZigZag Arrays I](https://github.com/doocs/leetcode/pull/5297) — C（PR #5297）
- [No.3753 Total Waviness of Numbers in Range II](https://github.com/doocs/leetcode/pull/5249) — C（PR #5249）

## リンク

- grim-rs repository: https://github.com/vremyavnikuda/grim-rs
- rust-fmt repository: https://github.com/shikoucore/rust-fmt
- doocs/leetcode: https://github.com/doocs/leetcode