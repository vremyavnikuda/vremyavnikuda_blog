---
title: "This Week in Rust 676"
description: "今週のクレートは tellus です。非同期コードを書くことなく使用できる、Tokio ベースのアクターフレームワークです。"
pubDate: 2026-11-04
updatedDate: 2026-11-04
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/11/04/this-week-in-rust-676/"
externalId: "tag:this-week-in-rust.org,2026-11-04:/blog/2026/11/04/this-week-in-rust-676/"
issueNumber: 676
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
<li><a href="https://blog.rust-lang.org/inside-rust/2026/11/02/maintainer-spotlight-anthony-bolden-walnut356/">メンテナースポットライト: Anthony Bolden (@Walnut356)</a></li>
<li><a href="https://blog.rust-lang.org/2026/11/03/Rustup-1.29.3/">rustup 1.29.3 のリリースのお知らせ</a></li>
</ul>
<h3 id="foundation"><a class="toclink" href="#foundation">Foundation</a></h3>
<ul>
<li><a href="https://rustfoundation.org/media/update-on-rust-foundation-staffing/">Rust Foundation の人事に関する最新情報</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://rust-trends.com/newsletter/systemd-opens-the-door-to-rust/">Rust Trends 第86号 - systemd が Rust への扉を開く</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>


<ul>
<li><a href="https://amutable.com/blog/systemd-loves-rust">systemd ❤️ Rust</a></li>
<li><a href="https://blog.guillaume-gomez.fr/articles/2026-10-30+sysinfo%3A+fixing+performance+to+retrieve+process+GPU+usage">sysinfo: プロセスの GPU 使用率取得のパフォーマンスを修正</a></li>
<li><a href="https://m-compressors.github.io/2026/formal-verification-mbrotli-mzstd/">形式検証に向けて: mbrotli と mzstd</a></li>
<li><a href="https://ruffle.rs/blog/2026/11/04/stable-releases-and-everything-else">Ruffle: 安定版リリース、API、テキスト... そしてその他のすべて！</a></li>
<li><a href="https://blog.antoyo.xyz/rustc_codegen_gcc-progress-report-44">進捗レポート #44: rustc_codegen_gcc が Aarch64 上で rustc をブートストラップ可能に！</a></li>
</ul>
<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://corrode.dev/blog/thinking-in-traits/">トレイトで考える（Thinking in Traits）</a></li>
<li><a href="https://nnethercote.github.io/2026/11/04/how-to-speed-up-the-rust-compiler-in-november-2026.html">2026年11月に Rust コンパイラを高速化する方法</a></li>
<li><a href="https://pivotlake.io/blog/its-the-memory-latency-stupid/">重要なのはメモリレイテンシだ、愚か者め · Pivot blog</a></li>
<li><a href="https://blog.yoshuawuyts.com/the-future-trait-has-a-missing-state">欠落している Future の状態</a></li>
<li><a href="https://kerkour.com/secure-rust-projects">サイバー攻撃の波から Rust プロジェクトを保護するために知っておくべきすべてのこと</a></li>
<li>[音声] <a href="https://netstack.fm/episodes/small-crates-behind-big-rust-systems">大規模な Rust システムの背後にある小さなクレート</a></li>
<li>[音声] <a href="https://rustacean-station.org/episode/jonas-kruckenberg/">Jonas Kruckenberg と語る C から Rust への移行</a></li>
<li><a href="https://delta.dev/blog/fine-grained-version-control-for-agents">Rust と Durable Objects を使用してエージェント向けのきめ細かなバージョン管理を構築する</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li>[シリーズ] <a href="https://kapteko.com/userland-linux-scheduler-in-rust/">Rust によるユーザーランド Linux スケジューラ - 時間よりも速く</a></li>
<li><a href="https://medium.com/@potto_94870/who-are-you-versus-who-owns-you-what-rust-memory-safety-and-wireless-addressing-have-in-common-b876a81468d5">あなたは誰か？ 対 誰があなたを所有しているか？ — Rust のメモリ安全性とワイヤレスアドレッシングの共通点</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=R8IeTvTHlxU">Rust のアトミックスを解明する</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=X5Bf_Udenys">Rust の関数を改善する</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://crates.io/crates/tellus">tellus</a> です。非同期コードを書くことなく使用できる、Tokio ベースのアクターフレームワークです。</p>
<p>一部自薦してくださった <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1708">Sean Kwak</a> に感謝します！</p>
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



