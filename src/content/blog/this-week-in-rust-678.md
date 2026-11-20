---
title: "This Week in Rust 678"
description: "今週のクレートは xdgen です。fluent を介して AppStream メタ情報ファイルを翻訳するためのクレートです。"
pubDate: 2026-11-18
updatedDate: 2026-11-18
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/11/18/this-week-in-rust-678/"
externalId: "tag:this-week-in-rust.org,2026-11-18:/blog/2026/11/18/this-week-in-rust-678/"
issueNumber: 678
license: "CC BY-SA 4.0"
importMode: mirror
---

<p>こんにちは、<em>This Week in Rust</em> の新しい号へようこそ！
<a href="https://www.rust-lang.org/">Rust</a> は、誰もが信頼性が高く効率的なソフトウェアを構築できるようにするプログラミング言語です。
これは、その進捗とコミュニティの週刊サマリーです。
取り上げてほしいトピックがありますか？Bluesky の
<a href="https://bsky.app/profile/thisweekinrust.bsky.social">@thisweekinrust.bsky.social</a>、または
mastodon.social の <a href="https://mastodon.social/@thisweekinrust">@ThisWeekinRust</a> をタグ付けするか、
<a href="https://github.com/rust-lang/this-week-in-rust">プルリクエストをお送りください</a>。
参加してみませんか？<a href="https://github.com/rust-lang/rust/blob/main/CONTRIBUTING.md">貢献を大歓迎しています</a>。</p>
<p><em>This Week in Rust</em> は <a href="https://github.com/rust-lang/this-week-in-rust">GitHub</a> でオープンに開発されており、アーカイブは <a href="https://this-week-in-rust.org/">this-week-in-rust.org</a> で閲覧できます。
今週の号に誤りを見つけた場合は、<a href="https://github.com/rust-lang/this-week-in-rust/pulls">PR を提出してください</a>。</p>
<p>TWIR をメールで受け取りたいですか？<a href="https://this-week-in-rust.us11.list-manage.com/subscribe?u=fd84c1c757e02889a9b08d289&id=0ed8b72485">こちらから購読できます</a>。</p>
<h2 id="updates-from-rust-community"><a class="toclink" href="#updates-from-rust-community">Rustコミュニティからの最新情報</a></h2>


