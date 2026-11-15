---
title: "This Week in Rust 674"
description: "今週のクレートは eilmeldung です。TUI ベースの RSS リーダーです。"
pubDate: 2026-10-21
updatedDate: 2026-10-21
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/10/21/this-week-in-rust-674/"
externalId: "tag:this-week-in-rust.org,2026-10-21:/blog/2026/10/21/this-week-in-rust-674/"
issueNumber: 674
license: "CC BY-SA 4.0"
importMode: mirror
---

<p>こんにちは、<em>This Week in Rust</em> の新しい号へようこそ！
<a href="https://www.rust-lang.org/">Rust</a> は、誰もが信頼性が高く効率的なソフトウェアを構築できるように支援するプログラミング言語です。
これは、その進捗とコミュニティの週刊サマリーです。
掲載を希望するものがありますか？Bluesky では
<a href="https://bsky.app/profile/thisweekinrust.bsky.social">@thisweekinrust.bsky.social</a>、mastodon.social では
<a href="https://mastodon.social/@ThisWeekinRust">@ThisWeekinRust</a> をタグ付けするか、
<a href="https://github.com/rust-lang/this-week-in-rust">プルリクエストを送信してください</a>。
参加したいですか？<a href="https://github.com/rust-lang/rust/blob/main/CONTRIBUTING.md">コントリビューションは大歓迎です</a>。</p>
<p><em>This Week in Rust</em> は <a href="https://github.com/rust-lang/this-week-in-rust">GitHub 上</a> でオープンに開発されており、アーカイブは <a href="https://this-week-in-rust.org/">this-week-in-rust.org</a> で閲覧できます。
今週の号に誤りを見つけた場合は、<a href="https://github.com/rust-lang/this-week-in-rust/pulls">PR を送信してください</a>。</p>
<p>TWIR を受信箱で受け取りたいですか？<a href="https://this-week-in-rust.us11.list-manage.com/subscribe?u=fd84c1c757e02889a9b08d289&id=0ed8b72485">こちらから購読できます</a>。</p>
<h2 id="updates-from-rust-community"><a class="toclink" href="#updates-from-rust-community">Rustコミュニティからの最新情報</a></h2>


