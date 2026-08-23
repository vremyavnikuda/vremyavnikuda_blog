---
title: "rust-fmt"
description: "rustfmtを使用したRustコードのフォーマットを行うVS Code拡張機能"
github: "https://github.com/shikoucore/rust-fmt"
link: "https://marketplace.visualstudio.com/items?itemName=vremyavnikuda.rust-fmt"
tags: ["rust", "typescript", "vscode", "formatter", "developer-tools"]
featured: true
lang: ja
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
      - "ワークスペースフォーマットのコマンド `rust-fmt.formatWorkspace` と、Rustファイル向けの `Shift+Alt+F`/`Shift+Option+F` キーバインド"
      - "ステータスバー表示（\"rust-fmt: active\"）とワークスペースフォーマットへのクイックアクセス"
      - "キャンセル対応と、ファイル単位での並列フォーマット実行の防止"
      - "ファイルサイズのガード（2 MBを超えるファイルはフォーマットをスキップ）"
      - "`Cargo.toml` を自動検出して crate ルートと `--edition` を設定"
      - "`rustfmt.toml` / `.rustfmt.toml` を自動検出して `--config-path` を渡す"
      - "`rust-toolchain(.toml)` を自動検出し、rustfmt 実行時に `RUSTUP_TOOLCHAIN` を設定"
  - version: "0.1.2"
    releaseStatus: "release"
    items:
      - "高速化のためのワークスペースコンテキストキャッシュを追加"
  - version: "0.1.3"
    releaseStatus: "release"
    items:
      - "rust-fmt をデフォルトフォーマッタに設定するクイックコマンドを追加（Global / Workspace のスコープ選択）"
      - "Rust が rust-fmt をデフォルトフォーマッタとして使っていない場合のスマートなプロンプト"
      - "大規模プロジェクトでのワークスペースフォーマットを高速化"
  - version: "0.1.4"
    releaseStatus: "release"
    items:
      - "変更: ワークスペースフォーマットのショートカットを Ctrl+Alt+Shift+F / Cmd+Option+Shift+F に変更"
      - "変更: コンテキスト解決でのファイルシステム検索を並列化して高速化"
      - "変更: mtime ベースのコンテキストキャッシュでフォーマットオンセーブ時のファイルシステム検索を削減"
      - "追加: Git ベースのフォーマットコマンド（Format Changed Rust Files / Format Staged Rust Files）"
      - "追加: Control Center と Logs コマンド（コマンドパレットからアクセス可能）"
      - "追加: rustfmt.onboarding.mode 設定（quiet / guided）"
      - "追加: フォーマット後の所要時間をステータスバーに表示"
      - "追加: 選択範囲のフォーマット対応（rustfmt --file-lines）"
  - version: "0.1.5"
    releaseStatus: "release"
    items:
      - "追加: ネイティブマクロフォーマッタ rust-fmt-mf と nativeMacroFormatter.native / .path 設定"
      - "修正: struct_with_bounds の $() 繰り返しパターンでのインデント崩れを修正"
  - version: "0.1.6"
    releaseStatus: "release"
    items:
      - "追加: フルクロスプラットフォーム対応（Windows に加えて Linux linux-x64、macOS darwin-x64 / darwin-arm64 のネイティブバイナリ）"
  - version: "0.1.7"
    releaseStatus: "release"
    items:
      - "修正: raw string のクロージングデリミタ順序（#\" ではなく \"#）と、マクロ本体末尾のエスケープによるオフバイワン、空アーム本体のパースを修正"
      - "変更: normalize_body_indent を構造的深さを追跡するステートマシンに書き直し（where 句、ネストした繰り返し、インラインブレース、多段 $() ネストのインデントを修正）"
      - "変更: VS Code 拡張の normalizeMacroBodies で行ごとのブレースカウントを事前計算し O(n²) を O(1) に高速化"
  - version: "0.1.8"
    releaseStatus: "release"
    items:
      - "追加: マクロごとの明示的な整形結果（FORMATTED / UNCHANGED / 理由付き SKIPPED）と stderr への診断出力（stdout は有効な整形済み Rust のまま）"
      - "追加: 安全性オラクール（重要トークンの完全保存、ファイル全体の構文検証、二次パスでバイト一致を検証）"
      - "追加: linux-arm64 / win32-arm64 バイナリでバンドル対応を計6プラットフォームに拡大し、macOS / arm ランナーでの CI 検証も追加"
      - "変更: ra-ap-rustc_lexer によるトークン単位のマクロ検出と型付きデリミタ処理（文字列・コメント内の誤検出や UTF-8 破壊を修正）"
      - "変更: 非対応・損失を伴う変換は元のマクロを保持して SKIPPED を報告するフェイルクローズ設計。最大8パスで固定点に収束し、非収束入力は不安定な出力を返さない"
      - "変更: VS Code 拡張は元ドキュメントをネイティブフォーマッタへ直接送信し、失敗時は TypeScript の書き換えなしで素の rustfmt にフォールバック"
      - "変更: macro_rules! を含まない通常の Rust ファイルも同一の検証済みパイプラインで整形"
      - "修正: 非マクロ rustfmt パスの意図しない max_width=80 上書きを削除し、未設定の rustfmt（cargo fmt 相当）と完全に同じ出力に"
  - version: "0.1.9"
    releaseStatus: "release"
    items:
      - "変更: 同一ファイル内のマクロ定義を収束パスごとに1回の統合 rustfmt 呼び出しにバッチ化（トークン保存チェックに失敗した場合は従来の個別呼び出しにフォールバック）。21マクロのフィクスチャで起動 47→27 回、実行時間 約1.0秒→約0.62秒"
  - version: "0.1.10"
    releaseStatus: "release"
    items:
      - "修正: CRLF 改行かつ // コメントを含むファイルの整形が SKIPPED やエラーになる問題を修正（内部パスでは LF に正規化し、最終出力で CRLF を復元）"
---

rustfmtを使用したRustコードのフォーマットを行うVS Code拡張機能。シンプルで高速な拡張機能：`rustfmt --emit stdout`を実行し、`rustfmt.toml`（存在する場合）を自動検出し、Linux/Windows/macOSで動作します。保存時の自動フォーマット、コマンドパレットからの手動実行、バイナリパスや追加引数などのカスタムパラメータをサポートしています。
