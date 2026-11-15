---
title: "This Week in Rust 677"
description: "今週のクレートは、値からキーを借用するマップのライブラリである iddqd です。"
pubDate: 2026-11-11
updatedDate: 2026-11-11
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/11/11/this-week-in-rust-677/"
externalId: "tag:this-week-in-rust.org,2026-11-11:/blog/2026/11/11/this-week-in-rust-677/"
issueNumber: 677
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
<li><a href="https://blog.rust-lang.org/2026/11/11/gsoc-2026-results">Google Summer of Code 2026 の結果</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://www.theembeddedrustacean.com/p/the-embedded-rustacean-issue-84">The Embedded Rustacean 第84号</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://kerkour.com/rust-supply-chain-security-stdx">拡張標準ライブラリによる Rust サプライチェーンのセキュリティ確保</a></li>
<li><a href="https://www.cncf.io/blog/2026/11/09/run-linux-applications-in-hypervisor-isolated-micro-vms-with-hyperlight/">Hyperlight を使用してハイパーバイザー分離されたマイクロ VM で Linux アプリケーションを実行する</a></li>
<li>[シリーズ] <a href="https://iggy.apache.org/blogs/2026/10/27/vsr-clustering-part-3/">Viewstamped Replication を採用した Apache Iggy のクラスタリング移行ジャーニー（パート 3）</a></li>
<li><a href="https://rust-lang.zulipchat.com/#narrow/channel/122651-general/topic/I.20snuck.20into.20the.20Rust.20Foundation.27s.20secret.20meeting">Rust Foundation の秘密のミーティングに潜入してみた：知っておくべきこと</a></li>
<li><a href="https://heikoseeberger.de/2026-11-09-chaos-verifier/">意図的に Rust アクタークラスターを破壊して得られた教訓</a></li>
<li><a href="https://xd009642.github.io/2026/11/10/Catching-Panics-in-Production/">プロダクション環境でパニックを捕捉する</a></li>
<li><a href="https://opendal.apache.org/blog/2026/11/11/scopedb-on-opendal/">クラウドベンダー SDK のスキップ：ScopeDB が Apache OpenDAL を使用してオブジェクトストレージにアクセスする方法</a></li>
<li><a href="https://serokell.io/blog/ubuntu-rust-coreutils-jon-seager">Ubuntu への大規模な Rust 導入：Jon Seager インタビュー</a></li>
<li><a href="https://hotpath.rs/blog/rust-performance-benchmarking">Rust ベンチマーク：CI でパフォーマンスリグレッションを検出する方法</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=5D7QPOIZ7gY">Code Matters: LLM 時代の Rust に関する考察 — Bryan Cantrill | Rust NYC</a></li>
<li><a href="https://blog.zortax.de/posts/a-critique-of-gpui">GPUI の批評</a></li>
<li><a href="https://forge-blog.github.io/posts/rust-std-memory-safety/">Rust 標準ライブラリにおけるメモリ安全性のバグ</a></li>
<li><a href="https://sigseis.dev/articles/2026/11/10">Rust 宣言型マクロ：構造、スコープ、および一般的な使用例</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li><a href="https://scherzer.dev/Blog/20261106-rsphp-bindings">RSPHP パート 1: バインディング</a></li>
<li><a href="https://sofiabelen.github.io/projects/pointer-provenance-in-rust-vs-cpp/">Rust 対 C++ におけるポインタの出所（Pointer Provenance）：ポインタは単なる整数の飾りではない</a></li>
<li><a href="https://www.reymom.xyz/blog/rust/2026-11-06-tokio-channels-and-poisoned-locks">Tokio、チャネル、および汚染されたロック</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=h3okIDxOZIA">RustCurious レッスン 12: ライフタイム</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://docs.rs/iddqd">iddqd</a> です。値からキーを借用するマップのライブラリです。</p>
<p>推薦してくれた <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1715">Miro</a> に感謝します！</p>
<p><a href="https://users.rust-lang.org/t/crate-of-the-week/2704">来週の推薦や投票をお待ちしています</a>！</p>
<h2 id="calls-for-testing"><a class="toclink" href="#calls-for-testing">テストの募集</a></h2>
<p>RFC の実装における重要なステップは、特に安定化の前に、人々がその実装を実験してフィードバックを提供することです。</p>
<p>機能の実装者で、ご自身の RFC をこのリストに掲載したい場合は、テスト手順や機能のどの側面をテストすべきかのガイダンスを含むコメントとともに、RFC に <code>call-for-testing</code> ラベルを追加してください。</p>
<p><em>今週は、<a href="https://github.com/rust-lang/rust/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rust</a>、
<a href="https://github.com/rust-lang/cargo/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Cargo</a>、
<a href="https://github.com/rust-lang/rustup/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rustup</a>、または
<a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing%20state%3Aopen">Rust 言語 RFC</a> からのテスト募集はありませんでした。</em></p>
<p>ご自身の機能をこのリストで追跡したい場合は、<a href="https://github.com/rust-lang/this-week-in-rust/issues">お知らせください</a>。</p>
<h3 id="rfcs"><a class="toclink" href="#rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing">RFC</a></a></h3>
<h3 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/labels/call-for-testing">Rust</a></a></h3>
<h3 id="rustup"><a class="toclink" href="#rustup"><a href="https://github.com/rust-lang/rustup/labels/call-for-testing">Rustup</a></a></h3>
<p>機能の実装者で、ご自身の RFC を上記のリストに掲載したい場合は、テスト手順や機能のどの側面をテストすべきかのガイダンスを含むコメントとともに、RFC に新しい <code>call-for-testing</code> ラベルを追加してください。</p>
<h2 id="call-for-participation-projects-and-speakers"><a class="toclink" href="#call-for-participation-projects-and-speakers">参加の呼びかけ：プロジェクトと講演者</a></h2>
<h3 id="cfp-projects"><a class="toclink" href="#cfp-projects">CFP - プロジェクト</a></h3>
<p>オープンソースプロジェクトに貢献したいとずっと思っていたけれど、どこから始めればよいかわかりませんでしたか？
毎週、Rust コミュニティから選んで開始できるタスクをいくつか紹介しています！</p>
<p>これらのタスクの中にはメンターが利用可能なものもあります。詳細についてはタスクのページをご覧ください。</p>