<h3 id="official"><a class="toclink" href="#official">公式</a></h3>
<ul>
<li><a href="https://blog.rust-lang.org/2026/10/15/Rust-1.99.1/">Rust 1.99.1 のリリースのお知らせ</a></li>
<li><a href="https://blog.rust-lang.org/inside-rust/2026/10/20/gpu-target-notification-group/">GPU 通知グループおよびリンカー作業領域のお知らせ</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://rust-trends.com/newsletter/if-it-compiles-the-agent-got-it-right/">Rust Trends 第85号 - コンパイルが通れば、エージェントの判断は正しい</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>
<ul>
<li><a href="https://blog.cloudflare.com/typescript-rust-port/">tsrs の紹介: TypeScript の Rust への移植</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://kerkour.com/rust-at-cloudflare">Cloudflare はすべてを Rust で書き直している</a></li>
<li><a href="https://smallcultfollowing.com/babysteps/blog/2026/10/14/agentic-dev-and-rust/">エージェントが Rust にもたらす意味（そしてその逆）</a></li>
<li><a href="https://orlp.net/blog/black-box-hashdos/">ブラックボックス HashDoS: ハッシュ関数を知らずにハッシュテーブルを攻撃する</a></li>
<li><a href="https://yoyo-code.com/2026-is-exciting-year-for-rust-compiler-and-me/">2026年は Rust コンパイラ（そして私）にとって刺激的な年です</a></li>
<li><a href="https://tensorust.com/articles/crates-io-download-count/">crates.io のダウンロード数が実際に測定しているもの: 69 クレートからの 90 日間の日次データ</a></li>
<li><a href="https://lwn.net/SubscriberLink/1099224/54c55e87a0828522/">カーネル Rust における安全な自己参照データ構造</a></li>
<li><a href="https://lwn.net/SubscriberLink/1099596/7bfb3ee846a5f102/">Rust におけるクレート間の前方宣言</a></li>
<li><a href="https://heikoseeberger.de/2026-10-18-why-sync-handlers/">tellus のメッセージハンドラが同期的である理由</a></li>
<li><a href="https://www.collabora.com/news-and-blog/blog/2026/10/21/upstreaming-tyr-rust-drm-and-the-linux-kernel/">Tyr のアップストリーム化: Rust、DRM、および Linux カーネル</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li><a href="https://altunenes.github.io/posts/reuse/">数か月間音声モデルを GPU に強制配置してみた。結果、CPU の方が高速だった。</a></li>
<li><a href="https://purplesyringa.moe/blog/superoptimizing-an-fpu-emulator/">FPU エミュレータのスーパー最適化</a></li>
<li><a href="https://hlcfan.github.io/gpui-canvas-spinner.html">GPUI でのローディングスピナーの描画とアニメーション</a></li>
<li>[シリーズ] <a href="https://noahkawaguchi.com/blog/typenet-post-1/">Rust の型システムにおける TCP のエンコード、パート 1: シーケンス番号は <code>u32</code> ではない</a></li>
<li>[シリーズ] <a href="https://kapteko.com/running-10-million-codex-clis-on-one-server-lfi-processes/">1 台のサーバーで 1,000 万の Codex CLI を実行する - LFI プロセス</a></li>
</ul>
<h3 id="research"><a class="toclink" href="#research">研究</a></h3>
<ul>
<li><a href="https://doi.org/10.1145/3830440.3832304">JIT 構築への漸進的アプローチ</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=8qwXgappTWQ">[Scheme'26] JIT 構築への漸進的アプローチ</a></li>
</ul>
<h3 id="miscellaneous"><a class="toclink" href="#miscellaneous">その他</a></h3>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://crates.io/crates/eilmeldung">eilmeldung</a> です。TUI ベースの RSS リーダーです。</p>
<p>提案が惜しくも不足していたにもかかわらず、llogiq は自身の選択に非常に満足しています。</p>
<p><a href="https://users.rust-lang.org/t/crate-of-the-week/2704">来週の推薦や投票をお待ちしています</a>！</p>
<h2 id="calls-for-testing"><a class="toclink" href="#calls-for-testing">テストの募集</a></h2>
<p>RFC の実装における重要なステップは、特に安定化の前に、人々がその実装を実験してフィードバックを提供することです。</p>
<p>機能の実装者で、ご自身の RFC をこのリストに掲載したい場合は、テスト手順や機能のどの側面をテストすべきかのガイダンスを含むコメントとともに、RFC に <code>call-for-testing</code> ラベルを追加してください。</p>
<p><em>今週は、<a href="https://github.com/rust-lang/rust/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rust</a>、
<a href="https://github.com/rust-lang/cargo/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Cargo</a>、
<a href="https://github.com/rust-lang/rustup/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rustup</a>、または
<a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing%20state%3Aopen">Rust 言語 RFC</a> からのテスト募集はありませんでした。</em></p>
<p>ご自身の機能をこのリストで追跡したい場合は、<a href="https://github.com/rust-lang/this-week-in-rust/issues">お知らせください</a>。</p>
<h2 id="call-for-participation-projects-and-speakers"><a class="toclink" href="#call-for-participation-projects-and-speakers">参加の呼びかけ：プロジェクトと講演者</a></h2>
<h3 id="cfp-projects"><a class="toclink" href="#cfp-projects">CFP - プロジェクト</a></h3>
<p>オープンソースプロジェクトに貢献したいとずっと思っていたけれど、どこから始めればよいかわかりませんでしたか？
毎週、Rust コミュニティから選んで開始できるタスクをいくつか紹介しています！</p>
<p>これらのタスクの中にはメンターが利用可能なものもあります。詳細についてはタスクのページをご覧ください。</p>
<p>ScreenCue</p>
<ul>
<li><a href="https://github.com/CrioNIK/ScreenCue/issues/1">ScreenCue - 再現可能なデスクトップバグレポートの Issue フォームを追加する</a></li>
</ul>



<p>sysknife</p>
<ul>
<li><a href="https://github.com/lacs-project/sysknife/issues/560">sysknife - README では CLI の承認ゲートが sysknife approve とされているが、CLI は自身のプロンプトの後にインプロセスで承認する</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/561">sysknife - --dry-run が --max-risk を超えるプランやこのディストリビューションで実行できないプランに対して 0 で終了する</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/563">sysknife - デーモンの実行中に sysknife-setup を再実行すると ETXTBSY で失敗し、バイナリの不一致が残る可能性がある</a></li>
</ul>