<h3 id="official"><a class="toclink" href="#official">公式</a></h3>
<ul>
<li><a href="https://blog.rust-lang.org/2026/11/16/enabling-parallel-frontend-on-nightly/">nightly での並列フロントエンドの有効化</a></li>
</ul>
<h3 id="foundation"><a class="toclink" href="#foundation">Foundation</a></h3>
<ul>
<li><a href="https://rustfoundation.org/media/how-policy-is-shaping-development-tune-in-to-the-next-jetbrains-rust-foundation-livestream/">ポリシーが開発をどのように形作っているか - 次回の JetBrains | Rust Foundation ライブ配信をチェック</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://rust-trends.com/newsletter/rust-1-100-ships-the-never-type/">Rust Trends 第87号 - Rust 1.100 が never 型を出荷</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>
<ul>
<li><a href="https://slint.dev/blog/slint-1.19-released">Slint 1.19 リリース</a></li>
<li><a href="https://burntsushi.net/jiff/">Jiff 1.0</a></li>
<li><a href="https://tvm.apache.org/2026/11/16/rust-native-cross-language-ml-compiler-foundation">Rust-Native な言語横断 ML コンパイラ基盤</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://blog.startifact.com/posts/how-rust-changed-me/">Rust が開発者としての私をどのように変えたか</a></li>
<li><a href="https://bryarworld.com/tutorials/opencode-browse-rust-rewrite/">OpenCode Browse がブラウザツールを Rust で書き直し: メモリ使用量を 97% 削減</a></li>
<li><a href="https://bertptrs.nl/2026/11/16/mutex-poisoning-is-not-for-everyone.html">Mutex のポイズニングは万人向けではない</a></li>
<li><a href="https://rust-trends.com/linux-rust/">Linux カーネルにおける Rust: v6.1 以降の各リリースにおけるコード行数、unsafe、および C への呼び出し</a></li>
<li><a href="https://edvong.com/bypass-orphan-rule/">Rust のオーファンルールを回避する方法</a></li>
<li><a href="https://blog.legoktm.com/2026/11/15/most-rust-projects-dont-bundle-ca-roots.html">ほとんどの Rust プロジェクトは CA ルート証明書を同梱していない</a></li>
<li><a href="https://kerkour.com/rust-fast-cryptography">現代の暗号処理は高速であり、C 言語やアセンブリを使い続ける言い訳は通用しない</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li><a href="https://tasarma.github.io/posts/ffi-part1/">Rust における外部関数インターフェース（FFI）、パート 1: Unsafe な基礎</a></li>
<li><a href="https://korntewin-b.medium.com/sccache-stop-compiling-the-same-rust-code-again-and-again-6ab2b584b3a7">sccache: 同じ Rust コードを何度もコンパイルするのはやめよう</a></li>
<li>[シリーズ] <a href="https://noahkawaguchi.com/blog/typenet-post-2/">Rust の型システムにおける TCP のエンコード、パート 2: プレースホルダー値は味方ではない</a></li>
<li>[シリーズ] <a href="https://kapteko.com/15-million-webservers/">1台の VM 上で 1,500 万の Web サーバーを実行する - smoltcp、DPDK、AF_XDP</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=-dNsUB7QRk4">Yoni Peleg と探る Rust 1.97 における誤コンパイル</a></li>
</ul>
<h3 id="research"><a class="toclink" href="#research">研究</a></h3>
<ul>
<li><a href="https://calif.io/research/rust-in-peace">Rust in Peace</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://github.com/pop-os/xdgen">xdgen</a> です。fluent を介して AppStream メタ情報ファイルを翻訳するためのクレートです。</p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1720">Sosthène Guédon</a> に感謝します！</p>
<p><a href="https://users.rust-lang.org/t/crate-of-the-week/2704">来週の提案や投票をお願いします</a>！</p>
<h2 id="calls-for-testing"><a class="toclink" href="#calls-for-testing">テストの募集</a></h2>
<p>RFC の実装において重要なステップは、特に安定化の前に、人々が実装を試してフィードバックを提供することです。</p>
<p>機能の実装者で、自分の RFC をこのリストに掲載したい場合は、RFC に <code>call-for-testing</code> ラベルを追加し、テスト手順やテストが必要な機能の側面に関するガイダンスを提供するコメントを添えてください。</p>
<p><em>今週は、<a href="https://github.com/rust-lang/rust/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rust</a>、
<a href="https://github.com/rust-lang/cargo/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Cargo</a>、
<a href="https://github.com/rust-lang/rustup/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rustup</a>、または
<a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing%20state%3Aopen">Rust 言語 RFC</a> からのテスト募集はありませんでした。</em></p>
<p>あなたの機能をこのリストの一部として追跡してほしい場合は、<a href="https://github.com/rust-lang/this-week-in-rust/issues">私たちにお知らせください</a>。</p>
<h3 id="rfcs"><a class="toclink" href="#rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing">RFC</a></a></h3>
<h3 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/labels/call-for-testing">Rust</a></a></h3>
<h3 id="rustup"><a class="toclink" href="#rustup"><a href="https://github.com/rust-lang/rustup/labels/call-for-testing">Rustup</a></a></h3>
<p>機能の実装者で、自分の RFC を上記のリストに掲載したい場合は、RFC に新しい <code>call-for-testing</code> ラベルを追加し、テスト手順やテストが必要な機能の側面に関するガイダンスを提供するコメントを添えてください。</p>
<h2 id="call-for-participation-projects-and-speakers"><a class="toclink" href="#call-for-participation-projects-and-speakers">参加の呼びかけ：プロジェクトと講演者</a></h2>
<h3 id="cfp-projects"><a class="toclink" href="#cfp-projects">CFP - プロジェクト</a></h3>
<p>オープンソースプロジェクトに貢献したいとずっと思っていたけれど、どこから始めればよいかわかりませんでしたか？
毎週、Rust コミュニティからあなたが選んで始められるタスクをいくつか紹介しています！</p>
<p>これらのタスクの中にはメンターが利用できるものもあります。詳細についてはタスクページをご覧ください。</p>