<ul>
<li><a href="https://github.com/Muneer320/klicky/issues/116">Klicky - 音声正規化テストで無音と符号付きサンプルの境界をカバーする</a></li>
<li><a href="https://github.com/Muvon/octomind/issues/296">Octomind - ワークフローステップの <code>parallel = "true"</code> が "missing field <code>role</code>" で失敗する</a></li>
<li><a href="https://github.com/Muvon/octomind/issues/295">Octomind - <code>schedule</code> が <code>when="13am"</code> を受け入れ、13:00 にトリガーされる</a></li>
<li><a href="https://github.com/Muvon/octomind/issues/299">Octomind - <code>octomind configure</code> が前後にスペースがある貼り付けられた API キーをそのまま保存してしまう</a></li>
<li><a href="https://github.com/UmberaAPP/UMBERA/issues/3">Umbera - pdf_strip_metadata のファズターゲット</a></li>
<li><a href="https://github.com/UmberaAPP/UMBERA/issues/2">Umbera - ML-KEM-1024 向けの NIST ACVP 既知応答テストを追加する</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/702">sysknife - publish-mcp.yml が id-token: write を持つバージョン固定されていない mcp-publisher を実行しており、pinned-dependencies.test.sh がそのファイルを読み取らない</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/621">sysknife - MCP の計画と実行の結果に、それらが送信されたホスト名が含まれていない</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/659">sysknife - dev-stories.sh がビルドしたバイナリではなく PATH 上の sysknife に対してストーリーを実行している</a></li>
<li><a href="https://github.com/MasihMoafi/Elpis/issues/112">Elpis - ビルトインプロバイダーとして DeepSeek、Mistral、または Groq を追加する</a></li>
<li><a href="https://github.com/MasihMoafi/Elpis/issues/113">Elpis - AUR 上で elpis-bin パッケージを公開および保守する</a></li>
</ul>