<p>Manguebyte</p>
<ul>
<li><a href="https://github.com/alessonqueirozdev-hub/manguebyte/issues/22">Manguebyte - ParamSmoother をアロケーションガードの下に配置する</a></li>
<li><a href="https://github.com/alessonqueirozdev-hub/manguebyte/issues/23">Manguebyte - DelayLine::read および Delay::set_time で NaN の遅延を最短遅延として処理する</a></li>
<li><a href="https://github.com/alessonqueirozdev-hub/manguebyte/issues/24">Manguebyte - cargo deny ジョブでセキュリティアドバイザリをチェックする</a></li>
<li><a href="https://github.com/alessonqueirozdev-hub/manguebyte/issues/25">Manguebyte - プラグインがホストにそのテイルを報告できるようにする</a></li>
<li><a href="https://github.com/alessonqueirozdev-hub/manguebyte/issues/7">Manguebyte - スクリーンキーボードをはじめとするオーディオウィジェットを追加する</a></li>
</ul>
<p>krate</p>
<ul>
<li><a href="https://github.com/incyashraj/krate/issues/32">krate - wasm32 および Windows ターゲットでの 2 つの警告を修正する（easy）</a></li>
<li><a href="https://github.com/incyashraj/krate/issues/28">krate - Linux: ユーザーのダークモードおよびテキストサイズに従う（medium）</a></li>
<li><a href="https://github.com/incyashraj/krate/issues/29">krate - krate pack: --keep-debug フラグを追加する（medium）</a></li>
</ul>
<p>If you are a Rust project owner and are looking for contributors, please submit tasks <a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">here</a> or through a <a href="https://github.com/rust-lang/this-week-in-rust">PR to TWiR</a> or by reaching out on <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> or <a href="https://mastodon.social/@thisweekinrust">Mastodon</a>!</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>素晴らしいトピックを共有する場を探している、新しい講演者または経験豊富な講演者ですか？このセクションでは、計画中で講演者としての応募を受け付けているイベントを取り上げています。</p>