<ul>
<li><a href="https://github.com/Kolgrim33/appbridge/issues/1">AppBridge - [easy] 2つの .appbridge バンドル間のバイト節約量を検査するための CLI サブコマンド <code>appbridge delta</code> を追加する</a></li>
<li><a href="https://github.com/Kolgrim33/appbridge/issues/2">AppBridge - [medium] .appbridge バンドル向けの実際の Ed25519 非対称鍵ペアの生成と検証をサポートする</a></li>
<li><a href="https://github.com/vindeckyy/presswork/issues/6">presswork - ハードウェアマトリックス: 実際のプリンタに対して IPP 適合性スイートを実行する</a></li>
<li><a href="https://github.com/vindeckyy/presswork/issues/7">presswork - 残りのアップストリーム .test ファイルへの ipptool 適合性マトリックスの拡張</a></li>
<li><a href="https://github.com/rightcommit/rightcommit/issues/11">rightcommit - 最小限のローカル CI ワークフローの例を追加する</a></li>
<li><a href="https://github.com/rightcommit/rightcommit/issues/13">rightcommit - ローカル CI Makefile の優先順位に関するリグレッションテストを追加する</a></li>
<li><a href="https://github.com/MasihMoafi/rustidian/issues/4">Rustidian - 初回起動時に AppImage でデモ保管庫を開くようにする</a></li>
</ul>


<p>Rust プロジェクトのオーナーで貢献者をお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>からタスクを提出するか、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からご連絡ください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>新進気鋭の、あるいは経験豊富なスピーカーで、何かクールなことを共有する場をお探しですか？このセクションでは、企画進行中でスピーカーとしての参加応募を受け付けているイベントを紹介します。</p>