<ul>
<li>
<p><a href="https://github.com/Ramesh-35/invar/issues/2">INVAR - HELLTEST の敵対的入力プローブをコミットされたリグレッションテストに変換する</a></p>
</li>
<li>
<p><a href="https://github.com/endlessGold/Plastor/issues/6">Plastor - トレースステップを Python から Rust に移植する</a></p>
</li>
<li><a href="https://github.com/endlessGold/Plastor/issues/2">Plastor - トーンバンドとクロスコンターから深度を読み取る（実際の図面での平坦な頭部を修正）</a></li>
<li><a href="https://github.com/endlessGold/Plastor/issues/8">Plastor - CI: Linux、macOS、Windows 上で Blender なしのチェックをビルドおよび実行</a></li>
<li><a href="https://github.com/endlessGold/Plastor/issues/10">Plastor - <code>mh score</code>: 水密性とオイラー標数を報告</a></li>
<li><a href="https://github.com/shinycake/quill/issues/1351">Quill - 無料メッセージリンクを介して開始されたチャットのサービスメッセージを表示</a></li>
<li><a href="https://github.com/shinycake/quill/issues/1352">Quill - 無料メッセージトークンを含むリンクを開いたときにトークンを適用</a></li>
<li><a href="https://github.com/shinycake/quill/issues/1353">Quill - 実際の Windows および Linux マシンで Quill を試し、壊れている箇所を報告</a></li>
</ul>
<p>Rust プロジェクトのオーナーでコントリビューターをお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からタスクを送信してください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>素晴らしいトピックを共有する場を探している、新しい講演者または経験豊富な講演者ですか？このセクションでは、計画中で講演者としての応募を受け付けているイベントを取り上げています。</p>


<ul>
<li><a href="https://rust-fosdem.github.io/">**FOSDEM'27 Rust Devroom</a> | 2026-11-20 23:59 CET | ブリュッセル, ベルギー | 2027-01-31</li>
</ul>
<p>イベントの主催者でイベントの認知度を高めたい場合は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からウェブサイトへのリンクを送信してください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p><a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-10-27..2026-11-03">先週、597 件のプルリクエストがマージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165184">GCI: 関連定数の where 句の整形式性をチェック</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163359">MIR の移動の除去 (1.5/6): ZST が常に初期化されることを保証</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163339">MIR の移動の除去 (5/6): ストレージの再構築</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161131">関連定数バインディング型をチェック</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164607">リント基盤の非文字列化（destringlyfy）</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164341"><code>coerce_unsized</code> での早期リターンケースを拡張</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164234"><code>diesel</code> 向けの新しいソルバー最適化 (パート 2)</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165160">diesel 向けの新しいソルバー最適化 (パート 3)</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164726">perf: 構造体の <code>derive(Debug)</code> でフィールド名を連結文字列として出力</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165214"><code>MaybeUninit::from_ref</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165248">{<code>Receiver</code>, <code>Sender</code>, <code>SyncSender</code>}<code>::</code>{<code>is_empty,len</code>} を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164848"><code>NonZero</code> に <code>strict_</code> メソッドを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165103"><code>TrySendError::into_inner</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164608">core: <code>resumable_breakpoint</code> を const 化し、<code>std</code> で再エクスポート</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165284"><code>optimize_for_size</code> において uXX の display 実装が小さくなることを保証</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165181"><code>Duration::display_seconds</code> を実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160186">任意の ABI の安全な関数に対して <code>Fn</code> トレイトを実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164155"><code>Vec::retain_unstable</code> ACP を実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165132"><code>Fuse</code> に <code>advance_back_by</code> を実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/144090"><code>IoSlice</code> および <code>IoSliceMut</code> メソッドを非安定で const に</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163525">lang アイテムの収集をリゾルバに移動</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163757">vec の <code>extend_with</code> を特殊化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162754">スライスの回転における大きな要素を最適化</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17623">windows: ほとんどのコマンドが使用しないシステム DLL の遅延読み込み</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17660">マニフェストスキーマ生成の修正: <code>TomlOptLevel</code> と <code>StringOrVec</code></a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17641">競合する proc-macro マニフェスト設定に関する警告</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/138143">サイドバーのクレートリストをカスタマイズするための非安定オプション <code>--crate-list-heading</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162916"><code>ItemKind</code> を改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160370">注目すべきトレイト（notable trait）のバッジとポップオーバーの機能拡張</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7214"><code>cfg_select!</code> の二重中括弧の簡潔なフォーマットで <code>control_brace_style</code> を尊重するように修正</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17051"><code>#[target_feature(enable)]</code> 属性付き関数に対する安全性ドキュメントの欠落を報告しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17941"><code>arbitrary_source_item_ordering</code> における ICE を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17950">定数コンテキストでの <code>assert_is_empty</code> の誤検知を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17794">呼び出し元で <code>.as_ref()</code> を言及するようトレイトオブジェクトに対する <code>borrowed_box</code> の提案を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17741">変更を加えるクロージャに対する <code>manual_inspect</code> の提案を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17963">fix: 剰余同一性チェックにおける符号付き abs の丸めエラーを修正</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23602">ジェネリクスが存在する場合のバインドされていない関数に対する LSP パニックを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23586"><code>async gen</code> での <code>yield</code> の lowering を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23562">fix: 参照外しの後に参照を提案</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23495">投影型に起因する <code>Expr not in lookup</code> パニックを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23228">perf: 長さが小さい場合に <code>ThinVec</code> を使用するマップである <code>ThinMap</code> を提供</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>今週は、実際のいくつかのベンチマークにおいて命令数の 0.4% の増加と引き換えに、<code>rmeta</code> サイズの 33% の削減が実現されました。
そのリグレッションがあっても、リント基盤における <code>String</code> の代わりに <code>Symbol</code> を使用することや、lang アイテム収集のための余分な AST 走査の回避など、<code>AttrTokenStream</code> 周りのリファクタリングのおかげで、今週の平均は非常に良好な結果を維持しています。
今週は多くのノイズがありましたが、その大半はベース PR がノイズであった 2 つの大きなロールアップが原因でした。</p>
<p>トリアージ実施者: <strong>@JonathanBrouwer</strong>
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=019b59d8101bb3e141f1b880684747b4217beeb6&end=4c46afa63688fb473618f9b3553d70b0c15a88eb&absolute=false&stat=instructions%3Au">019b59d8..4c46afa6</a></p>
<p>悪化 3 件、改善 11 件、混合 27 件；そのうち 2 件がロールアップに含まれていました
合計 195 件の成果物比較が実施されました</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/87c69dbbcdc5f571ebe50dc0107c846b6a102422/triage/2026/2026-11-02.md">完全なレポートはこちら</a></p>