<p>イベントの主催者でイベントの認知度を高めたい場合は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からウェブサイトへのリンクを送信してください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p><a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-10-13..2026-10-20">先週、601 件のプルリクエストがマージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164486">リント属性内のリテラルの診断を改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162432">整形式でない関連アイテムの診断を改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164178">式および型パスのパスに対する <code>diagnostic::on_unknown</code> フォーマットプレースホルダーを修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164236"><code>fully_perform</code> の早期リターンをより早い段階へ移動</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163857">span 圧縮を刷新</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164059">perf: <code>unwrap</code> の代わりに <code>unwrap_failed</code> 内でエラーをドロップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162811">リント属性を移植</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163383">関連アイテムについて言及する際にトレイト／アイテムを指すコンテキスト span を提供</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164114">フィールドのない型での <code>derive(Default)</code> の以前の動作を復元</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164332">サイズ制限がゼロのときに移動チェックをスキップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163436"><code>-Zembed-metadata</code> を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162727">関数引数の const ジェネリクスをサポート</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/160285"><code>codeview_annotation</code> 組み込み関数を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163611"><code>core::process::resumable_breakpoint</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162444">サポートされていない場合でも <code>std::fs::{File, ReadDir, DirEntry}</code> が常に <code>needs_drop</code> となるように修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164369">タプルの <code>PartialOrd</code> 連鎖を mir-opt で扱いやすく改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161163">windows: <code>inherit_handles</code> を安定化</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17602"><code>build-std</code>: build.build-std.when および crates 設定キーを追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17613"><code>prerelease</code>: <code>-Zprerelease</code> で <code>[patch]</code> をサポート</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17594"><code>config</code>: rustflags に対するドット付きタプルのサポートを適用</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17599"><code>config</code>: credentials.toml からレジストリ設定を読み込まないように修正</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17521"><code>fingerprint</code>: ソースの mtime が一致する場合に安定したパスを選択</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17600"><code>util-schemas</code>: url が構築できない場合にファイルパスのヒントをコンパイルから除外</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17574">シェル補完でその機能を持つすべてのパッケージを表示</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17589"><code>-L</code> パスを整理する際にクレートタイプをチェック</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7179">config: グローバル設定ファイルの検索を修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7181">マクロコンテキストでのフォーマット時に空のジェネリック引数を削除しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7174">アイテムリスト内でコメント幅を強制</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7171"><code>cfg_select!</code> パーサーの回復処理およびパーサーセッションのエラー数リークを修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7170">文のコメントの折り返しを修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7192">ネストした括弧を削除する際に rustfmt が式属性を削除しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7183"><code>cfg_select!</code> アーム内で rustfmt が必要なブロックを削除しないように修正</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/162778">サイドバーの同名メソッドに対する曖昧さ回避表記を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164266"><code>rustc_must_implement_one_of</code> の改善</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17863">マクロ内部からの <code>allow_attributes</code> を許可</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17866">外部マクロ展開から属性が渡される場合にすべてのドキュメントリントを中止</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16549">コレクションの再代入をクリア</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17715"><code>from_str_radix_10</code> を NonZero 型に拡張</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17881"><code>TryFrom::try_from</code> パラメータの名前が <code>value</code> でない場合に <code>try_from_instead_of_from_str</code> リントの提案がエラーを引き起こす問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17828">マクロ生成された glob インポートでの <code>wildcard_imports</code> の無限ループを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17879"><code>nonstandard_macro_braces</code> での末尾セミコロンを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17029">新しいリント: <code>bufreader_stdin</code></a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17865"><code>useless_attribute</code>: <code>clippy::allow_attributes</code> に対するリントを廃止</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23513">フィールド投影を含むコードで <code>viewMir</code> がパニックする問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23504">無限構造体で <code>struct_tail_erasing_lifetimes</code> から脱出</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23173">複数のターゲットを持つクレート内で曖昧でないモニカーを構築</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23533">推論された無効な型を持つ範囲パターンに対して E0029 を出力</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23518">キーワードモジュール名の補完をエスケープ</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23523">スニペットなしの属性補完を改善</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23488">ops: <code>ref-version-mismatch</code>、<code>stale-action-refs</code>、および <code>unpinned-uses</code> を解決</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>小さな規模の変更が主流の一週間でした。しかし、多くの改善がマージされ、全体平均で 1.4% の改善という好ましい結果が得られました。</p>
<p>トリアージ実施者: <strong>@simulacrum</strong>
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=7211ea594cbf137ef6118b1752b959dea7cb9088&end=bd4c6cc4aeef0eb9919c6f73c1e690677e9c6b38&absolute=false&stat=instructions%3Au">7211ea59..bd4c6cc4</a></p>
<p>悪化 6 件、改善 9 件、混合 8 件；そのうちロールアップに含まれるものはありませんでした
合計 43 件の成果物比較が実施されました</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/main/triage/2026/2026-10-19.md">完全なレポートはこちら</a></p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust の <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC（Request for Comments）プロセス</a>に従います。今週、実装に向けて承認された RFC は以下の通りです：</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4022">libs nominated triagebot.toml を修正</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐご意見をお寄せください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164328">core: 次の prelude に <code>assert_matches</code> と <code>debug_assert_matches</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/159374">#[no_mangle] を #[symbol_name]/#[link_name] に lowering</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163816">String::into_chars を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163458">{Rc, Arc}::is_unique を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163499">vec: into_iter 向けのアロケータを安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161771">共用体フィールドに対する構造体および配列パターンで <code>unsafe</code> を不要に</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164028">#[no_link] に対する将来の非互換性警告を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162597">ツール属性である可能性のある属性マクロで曖昧性エラーを発生させる</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164209"><code>-Znext-solver=globally</code> を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163895">rustdoc における <code>--remap-path-scope</code> および <code>documentation</code> スコープを安定化</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1045"><code>annotate-snippets</code> の <code>no-graphics</code> 出力形式のサポートを追加</a></li>
</ul>
<p><em>今週は、<a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFC</a>、
<a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a>、
<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、
<a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a>、
<a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a>、または
<a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> において最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストで追跡したい場合はお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4021"><code>std::env::{vars, args}</code> の非推奨化</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4019">RFC: スヌーズを禁止する厳格な <code>Future</code> コントラクトの文書化</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4018">RFC: extern "Rust_manyregs" ABI</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4020">RFC: <code>AsyncIterator</code> に <code>poll_progress</code> を追加</a></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-10-21 から 2026-11-18 までの Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-10-21 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210233/"><strong>Rust 勉強・ハック・交流会</strong></a></li>
</ul>
</li>
<li>2026-10-21 | オンライン (カーディフ, 英国) | <a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff">Rust and C++ Cardiff</a><ul>
<li><a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff/events/316880405/"><strong>オペレーティングシステム読書会: ページング機構</strong></a></li>
</ul>
</li>
<li>2026-10-22 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/k1978ath"><strong>ネイティブから Web までの Rust と GPU: <code>wgpu</code> 入門</strong></a></li>
</ul>
</li>
<li>2026-10-22 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316272609/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-10-26 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/1byfc495"><strong>Python を使わない: 超小型 MCU に動作しながら学習させる</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254771/"><strong>第4火曜日 Rust 読書会</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315297195/"><strong>Lunch & Learn: 非同期 Rust での推論</strong></a></li>
</ul>
</li>
<li>2026-10-29 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/q8i3385k"><strong>Rust で 16 進数エディタを作成する</strong></a></li>
</ul>
</li>
<li>2026-11-01 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316331277/"><strong>Rust Deep Learning: 第1日曜日</strong></a></li>
</ul>
</li>
<li>2026-11-03 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/rfbzk3ae"><strong>SolverForge を使用した Rust での実環境計画問題の解決</strong></a></li>
</ul>
</li>
<li>2026-11-03 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315773682/"><strong>👋 コミュニティキャッチアップ</strong></a></li>
</ul>
</li>
<li>2026-11-04 | オンライン (インディアナポリス, インディアナ州, 米国) | <a href="https://www.meetup.com/indyrs">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/wqzhftyjcpbgb/"><strong>Indy.rs - ソーシャルディスタンスを保って</strong></a></li>
</ul>
</li>
<li>2026-11-05 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907780/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-10 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254770/"><strong>第2火曜日</strong></a></li>
</ul>
</li>
<li>2026-11-12 | オンライン (ニュルンベルク, ドイツ) | <a href="https://www.meetup.com/rust-noris">Rust Nuremberg</a><ul>
<li><a href="https://www.meetup.com/rust-noris/events/315619619/"><strong>Rust Nürnberg online</strong></a></li>
</ul>
</li>
<li>2026-11-15 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/omlooqv8"><strong>Cursed Rust</strong></a></li>
</ul>
</li>
<li>2026-11-15 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316563020/"><strong>Rust Deep Learning: 第3日曜日</strong></a></li>
</ul>
</li>
<li>2026-11-17 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/2qfai4a8"><strong>Miscompilation in Rust 1.97</strong></a></li>
</ul>
</li>
<li>2026-11-17 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315719313/"><strong>Lunch & Learn: The Harness Wore a Trenchcoat - Building a Rust MCP Server</strong></a></li>
</ul>
</li>
<li>2026-11-17 | オンライン (ワシントン D.C., 米国) | <a href="https://www.meetup.com/rustdc">Rust DC</a><ul>
<li><a href="https://www.meetup.com/rustdc/events/fhvsztyjcpbwb/"><strong>Mid-month Rustful</strong></a></li>
</ul>
</li>
<li>2026-11-18 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Rust で Xteink 電子書籍リーダーのファームウェアを作成する</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-11-03 | テルアビブ, イスラエル | <a href="https://www.meetup.com/rust-tlv">Rust 🦀 TLV</a><ul>
<li><a href="https://www.meetup.com/rust-tlv/events/316440864/"><strong>テルアビブの AWS で開催される対面 Rust 2026年11月</strong></a></li>
</ul>
</li>
<li>2026-11-14 | ベンガルール, インド | <a href="https://hasgeek.com/rustbangalore/">Rust Bangalore</a><ul>
<li><a href="https://hasgeek.com/rustbangalore/november-2026-rustacean-meetup/"><strong>2026年11月 Rustacean ミータップ</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
<li>2026-10-22 | カールスルーエ, ドイツ | <a href="https://www.meetup.com/rust-hack-learn-karlsruhe">Rust Hack & Learn Karlsruhe</a><ul>
<li><a href="https://www.meetup.com/rust-hack-learn-karlsruhe/events/316799366/"><strong>Karlsruhe Rust Hack and Learn Meetup bei BlueYonder</strong></a></li>
</ul>
</li>
<li>2026-10-22 | トゥールーズ, フランス | <a href="https://www.meetup.com/rust-community-toulouse">Rust Toulouse</a><ul>
<li><a href="https://www.meetup.com/rust-community-toulouse/events/316880185/"><strong>Rust Toulouse Meetup - Rust と Python の相互運用性</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オーフス, デンマーク | <a href="https://www.meetup.com/rust-aarhus">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316796329/"><strong>Hack Night: Rust が AI と出会う</strong></a></li>
</ul>
</li>
<li>2026-10-27 | パリ, フランス | <a href="https://www.meetup.com/rust-paris">Rust Paris</a><ul>
<li><a href="https://www.meetup.com/rust-paris/events/316865643/"><strong>Rust meetup #89</strong></a></li>
</ul>
</li>
<li>2026-10-28 | コペンハーゲン, デンマーク | <a href="https://www.meetup.com/copenhagen-rust-community">Copenhagen Rust Community</a><ul>
<li><a href="https://www.meetup.com/copenhagen-rust-community/events/316545936/"><strong>Google スポンサーによる Rust meetup #72！</strong></a></li>
</ul>
</li>
<li>2026-10-31 | ストックホルム, スウェーデン | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/316721062/"><strong>Ferris' Fika Forum #31</strong></a></li>
</ul>
</li>
<li>2026-11-01 - 2026-11-03 | イタリア | <a href="https://rustlab.it/">RustLab</a><ul>
<li><a href="https://rustlab.it/schedule"><strong>RustLab - イタリアで開催される国際 Rust カンファレンス</strong></a></li>
</ul>
</li>
<li>2026-11-04 | ダブリン, アイルランド | <a href="https://www.meetup.com/rust-dublin">Rust Dublin</a><ul>
<li><a href="https://www.meetup.com/rust-dublin/events/316898325/"><strong>Rust 263: Oracle AI Database 向け新しい Rust ドライバーの導入</strong></a></li>
</ul>
</li>
<li>2026-11-05 | ミラノ, イタリア | <a href="https://www.meetup.com/rust-language-milano">Rust Language Milan</a><ul>
<li><a href="https://www.meetup.com/rust-language-milan/events/316213872/"><strong>鉄道模型と Rust: ESP32 上のベアメタル DCC コマンドステーション</strong></a></li>
</ul>
</li>
<li>2026-11-17 | ライプツィヒ, ドイツ | <a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig">Rust - Modern Systems Programming in Leipzig</a><ul>
<li><a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig/events/313816501/"><strong>Everlock: すべては Git であり、プロトコルは単なるアダプターに過ぎない</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
<li>2026-10-21 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210233/"><strong>Rust 勉強・ハック・交流会</strong></a></li>
</ul>
</li>
<li>2026-10-21 | サンフランシスコ, カリフォルニア州, 米国 | <a href="https://luma.com/bayarearust">Bay Area Rust</a><ul>
<li><a href="https://luma.com/ur4pm34i"><strong>Bay Area Rust - 組み込みミートアップ</strong></a></li>
</ul>
</li>
<li>2026-10-22 | ニューヨーク, ニューヨーク州, 米国 | <a href="https://www.meetup.com/rust-nyc">Rust NYC</a><ul>
<li><a href="https://www.meetup.com/rust-nyc/events/316901518/"><strong>Bryan Cantrill と語る Rust NYC - Code Matters: LLM 時代の Rust に関する考察</strong></a></li>
</ul>
</li>
<li>2026-10-24 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924143/"><strong>Davis Square Rust ランチ, 10月24日</strong></a></li>
</ul>
</li>
<li>2026-10-28 | オースティン, テキサス州, 米国 | <a href="https://www.meetup.com/rust-atx/events/">Rust ATX</a><ul>
<li><a href="https://www.meetup.com/rust-atx/events/316655403/"><strong>Rust ランチ - Fareground</strong></a></li>
</ul>
</li>
<li>2026-10-31 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924288/"><strong>North End Rust ランチ, 10月31日</strong></a></li>
</ul>
</li>
<li>2026-11-05 | モントリオール, カナダ | <a href="https://www.meetup.com/rust-montreal">Rust Montréal</a><ul>
<li><a href="https://www.meetup.com/rust-montreal/events/316919004/"><strong>11月 月例ソーシャル</strong></a></li>
</ul>
</li>
<li>2026-11-05 | サンフランシスコ, カリフォルニア州 | Rust LA: NVIDIA!<ul>
<li><a href="https://luma.com/iqe7wng1"><strong>NVIDIA x Lawrence Harvey | CUDA Rust</strong></a></li>
</ul>
</li>
<li>2026-11-05 | セントルイス, ミズーリ州, 米国 | <a href="https://www.meetup.com/stl-rust">STL Rust</a><ul>
<li><a href="https://www.meetup.com/stl-rust/events/316896797/"><strong>HTMX と Rust</strong></a></li>
</ul>
</li>
<li>2026-11-12 | サンディエゴ, カリフォルニア州, 米国 | <a href="https://www.meetup.com/san-diego-rust">San Diego Rust</a><ul>
<li><a href="https://www.meetup.com/san-diego-rust/events/316886787/"><strong>San Diego Rust 11月ミートアップ - 対面再開！</strong></a></li>
</ul>
</li>
<li>2026-11-14 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924331/"><strong>MIT Rust ランチ, 11月14日</strong></a></li>
</ul>
</li>
<li>2026-11-17 | ロサンゼルス, カリフォルニア州, 米国 | <a href="https://www.meetup.com/rust-los-angeles">Rust Los Angeles</a><ul>
<li><a href="https://www.meetup.com/rust-los-angeles/events/316859673/"><strong>Rust LA 11月 w/ Hadrian!</strong></a></li>
</ul>
</li>
<li>2026-11-17 | サンフランシスコ, カリフォルニア州, 米国 | <a href="https://www.meetup.com/san-francisco-rust-study-group">San Francisco Rust Study Group</a><ul>
<li><a href="https://www.meetup.com/san-francisco-rust-study-group/events/315783989/"><strong>対面での Rust ハッキング</strong></a></li>
</ul>
</li>
<li>2026-11-18 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Rust で Xteink 電子書籍リーダーのファームウェアを作成する</strong></a></li>
</ul>
</li>
</ul>
<h3 id="south-america"><a class="toclink" href="#south-america">南米</a></h3>
<ul>
<li>2026-11-07 | プラナルト・パウリスタ, ブラジル | <a href="https://www.meetup.com/rust-sao-paulo-meetup">Rust São Paulo Meetup</a><ul>
<li><a href="https://www.meetup.com/rust-sao-paulo-meetup/events/316812852/"><strong>Encontro do Rust-SP - Agora no Luma</strong></a></li>
</ul>
</li>
</ul>
<p>Rust のイベントを開催されている場合は、ここに掲載されるよう <a href="https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com">カレンダー</a> に追加してください。イベントへのリンクも忘れずに追加してください。
アクセス権については <a href="mailto:community-team@rust-lang.org">Rust コミュニティチーム</a> にメールでお問い合わせください。</p>
<h2 id="jobs"><a class="toclink" href="#jobs">求人</a></h2>
<p><a href="https://www.reddit.com/r/rust/comments/1wzctie/official_rrust_whos_hiring_thread_for_jobseekers/">r/rust の最新の求人募集スレッド</a>をご覧ください。</p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">今週の言葉</a></h2>
<blockquote>
<p>私には、LLM が生成するコードにとって Rust を魅力的なターゲットにしている要素と同じ要素が、コードを書く人間としての私にとっても Rust を魅力的なものにしているように思えます。それは、素晴らしいコンパイラのフィードバックと第一級のツール群です。</p>
</blockquote>
<p>– <a href="https://users.rust-lang.org/t/recent-explosion-in-rust-rewrites-and-reimplementations-with-llms-thoughts/142939/33">rust-users での Christian Haynes の発言</a></p>
<p>推薦してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1829">Moy2010</a> に感謝します！</p>
<p><a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328">来週の言葉の推薦や投票をお待ちしています！</a></p>
<p>This Week in Rust の編集者：</p>
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
</ul>
<p><em>メール配信ホスティングは <a href="https://foundation.rust-lang.org/">The Rust Foundation</a> から後援されています。</em></p>
<p><small><a href="https://www.reddit.com/r/rust/comments/1xc54av/this_week_in_rust_674/">r/rust で議論する</a></small></p>