<p>Rust プロジェクトのオーナーでコントリビューターをお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からタスクを送信してください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>素晴らしいトピックを共有する場を探している、新しい講演者または経験豊富な講演者ですか？このセクションでは、計画中で講演者としての応募を受け付けているイベントを取り上げています。</p>



<p>イベントの主催者でイベントの認知度を高めたい場合は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からウェブサイトへのリンクを送信してください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p><a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-11-03..2026-11-10">先週、659 件のプルリクエストがマージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163241"><code>FnMut</code> 境界を指す際、囲んでいるアイテムのコンテキストを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164414"><code>let_underscore_drop_guard</code> リントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164014">no-op な <code>&T</code> → <code>&T</code> の再借用を出力しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165539">lint: 発散する呼び出し先を伴う become で <code>unreachable_code</code> を出力しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/149245">インライン属性を async fn で生成される <code>poll</code> に適用</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165404">次世代ソルバーにおける unsize 型強制の診断</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163284">reborrow: 複数のライフタイムを許可</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165672"><code>QueryTypeOp</code> のファストパスを復元</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164304">新しい変数が追加されなかった場合に CanonicalVarKinds を再利用</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165161"><code>rustc_builtin_macros</code> のクリーンアップ、パート 9</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165602">未使用時のメタデータエンコード中の <code>reachable_set</code> 計算をスキップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165571">move 式での可変キャプチャをサポート</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165569"><code>Move</code> トレイトの機能ゲート</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163624"><code>String::retain</code>: 変更されていない UTF-8 の末尾のみを変換</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165463"><code>BTreeMap::allocator</code> と <code>BTreeSet::allocator</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163992"><code>core::arch::{x86, x86_64}::x87_f80</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165443"><code>Discriminant::ord</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165697"><code>LinkedList::allocator</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165037">部分的な移動後に配列要素を順番通りにドロップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165546"><code>str::split_at_[mut_]unchecked</code> と <code>OsStr::split_at_unchecked</code> を公開</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165330">f16 および f128 に対する <code>read_le/read_be</code> を実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/147696">整数型に対する <code>bit</code> と <code>set_bit</code> を実装</a></li>
<li><a href="https://github.com/rust-lang/compiler-builtins/pull/1333">memset/memcpy のサイズを最適化</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17705"><code>config</code>: 設定のマージ、読み取り、およびスキーマをクレートとして公開</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17683"><code>schema</code>: SBOM 型を公開</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17702"><code>doc</code>: rustdoc の警告に対して cargo fix を提案しないように修正</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17678"><code>profile</code>: 継承された strip を保持</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17665"><code>registry</code>: 見つからないクレートに対する HTTP 410/451 を処理</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17697"><code>schema</code>: デシリアライズのエラーとパフォーマンスを改善</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17701"><code>parse</code>: パフォーマンスのためにリモートマニフェストの診断品質をトレードオフ</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17675">コンパイル前に <code>/out</code> ディレクトリをクリーンアップ</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17689">推移的依存関係のいずれかで debuginfo が有効な場合は strip しないように修正</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17691">すでに debuginfo が弱められているホスト依存関係を strip</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163217">可能な限り型と const 引数の再 HIR-ty-lowering を回避</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165726">frontend: サイドバーのリンクがクリックされたときに検索状態を適切にクリア</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164036">検索において <code>.</code> を <code>:</code> と同様に使用できるように許可</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163571">エイリアスされたアイテムの <code>Deref</code> メソッドを描画</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165357">パスが <code>self</code> で終わる場合の無効なパスのクリーンアップを修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165495">不要な中間 JSON シリアライズをスキップしてパフォーマンスを向上</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165427">ドキュメントが複数行ある場合に実装者を折りたたみ可能にする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/165660">未解決のリンクに対して参照定義を提案</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7220"><code>@path</code> からの引数の読み取りを許可</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7217"><code>wrap_comments=true</code> または <code>normalize_comments=true</code> で閉じられていない末尾のブロックコメントを修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/6167">戻り値の型が存在する場合の空の where 句のフォーマットを修正</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/5392"><code>comment::rewrite_comment</code> 内で各コメントの先頭の空白を削除</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17906"><code>while_let_loop</code>: ワイルドカードの <code>break</code> パターンと特別なケースのみをリント対象にする</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17813"><code>future_not_send</code> に <code>is_lint_allowed</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17961"><code>assert_is_empty</code> を拡張して <code>BinaryHeap</code> をサポート</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17920"><code>unnecessary_to_owned</code> を拡張して <code>vec.contains(&str.to_string())</code> をカバー</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17964"><code>collapsible_match</code> の提案が非網羅的な match を生成する問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17655"><code>duplicated_attributes</code> の誤検知を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17849">次世代ソルバー向けに <code>future_not_send</code> を改善</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17749"><code>large_stack_frames</code> の名前を変更し suspicious に移動</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23640"><code>ThinMap</code> で ZST を不許可にする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23478">型の位置でトレイトの <code>dyn</code> プレフィックスを補完</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23620"><code>destructure_struct_binding</code> でワイルドカードパターンを提案</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23637">cfg 補完に macOS、iOS、Android、musl を追加</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23585">final な関連関数のサポートを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23631">sized の位置で dyn Trait を補完しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23579"><code>struct</code> リテラルの到達不能なパスを提案しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23636"><code>repr(align(...))</code> または <code>repr(packed)</code> の後に transparent を補完しないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23583">パスパターン内の無効な値アイテムに対して E0158 および E0532 を出力</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23606">組み込み derive でジェネリクスを伴う場合のみ関連アイテム境界を出力</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23610">r-a が rustc の型強制ロジックと一致することを保証</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23554">関連型の where 句の位置を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23615">補完における i28 を i128 に修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23619">ide-diagnostics: 未解決の関連型に対してエラー E0220 を出力</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23598">rustc 問題マッチャーで rustc-unicode の位置をマッチ</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23616"><code>apply_demorgan</code> で <code><</code> の前のネストしたキャストに括弧を追加</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23592">再エクスポートされたアイテムに生成されたドキュメントの例を提案</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23608">コピペによる範囲外クラッシュを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23543"><code>#[derive()]</code> を使用する型での <code>for<'a></code> に対するパニックを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23600">ドロップグルーを持たない型に対する暗黙のドロップヒントの非表示を実装</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23591">perf: lang アイテムのマイクロ最適化</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>パフォーマンスの観点からは平穏な一週間でした。唯一の注目すべき変更は <a href="https://github.com/rust-lang/rust/pull/165335">#165335</a> における大きなリグレッションで、これはリバートされる可能性があります。</p>
<p>トリアージ実施者: <strong>@Kobzol</strong>
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=4c46afa63688fb473618f9b3553d70b0c15a88eb&end=54d0b7edad511e84181ad50ec8413ef10f93b367&absolute=false&stat=instructions%3Au">4c46afa6..54d0b7ed</a></p>
<p><strong>サマリー</strong>:</p>
<table>
<thead>
<tr>
<th style="text-align: center;">(instructions:u)</th>
<th style="text-align: center;">平均</th>
<th style="text-align: center;">範囲</th>
<th style="text-align: center;">件数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">悪化 ❌ <br /> (プライマリ)</td>
<td style="text-align: center;">1.0%</td>
<td style="text-align: center;">[0.2%, 3.7%]</td>
<td style="text-align: center;">163</td>
</tr>
<tr>
<td style="text-align: center;">悪化 ❌ <br /> (セカンダリ)</td>
<td style="text-align: center;">1.2%</td>
<td style="text-align: center;">[0.0%, 4.6%]</td>
<td style="text-align: center;">159</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (プライマリ)</td>
<td style="text-align: center;">-2.2%</td>
<td style="text-align: center;">[-3.9%, -0.3%]</td>
<td style="text-align: center;">8</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (セカンダリ)</td>
<td style="text-align: center;">-0.7%</td>
<td style="text-align: center;">[-1.6%, -0.2%]</td>
<td style="text-align: center;">10</td>
</tr>
<tr>
<td style="text-align: center;">全体 ❌✅ (プライマリ)</td>
<td style="text-align: center;">0.8%</td>
<td style="text-align: center;">[-3.9%, 3.7%]</td>
<td style="text-align: center;">171</td>
</tr>
</tbody>
</table>
<p>悪化 6 件、改善 5 件、混合 3 件；そのうち 6 件がロールアップに含まれていました
合計 189 件の成果物比較が実施されました</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/119d90a1c7fe399e1ef8cd27f257c5f6dca6f29f/triage/2026/2026-11-08.md">完全なレポートはこちら</a>。</p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust の <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC（Request for Comments）プロセス</a>に従います。今週、実装に向けて承認された RFC は以下の通りです：</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/3527">RFC: Associated const underscore</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐご意見をお寄せください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust_1"><a class="toclink" href="#rust_1"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/165289">lexer: Unicode 18 へのアップデート</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163315">s390x: -Ctarget-feature=+backchain を -Cforce-frame-pointers に置き換え</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163696"><code>int_from_ascii</code> の安定化</a></li>
</ul>
<h5 id="rust-rfcs"><a class="toclink" href="#rust-rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFC</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4015">制限付き crates.io セルフサービス版バージョン削除のための RFC</a></li>
<li>[処分方針: クローズ] <a href="https://github.com/rust-lang/rfcs/pull/4021"><code>std::env::{vars, args}</code> の非推奨化</a></li>
</ul>
<h5 id="cargo_1"><a class="toclink" href="#cargo_1"><a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17518">perf(compile)!: dev プロファイルを debug=lines-and-tables-only に切り替え</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17556">fix(trim-paths): フィンガープリント内の絶対ソースパスをサニタイズ</a></li>
</ul>
<h5 id="leadership-council"><a class="toclink" href="#leadership-council"><a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/leadership-council/issues/350">T-mods 2026 予算要求</a></li>
</ul>
<p><em>今週は、<a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a>、
<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、
<a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a>、または
<a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> において最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストで追跡したい場合はお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><em>今週、新規または更新された RFC は作成されませんでした。</em></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-11-11 から 2026-12-09 までの Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-11-12 | オンライン (ニュルンベルク, ドイツ) | <a href="https://www.meetup.com/rust-noris">Rust Nuremberg</a><ul>
<li><a href="https://www.meetup.com/rust-noris/events/315619619/"><strong>Rust Nürnberg online</strong></a></li>
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
<li><a href="https://www.meetup.com/rustdc/events/317182776/"><strong>Mid-month Rustful</strong></a></li>
</ul>
</li>
<li>2026-11-18 | ハイブリッド (バンクーバー, カナダ) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210234/"><strong>Rust で Xteink 電子書籍リーダーのファームウェアを作成する</strong></a></li>
</ul>
</li>
<li>2026-11-19 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907781/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-24 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254769/"><strong>第4火曜日 Rust 読書会</strong></a></li>
</ul>
</li>
<li>2026-11-26 | オンライン | <a href="https://rust.bettercode.eu/">betterCode() Rust</a><ul>
<li><a href="https://rust.bettercode.eu/"><strong>betterCode() Rust 2026</strong></a></li>
</ul>
</li>
<li>2026-12-01 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/omlooqv8"><strong>Cursed Rust</strong></a></li>
</ul>
</li>
<li>2026-12-01 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993134/"><strong>クリスマスコーディングチャレンジ - キックオフ！</strong></a></li>
</ul>
</li>
<li>2026-12-02 | オンライン (インディアナポリス, インディアナ州, 米国) | <a href="https://www.meetup.com/indyrs">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/wqzhftyjcqbdb/"><strong>Indy.rs - ソーシャルディスタンスを保って</strong></a></li>
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
<li>2026-12-06 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316331278/"><strong>Rust Deep Learning: 第1日曜日</strong></a></li>
</ul>
</li>
<li>2026-12-08 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254767/"><strong>第2火曜日</strong></a></li>
</ul>
</li>
<li>2026-12-08 | オンライン (ロンドン, 英国) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/316993086/"><strong>👋 コミュニティキャッチアップ</strong></a></li>
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
<li>2026-11-12 | フランクフルト, ドイツ | <a href="https://www.meetup.com/rust-rhein-main">Rust Rhein-Main</a><ul>
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
<li>2026-11-19 | オーフス, デンマーク | <a href="https://www.meetup.com/rust-aarhus">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316938696/"><strong>EIVA でのトークナイト</strong></a></li>
</ul>
</li>
<li>2026-11-19 | ベルゲン, ノルウェー | <a href="https://www.meetup.com/bergen-rust-new-technology/events/">Rust Bergen</a><ul>
<li><a href="https://www.meetup.com/de-de/bergen-rust-new-technology/events/317045463/"><strong>Rust: C++ との FFI、および非同期入門</strong></a></li>
</ul>
</li>
<li>2026-11-20 - 2026-11-21 | アウクスブルク, ドイツ | <a href="https://rust-augsburg.github.io/meetup">Rust Meetup Augsburg</a><ul>
<li><a href="https://my.tuxedocomputers.com/event/embedded-rust-mit-embassy-workshop-und-projekttag-28/register"><strong>Embassy による組み込み Rust - ワークショップとプロジェクトデイ</strong></a></li>
</ul>
</li>
<li>2026-11-24 | バーゼル, スイス | <a href="https://www.meetup.com/rust-basel">Rust Basel</a><ul>
<li><a href="https://www.meetup.com/rust-basel/events/317258865/"><strong>Rust Meetup #17 @ ERNI</strong></a></li>
</ul>
</li>
<li>2026-11-25 | アムステルダム, オランダ | <a href="https://www.meetup.com/rust-amsterdam-group">Rust Developers Amsterdam Group</a><ul>
<li><a href="https://www.meetup.com/rust-amsterdam-group/events/317381204/"><strong>Rust Meetup @ Reclamefolder</strong></a></li>
</ul>
</li>
<li>2026-11-26 | コペンハーゲン, デンマーク | <a href="https://www.meetup.com/copenhagen-rust-community">Copenhagen Rust Community</a><ul>
<li><a href="https://www.meetup.com/copenhagen-rust-community/events/317181792/"><strong>Adapt スポンサーによる Rust meetup #73！</strong></a></li>
</ul>
</li>
<li>2026-11-26 | ロンドン, 英国 | <a href="https://www.meetup.com/rust-london-user-group">Rust London User Group</a><ul>
<li><a href="https://www.meetup.com/rust-london-user-group/events/317253958/"><strong>Rust London x Zed</strong></a></li>
</ul>
</li>
<li>2026-11-26 | マンチェスター, 英国 | <a href="https://www.meetup.com/rust-manchester">Rust Manchester</a><ul>
<li><a href="https://www.meetup.com/rust-manchester/events/317222338/"><strong>Rust Manchester 11月コードナイト</strong></a></li>
</ul>
</li>
<li>2026-11-26 | ストックホルム, スウェーデン | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/317161063/"><strong>Rust Meetup @Lovable</strong></a></li>
</ul>
</li>
<li>2026-12-01 | パリ, フランス | <a href="https://www.meetup.com/rust-paris">Rust Paris</a><ul>
<li><a href="https://www.meetup.com/rust-paris/events/316865676/"><strong>Rust meetup #90</strong></a></li>
</ul>
</li>
<li>2026-12-02 | フランクフルト, ドイツ | <a href="https://www.meetup.com/rust-rhein-main">Rust Rhein-Main</a><ul>
<li><a href="https://www.meetup.com/rust-rhein-main/events/317186779/"><strong>好奇心から実現力へ：独自のデバイス群（Device Swarm）を構築する</strong></a></li>
</ul>
</li>
<li>2026-12-04 | ハイブリッド (モスクワ, ロシア) | <a href="https://rustcon.ru/">RustCon RU</a><ul>
<li><a href="https://rustcon.ru/"><strong>RustCon 2026</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
<li>2026-11-12 | リーハイ, ユタ州, 米国 | <a href="https://www.meetup.com/utah-rust">Utah Rust</a><ul>
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
<li>2026-11-21 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924366/"><strong>Winter Hill Rust ランチ, 11月21日</strong></a></li>
</ul>
</li>
<li>2026-11-28 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924412/"><strong>South Station Rust ランチ, 11月28日</strong></a></li>
</ul>
</li>
<li>2026-12-04 | ニューヨーク, ニューヨーク州, 米国 | <a href="https://www.meetup.com/rust-nyc">Rust NYC</a><ul>
<li><a href="https://www.meetup.com/rust-nyc/events/317259308/"><strong>Rust NYC: The UnConf 2026</strong></a></li>
</ul>
</li>
<li>2026-12-04 | ニューヨーク, ニューヨーク州, 米国 | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/317383331/"><strong>👋Women in Rust x Rust NYC UnConf 2026</strong></a></li>
</ul>
</li>
</ul>
<h3 id="oceania"><a class="toclink" href="#oceania">オセアニア</a></h3>
<ul>
<li>2026-11-12 | ブリスベン, オーストラリア | <a href="https://www.meetup.com/rust-brisbane">Rust Brisbane</a><ul>
<li><a href="https://www.meetup.com/rust-brisbane/events/317296037/"><strong>Rust Brisbane • 2026年11月</strong></a></li>
</ul>
</li>
<li>2026-11-24 | バートン, オーストラリア | <a href="https://www.meetup.com/rust-canberra">Canberra Rust User Group</a><ul>
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
<p>いいえ、実際にはもっと難しいです。はるかに難しいです。人間の脳は通常、読んだすべての単語が意識的な注意に達する前に、エラー訂正パスを実行します。これがタイポを見落としやすい理由ですが、この訂正は単にタイポを隠すだけでなく、フレーズ全体を「そこにあるべき」ものに置き換えてしまうことすらあります。この効果を抑え込むには、継続的な集中力が必要です。</p>
<p>[…]</p>
<p>（波括弧の配置も当然エラーフィルターの対象になりますが、波括弧はインデントの大幅な変更を伴うため、通常はフィルターを通過するのに十分な視覚的フラグとなります。実際のところ、それが Rust がすべてのブロックに波括弧を要求する理由です —— C 言語での経験から、インデントされた文が実際には波括弧で囲まれていないにもかかわらず、囲まれていると思い込んでしまうことが分かっていたからです。）</p>
</blockquote>
<p>– <a href="https://internals.rust-lang.org/t/yet-another-performance-footgun-in-rust-multithreading-lock-edition/24726/68">rust-internals での Zack Weinberg の発言</a></p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1841">Michael Howell</a> に感謝します！</p>
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
<p><small><a href="https://www.reddit.com/r/rust/comments/1xuwet4/this_week_in_rust_677/">r/rust で議論する</a></small></p>