<p><em>今週は論文やプレゼンテーションの募集の提出はありませんでした。</em></p>
<p>イベントの認知度を高めたいとお考えのイベント主催者の方は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a> または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> を通じてウェブサイトへのリンクをお寄せください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p>先週は 616 件のプルリクエストが<a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-11-10..2026-11-17">マージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164864">EarlyOtherwiseBranch で未初期化の読み取りの巻き上げを回避する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165406"><code>Err</code> 上のスライスパターンに対して <code>as_deref</code> を提案しないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165979">インデックス推論の診断を改善する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/166032">長さを読み取る前に simd フィールドの型を正規化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165810">リフレクション: ADT、フィールド、バリアントからの属性を反映する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165872">属性関連の一部のクリーンアップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163077"><code>#[offload_kernel]</code> を持つネストされた関数をサポートする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162848">nightly および dev チャンネルでデフォルトで 2 つの並列フロントエンドスレッドを使用する</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165902"><code>vec_deque::IntoIter</code> および <code>vec_deque::Drain</code> に <code>allocator()</code> を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164043">alloc: <code>Vec::repeat</code> および <code>Vec::repeat_in</code> を実験的に追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165746">unix で巨大なスレッドスタックサイズを切り上げる際にオーバーフローしないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165412"><code>core::ops::FnAddr</code> を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163696"><code>int_from_ascii</code> を安定化する</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17708"><code>config</code>: 生成されたスキーマファイルを追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17714"><code>config</code>: config.toml のスキーマを反復改善</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17556"><code>trim-paths</code>: フィンガープリント内の絶対ソースパスをサニタイズする</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17735"><code>annotate-snippets</code> の <code>no-graphics</code> 出力形式のサポートを追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17518">compile: dev プロファイルを debug=lines-and-tables-only に切り替える</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17732">出力の mtime 追跡を刷新</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17737">test: <code>pub_priv::verify_mix_cargo_feature_z</code> に unordered を追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17718">コンパイルおよびビルドスクリプトユニット用の invoked.timestamp の場所を統合</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165922"><code>_</code> と名付けられた glob 再エクスポートを通じた外部アイテムのインライン化を防ぐ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/166045">型エイリアス上の deref impl を正しくフィルタリングする</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7251">全体で一貫して "Diff Check" を使用する</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7197"><code>wrap_comments</code> が有効な場合にリンクの宛先を分割しないようにする</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/6696">raw 文字列の冪等性の問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/6979">スキップされた impl アイテムの前に末尾の空白を残さないようにする</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/18060"><code>missing_errors_doc</code>: never 類似のエラー型を除外する</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17946"><code>assert_is_empty</code> を <code>VecDeque</code> をカバーするように拡張</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/18017"><code>single_match</code>/<code>single_match_else</code> の提案でセミコロンが失われる問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/18049"><code>unnecessary_literal_unwrap</code> からの誤った提案を修正</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23654"><code>.for</code>: 参照のみが into-iter を実装している場合に ref を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23647"><code>const</code> の後に <code>fn unsafe</code> を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23649">型アンカーにトレイトがある場合に型を補完しないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23638">大きな u128 値が定数評価で負の浮動小数点数にならないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23665"><code>builtin #</code> を強制キーワードに置き換える</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>プライマリベンチマークでインストラクション数が平均 -1.1% となり、改善がリグレッションを大幅に上回った概ね良好な一週間でした。</p>
<p>トリアージ担当: <strong>@simulacrum</strong>。
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=54d0b7edad511e84181ad50ec8413ef10f93b367&end=6ca2b34602bf2f3591ffa7359c166b6409a44b0a&absolute=false&stat=instructions%3Au">54d0b7ed..6ca2b346</a></p>
<p>5件のリグレッション、12件の改善、4件の混合。そのうち0件はロールアップ内
合計147回のアーティファクト比較を実施</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/main/triage/2026/2026-11-15.md">完全なレポートはこちら</a></p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC (コメント募集) プロセス</a>に従います。今週実装が承認された RFC は以下のとおりです:</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/3527">RFC: 関連定数のアンダースコア</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間」を発表します。今すぐあなたの意見を表明してください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust_1"><a class="toclink" href="#rust_1"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163910">debugger: trim-paths の unremap ファイルロードを安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/issues/163896"><code>rustc</code> における <code>documentation</code> スコープの安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165434"><code>char::is_case_ignorable</code>、<code>char::is_cased</code>、および <code>titlecase</code> 機能を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165125">std: <code>process::exit</code> に <code>_exit</code> を使用する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165366">本体のない関数における重複したパラメータ名に対するリントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164485">未チェックの <code>nonzero_ops</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164473">現実の挙動に合わせて比較に関する <code>PartialEq</code>/<code>PartialOrd</code> の保証を更新</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164918">リントの検証を属性のパースに移動</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160235">parser: 式に対する曖昧な属性を機能ゲート化（その2）</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165238">conflicting_repr_hints をハードエラーにする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165782">安全でない未知の診断属性を再びエラーにする</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1049">powerpc64-unknown-linux-gnuelfv2 をホストツール付きの Tier 2 に昇格</a></li>
</ul>
<h5 id="language-reference"><a class="toclink" href="#language-reference"><a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/reference/pull/2334">外部 static が宣言されたサイズよりも大きくなる可能性があることを文書化</a></li>
</ul>
<p><em>今週、<a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFCs</a>、<a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a>、<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、<a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a>、または <a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> で最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストの一部として追跡してほしい場合は、私たちにお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4029">資金調達チームの憲章</a></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-11-18 〜 2026-12-16 の Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-11-18 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Writing a firmware for Xteink ereader in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-19 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907781/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-22 | オンライン (ベンガルール, インド) | <a href="https://discord.com/invite/pvYY69PvyS">Embedded Rust Discord</a><ul>
<li><a href="https://discord.gg/t9Cb2gjjq7?event=1563494405086904360"><strong>Silicon Sundays 5: Making a cute robot visor with <code>no_std</code> Rust</strong></a></li>
</ul>
</li>
<li>2026-11-24 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254769/"><strong>Fourth Tuesday Rust Bookclub</strong></a></li>
</ul>
</li>
<li>2026-11-26 | オンライン | <a href="https://rust.bettercode.eu/">betterCode() Rust</a><ul>
<li><a href="https://rust.bettercode.eu/"><strong>betterCode() Rust 2026</strong></a></li>
</ul>
</li>
<li>2026-11-28 | オンライン (シャーロッツビル, バージニア州, 米国) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/317399210/"><strong>Getting Started with Game Development in Rust and Bevy</strong></a></li>
</ul>
</li>
<li>2026-12-01 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/omlooqv8"><strong>Cursed Rust</strong></a></li>
</ul>
</li>
<li>2026-12-01 | オンライン | <a href="https://www.eventbrite.es/o/erni-30130841744">ERNI</a><ul>
<li><a href="https://www.eventbrite.es/e/memory-safe-by-design-how-rust-strengthens-security-in-medtech-tickets-2003651953931"><strong>Memory-safe by design: How Rust strengthens security in medtech</strong></a></li>
</ul>
</li>
<li>2026-12-01 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993134/"><strong>Christmas Coding Challenge - Kick Off!</strong></a></li>
</ul>
</li>
<li>2026-12-02 | オンライン (インディアナポリス, インディアナ州, 米国) | <a href="https://www.meetup.com/indyrs">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/317404144/"><strong>Indy.rs - with Social Distancing</strong></a></li>
</ul>
</li>
<li>2026-12-03 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907782/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-12-04 | ハイブリッド (モスクワ, ロシア) | <a href="https://rustcon.ru/">RustCon RU</a><ul>
<li><a href="https://rustcon.ru/"><strong>RustCon 2026</strong></a></li>
</ul>
</li>
<li>2026-12-05 | オンライン (シャーロッツビル, バージニア州, 米国) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/317399385/"><strong>Entities, Components, and Systems: How Bevy Games Work</strong></a></li>
</ul>
</li>
<li>2026-12-06 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316331278/"><strong>Rust Deep Learning: First Sunday</strong></a></li>
</ul>
</li>
<li>2026-12-08 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254767/"><strong>Second Tuesday</strong></a></li>
</ul>
</li>
<li>2026-12-08 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993086/"><strong>👋 Community Catch Up</strong></a></li>
</ul>
</li>
<li>2026-12-12 | オンライン (シャーロッツビル, バージニア州, 米国) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/317399435/"><strong>Building a Game with Rust and Bevy: Putting It All Together</strong></a></li>
</ul>
</li>
<li>2026-12-15 | オンライン (ワシントン D.C., 米国) | <a href="https://www.meetup.com/rustdc">Rust DC</a><ul>
<li><a href="https://www.meetup.com/rustdc/events/316916636/"><strong>Mid-month Rustful</strong></a></li>
</ul>
</li>
<li>2026-12-16 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210235/"><strong>Rust Study/Hack/Hang-out</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-12-12 | インド バンガロール | <a href="https://hasgeek.com/rustbangalore">Rust Bangalore</a><ul>
<li><a href="https://hasgeek.com/rustbangalore/december-2026-rustacean-meetup/"><strong>December 2026 Rustacean Meetup</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
<li>2026-11-19 | デンマーク オーフス | <a href="https://www.meetup.com/rust-aarhus">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316938696/"><strong>Talk Night at EIVA</strong></a></li>
</ul>
</li>
<li>2026-11-19 | ノルウェー ベルゲン | <a href="https://www.meetup.com/bergen-rust-new-technology/events/">Rust Bergen</a><ul>
<li><a href="https://www.meetup.com/de-de/bergen-rust-new-technology/events/317045463/"><strong>Rust: FFI with C++, and Intro to Async</strong></a></li>
</ul>
</li>
<li>2026-11-20 - 2026-11-21 | ドイツ アウクスブルク | <a href="https://rust-augsburg.github.io/meetup">Rust Meetup Augsburg</a><ul>
<li><a href="https://my.tuxedocomputers.com/event/embedded-rust-mit-embassy-workshop-und-projekttag-28/register"><strong>Embedded Rust mit Embassy - Workshop und Projekttag</strong></a></li>
</ul>
</li>
<li>2026-11-24 | スイス バーゼル | <a href="https://www.meetup.com/rust-basel">Rust Basel</a><ul>
<li><a href="https://www.meetup.com/rust-basel/events/317258865/"><strong>Rust Meetup #17 @ ERNI</strong></a></li>
</ul>
</li>
<li>2026-11-25 | オランダ アムステルダム | <a href="https://www.meetup.com/rust-amsterdam-group">Rust Developers Amsterdam Group</a><ul>
<li><a href="https://www.meetup.com/rust-amsterdam-group/events/317381204/"><strong>Rust Meetup @ Reclamefolder</strong></a></li>
</ul>
</li>
<li>2026-11-25 | ドイツ ドルトムント | <a href="https://www.meetup.com/rust-dortmund">Rust Dortmund</a><ul>
<li><a href="https://www.meetup.com/rust-dortmund/events/317393392/"><strong>On-site Rust Ratatui Workshop in Dortmund</strong></a></li>
</ul>
</li>
<li>2026-11-26 | デンマーク コペンハーゲン | <a href="https://www.meetup.com/copenhagen-rust-community">Copenhagen Rust Community</a><ul>
<li><a href="https://www.meetup.com/copenhagen-rust-community/events/317181792/"><strong>Rust meetup #73 sponsored by Adapt!</strong></a></li>
</ul>
</li>
<li>2026-11-26 | 英国 ロンドン | <a href="https://www.meetup.com/rust-london-user-group">Rust London User Group</a><ul>
<li><a href="https://www.meetup.com/rust-london-user-group/events/317253958/"><strong>Rust London x Zed</strong></a></li>
</ul>
</li>
<li>2026-11-26 | 英国 マンチェスター | <a href="https://www.meetup.com/rust-manchester">Rust Manchester</a><ul>
<li><a href="https://www.meetup.com/rust-manchester/events/317222338/"><strong>Rust Manchester November Code Night</strong></a></li>
</ul>
</li>
<li>2026-11-26 | スウェーデン ストックホルム | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/317161063/"><strong>Rust Meetup @Lovable</strong></a></li>
</ul>
</li>
<li>2026-11-28 | スウェーデン ストックホルム | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/317458938/"><strong>Ferris' Fika Forum #32</strong></a></li>
</ul>
</li>
<li>2026-12-01 | フランス パリ | <a href="https://www.meetup.com/rust-paris">Rust Paris</a><ul>
<li><a href="https://www.meetup.com/rust-paris/events/316865676/"><strong>Rust meetup #90</strong></a></li>
</ul>
</li>
<li>2026-12-02 | ドイツ フランクフルト | <a href="https://www.meetup.com/rust-rhein-main">Rust Rhein-Main</a><ul>
<li><a href="https://www.meetup.com/rust-rhein-main/events/317186779/"><strong>From Curiosity to Capability: Build Your Own Device Swarm</strong></a></li>
</ul>
</li>
<li>2026-12-04 | ハイブリッド (モスクワ, ロシア) | <a href="https://rustcon.ru/">RustCon RU</a><ul>
<li><a href="https://rustcon.ru/"><strong>RustCon 2026</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
<li>2026-11-18 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Writing a firmware for Xteink ereader in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-18 | 米国 カリフォルニア州サンフランシスコ | <a href="https://luma.com/bayarearust">Bay Area Rust</a><ul>
<li><a href="https://luma.com/v0mxbgs8"><strong>Bay Area Rust - Social Night</strong></a></li>
</ul>
</li>
<li>2026-11-21 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924366/"><strong>Winter Hill Rust Lunch, Nov 21</strong></a></li>
</ul>
</li>
<li>2026-11-21 | 米国 ミネソタ州ミネアポリス | <a href="https://www.meetup.com/minneapolis-rust-meetup">Minneapolis Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/minneapolis-rust-meetup/events/317401121/"><strong>Minneapolis Rust Meetup Happy Hour</strong></a></li>
</ul>
</li>
<li>2026-11-28 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924412/"><strong>South Station Rust Lunch, Nov 28</strong></a></li>
</ul>
</li>
<li>2026-12-03 | カナダ モントリオール | <a href="https://www.meetup.com/rust-montreal">Rust Montréal</a><ul>
<li><a href="https://www.meetup.com/rust-montreal/events/317415310/"><strong>December Monthly Social</strong></a></li>
</ul>
</li>
<li>2026-12-04 | 米国 ニューヨーク州ニューヨーク | <a href="https://www.meetup.com/rust-nyc">Rust NYC</a><ul>
<li><a href="https://www.meetup.com/rust-nyc/events/317259308/"><strong>Rust NYC: The UnConf 2026.</strong></a></li>
</ul>
</li>
<li>2026-12-04 | 米国 ニューヨーク州ニューヨーク | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/317383331/"><strong>👋Women in Rust x Rust NYC UnConf 2026</strong></a></li>
</ul>
</li>
<li>2026-12-15 | 米国 カリフォルニア州サンフランシスコ | <a href="https://www.meetup.com/san-francisco-rust-study-group">San Francisco Rust Study Group</a><ul>
<li><a href="https://www.meetup.com/san-francisco-rust-study-group/events/315783990/"><strong>Rust Hacking in Person</strong></a></li>
</ul>
</li>
<li>2026-12-16 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210235/"><strong>Rust Study/Hack/Hang-out</strong></a></li>
</ul>
</li>
</ul>
<h3 id="oceania"><a class="toclink" href="#oceania">オセアニア</a></h3>
<ul>
<li>2026-11-24 | オーストラリア バートン | <a href="https://www.meetup.com/rust-canberra">Canberra Rust User Group</a><ul>
<li><a href="https://www.meetup.com/rust-canberra/events/316907340/"><strong>November Meetup</strong></a></li>
</ul>
</li>
</ul>
<p>Rust のイベントを開催する場合は、<a href="https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com">カレンダー</a>に追加してここで紹介されるようにしてください。イベントへのリンクも忘れずに追加してください。アクセスのためには <a href="mailto:community-team@rust-lang.org">Rust コミュニティチーム</a>にメールでお問い合わせください。</p>
<h2 id="jobs"><a class="toclink" href="#jobs">求人</a></h2>
<p><a href="https://www.reddit.com/r/rust/comments/1xzlbqp/official_rrust_whos_hiring_thread_for_jobseekers/">r/rust の最新の求人スレッド</a>をご覧ください</p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">今週の言葉</a></h2>
<blockquote>
<p><strong>登壇者</strong>: AI の明白な危険性の1つは、いつの日かすべてのコードを人間には到底理解できない謎のプログラミング言語で書き直してしまうかもしれないということです。AI にとってはその方がはるかに理解しやすく、作業効率が良いというだけの理由で……</p>
<p><strong>会場からの声</strong>: 「それって Rust のことですか？」</p>
</blockquote>
<p>– 会議中に小耳に挟んだ匿名の会話</p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1848">Bourumir</a> に感謝します！</p>
<p><a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328">来週の言葉の提案や投票をお願いします！</a></p>
<p>This Week in Rust は以下の方々によって編集されています：</p>
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
<p><em>メーリングリストのホスティングは <a href="https://foundation.rust-lang.org/">The Rust Foundation</a> のスポンサーシップを受けています</em></p>
<p><small><a href="https://www.reddit.com/r/rust/comments/1y01pc6/this_week_in_rust_678/">r/rust で議論する</a></small></p>