<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust の <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC（Request for Comments）プロセス</a>に従います。今週、実装に向けて承認された RFC は以下の通りです：</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4013">RFC: ワークスペースパッケージ選択のための <code>required-targets</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4026">actions/deploy-pages アクションを v5.0.1 にアップデート</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐご意見をお寄せください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164582">doc(rust_logo) を適切に機能ゲート化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164731">core: <code>abort_immediate</code> を <code>crash</code> として安定化</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1047">コンパイラテストのコードカバレッジを分析するためのブートストラップツールを追加</a></li>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1004">ランタイムでのリント機構のテストを追加</a></li>
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
<li><a href="https://github.com/rust-lang/rfcs/pull/4027">クレートリスト見出し RFC</a></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-11-04 から 2026-12-02 までの Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
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
<li>2026-11-19 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin/events/">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907781/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-24 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust/events/">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254769/"><strong>第4火曜日 Rust 読書会</strong></a></li>
</ul>
</li>
<li>2026-12-01 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust/events/">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993134/"><strong>クリスマスコーディングチャレンジ - キックオフ！</strong></a></li>
</ul>
</li>
<li>2026-12-02 | オンライン (インディアナポリス, インディアナ州, 米国) | <a href="https://www.meetup.com/indyrs/events/">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/wqzhftyjcqbdb/"><strong>Indy.rs - ソーシャルディスタンスを保って</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-11-14 | ベンガルール, インド | <a href="https://hasgeek.com/rustbangalore/">Rust Bangalore</a><ul>
<li><a href="https://hasgeek.com/rustbangalore/november-2026-rustacean-meetup/"><strong>2026年11月 Rustacean ミータップ</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
<li>2026-11-04 | ダブリン, アイルランド | <a href="https://www.meetup.com/rust-dublin">Rust Dublin</a><ul>
<li><a href="https://www.meetup.com/rust-dublin/events/316898325/"><strong>Rust 263: Oracle AI Database 向け新しい Rust ドライバーの導入</strong></a></li>
</ul>
</li>
<li>2026-11-04 | ケルン, ドイツ | <a href="https://www.meetup.com/rust-cologne-bonn/events/">Rust Cologne</a><ul>
<li><a href="https://www.meetup.com/rustcologne/events/317183850/"><strong>11月の Rust: std 発見ツアー</strong></a></li>
</ul>
</li>
<li>2026-11-05 | ミラノ, イタリア | <a href="https://www.meetup.com/rust-language-milano">Rust Language Milan</a><ul>
<li><a href="https://www.meetup.com/rust-language-milan/events/316213872/"><strong>鉄道模型と Rust: ESP32 上のベアメタル DCC コマンドステーション</strong></a></li>
</ul>
</li>
<li>2026-11-05 | オックスフォード, 英国 | <a href="https://www.meetup.com/oxford-rust-meetup-group/events/">Oxford ACCU/Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/oxford-rust-meetup-group/events/317158298/"><strong>シナプス卓越性の極致</strong></a></li>
</ul>
</li>
<li>2026-11-12 | フランクフルト, ドイツ | <a href="https://www.meetup.com/rust-rhein-main/events/">Rust Rhein-Main</a><ul>
<li><a href="https://www.meetup.com/rust-rhein-main/events/317175844/"><strong>Debugging in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-12 | ジュネーブ, スイス | <a href="https://www.posttenebraslab.ch/wiki/events/monthly_meeting/rust_meetup">Rust Geneva</a><ul>
<li><a href="https://www.posttenebraslab.ch/wiki/events/monthly_meeting/rust_meetup"><strong>Rust Meetup Geneva</strong></a></li>
</ul>
</li>
<li>2026-11-12 | ミラノ, イタリア | <a href="https://www.meetup.com/rust-language-milano/events/">Rust Language Milan</a><ul>
<li><a href="https://www.meetup.com/rust-language-milan/events/317094800/"><strong>好奇心から実現力へ：独自のデバイス群（Device Swarm）を構築する</strong></a></li>
</ul>
</li>
<li>2026-11-17 | ライプツィヒ, ドイツ | <a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig">Rust - Modern Systems Programming in Leipzig</a><ul>
<li><a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig/events/313816501/"><strong>Everlock: すべては Git であり、プロトコルは単なるアダプターに過ぎない</strong></a></li>
</ul>
</li>
<li>2026-11-19 | オーフス, デンマーク | <a href="https://www.meetup.com/rust-aarhus/events/">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316938696/"><strong>EIVA でのトークナイト</strong></a></li>
</ul>
</li>
<li>2026-11-19 | ベルゲン, ノルウェー | <a href="https://www.meetup.com/bergen-rust-new-technology/events/">Rust Bergen</a><ul>
<li><a href="https://www.meetup.com/de-de/bergen-rust-new-technology/events/317045463/"><strong>Rust: C++ との FFI、および非同期入門</strong></a></li>
</ul>
</li>
<li>2026-11-20 および 2026-11-21 | アウクスブルク, ドイツ | <a href="https://rust-augsburg.github.io/meetup">Rust Meetup Augsburg</a><ul>
<li><a href="https://my.tuxedocomputers.com/event/embedded-rust-mit-embassy-workshop-und-projekttag-28/register"><strong>Embassy による組み込み Rust - ワークショップとプロジェクトデイ</strong></a></li>
</ul>
</li>
<li>2026-11-26 | コペンハーゲン, デンマーク | <a href="https://www.meetup.com/copenhagen-rust-community/events/">Copenhagen Rust Community</a><ul>
<li><a href="https://www.meetup.com/copenhagen-rust-community/events/317181792/"><strong>Adapt スポンサーによる Rust meetup #73！</strong></a></li>
</ul>
</li>
<li>2026-11-26 | ロンドン, 英国 | <a href="https://www.meetup.com/rust-london-user-group/events/">Rust London User Group</a><ul>
<li><a href="https://www.meetup.com/rust-london-user-group/events/317253958/"><strong>Rust London x Zed</strong></a></li>
</ul>
</li>
<li>2026-11-26 | マンチェスター, 英国 | <a href="https://www.meetup.com/rust-manchester/events/">Rust Manchester</a><ul>
<li><a href="https://www.meetup.com/rust-manchester/events/317222338/"><strong>Rust Manchester 11月コードナイト</strong></a></li>
</ul>
</li>
<li>2026-11-26 | ストックホルム, スウェーデン | <a href="https://www.meetup.com/stockholm-rust/events/">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/317161063/"><strong>Rust Meetup @Lovable</strong></a></li>
</ul>
</li>
<li>2026-12-01 | パリ, フランス | <a href="https://www.meetup.com/rust-paris/events/">Rust Paris</a><ul>
<li><a href="https://www.meetup.com/rust-paris/events/316865676/"><strong>Rust meetup #90</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
<li>2026-11-05 | モントリオール, カナダ | <a href="https://www.meetup.com/rust-montreal">Rust Montréal</a><ul>
<li><a href="https://www.meetup.com/rust-montreal/events/316919004/"><strong>11月 月例ソーシャル</strong></a></li>
</ul>
</li>
<li>2026-11-05 | サンフランシスコ, カリフォルニア州, 米国 | <a href="https://luma.com/user/usr-eWgtha6CHSTma7v/">Rust LA: NVIDIA</a><ul>
<li><a href="https://luma.com/iqe7wng1"><strong>NVIDIA x Lawrence Harvey | CUDA Rust</strong></a></li>
</ul>
</li>
<li>2026-11-05 | セントルイス, ミズーリ州, 米国 | <a href="https://www.meetup.com/stl-rust">STL Rust</a><ul>
<li><a href="https://www.meetup.com/stl-rust/events/316896797/"><strong>HTMX と Rust</strong></a></li>
</ul>
</li>
<li>2026-11-12 | リーハイ, ユタ州, 米国 | <a href="https://www.meetup.com/utah-rust/events/">Utah Rust</a><ul>
<li><a href="https://www.meetup.com/utah-rust/events/317178211/"><strong>Rust Game Jam</strong></a></li>
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
<li>2026-11-18 | サンフランシスコ, カリフォルニア州, 米国 | <a href="https://luma.com/bayarearust">Bay Area Rust</a><ul>
<li><a href="https://luma.com/v0mxbgs8"><strong>Bay Area Rust - ソーシャルナイト</strong></a></li>
</ul>
</li>
<li>2026-11-21 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust/events/">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924366/"><strong>Winter Hill Rust ランチ, 11月21日</strong></a></li>
</ul>
</li>
<li>2026-11-28 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust/events/">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924412/"><strong>South Station Rust ランチ, 11月28日</strong></a></li>
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
<h3 id="oceania"><a class="toclink" href="#oceania">オセアニア</a></h3>
<ul>
<li>2026-11-24 | バートン, オーストラリア | <a href="https://www.meetup.com/rust-canberra/events/">Canberra Rust User Group</a><ul>
<li><a href="https://www.meetup.com/rust-canberra/events/316907340/"><strong>11月ミートアップ</strong></a></li>
</ul>
</li>
</ul>
<p>Rust のイベントを開催されている場合は、ここに掲載されるよう <a href="https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com">カレンダー</a> に追加してください。イベントへのリンクも忘れずに追加してください。
アクセス権については <a href="mailto:community-team@rust-lang.org">Rust コミュニティチーム</a> にメールでお問い合わせください。</p>
<h2 id="jobs"><a class="toclink" href="#jobs">求人</a></h2>
<p><a href="https://www.reddit.com/r/rust/comments/1wzctie/official_rrust_whos_hiring_thread_for_jobseekers/">r/rust の最新の求人募集スレッド</a>をご覧ください。</p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">今週の言葉</a></h2>
<blockquote>
<p>コントリビューションを送信する前に、それがどのように受け取られるかを考えてみてください。本物の感情と推論を伴う、このような真の思考こそが、人間であるあなたが確実に貢献できる唯一のものです。</p>
</blockquote>
<p>– <a href="https://users.rust-lang.org/t/tips-for-your-first-pull-request/143356/3">rust-users での Jubilee の発言</a></p>
<p>推薦してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1838">Jonas Fassbender</a> に感謝します！</p>
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
<p><small><a href="https://www.reddit.com/r/rust/comments/1xo7mbb/this_week_in_rust_676/">r/rust で議論する</a></small></p>
