---
title: "This Week in Rust 671"
description: "今週のクレートは ying-profiler です。ネイティブな Rust サンプリングメモリプロファイラです。"
pubDate: 2026-09-30
updatedDate: 2026-09-30
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/09/30/this-week-in-rust-671/"
externalId: "tag:this-week-in-rust.org,2026-09-30:/blog/2026/09/30/this-week-in-rust-671/"
issueNumber: 671
license: "CC BY-SA 4.0"
importMode: mirror
---

<p><em>This Week in Rust</em> へようこそ！
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


<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://scientificcomputing.rs/monthly/2026-09">Scientific Computing in Rust 第22号（2026年9月）</a></li>
<li><a href="https://www.theembeddedrustacean.com/p/the-embedded-rustacean-issue-81">The Embedded Rustacean 第81号</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://mnwa.hashnode.dev/can-safe-rust-ever-beat-google-s-c-brotli">安全な Rust は Google の C 言語版 Brotli に勝てるのか？</a></li>
<li><a href="https://micro-rust.github.io/posts/001-i2c-dma-handler/">RP2350 I2C 向けの DMA ベースドライバの構築（安全性は含まれません）</a></li>
<li><a href="https://dimforge.com/blog/2026/09/25/advanced-soft-bodies-for-games-in-the-rapier-physics-engine/">Rapier 物理エンジンによるゲーム向けの高度なソフトボディ</a></li>
<li><a href="https://blog.cloudflare.com/rust-workers-emscripten-target/">wasm-bindgen 向けの新しい Emscripten ターゲットにより Workers でネイティブ Rust をサポート</a></li>
<li><a href="https://eli.thegreenplace.net/2026/rusty-thoughts-on-parse-dont-validate/">「検証するな、パースせよ（Parse, don't validate）」に関する Rust 的考察</a></li>
<li><a href="https://shnatsel.github.io/state-of-simd-rust-2026/">2026年における Rust の SIMD の現状</a></li>
<li><a href="https://www.jochen.fyi/posts/how-do-you-stop-being-a-rust-novice">どうすれば Rust 初心者を脱却できるか？</a></li>
<li><a href="https://corrode.dev/blog/named-arguments-at-home/">「うちには名前付き引数があるでしょ（We Have Named Arguments at Home）」</a>: 前号で紹介されたブログ記事「引数をめぐる議論（<em>Arguing about arguments</em>）」への返信</li>
<li><a href="https://kobzol.github.io/rust/2026/09/30/stf-august-september-2026.html">アップストリーム Rust メンテナンスレポート（2026年8月〜9月）</a></li>
<li><a href="https://kerkour.com/rust-kernel">カーネル内の Rust？カーネル無しの Rust はどうなんだ！</a></li>
<li><a href="https://lwn.net/SubscriberLink/1095553/7f34252658f8b8d1/">gccrs によるカーネルのコンパイル</a></li>
<li><a href="https://lwn.net/SubscriberLink/1095721/e1d863e5fd827753/">Rust でラジオを聴く</a></li>
<li><a href="https://lwn.net/SubscriberLink/1095731/a5ecc9da2388b8ec/">GPU 上での Rust のネイティブサポート</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li><a href="https://nnethercote.github.io/2026/09/30/how-to-speed-up-the-rust-compiler-in-september-2026.html">2026年9月に Rust コンパイラを高速化する方法</a></li>
<li><a href="https://oluseun.dev/blogs/real-time-notifications-sse-pubsub.html">SSE と Pub/Sub を使用したリアルタイム通知の構築</a></li>
<li><a href="https://dzania.github.io/green-threads-from-scratch/">ゼロからのグリーンスレッド</a></li>
<li><a href="https://www.schneems.com/2026/09/24/a-type-stronger-than-the-sum-of-its-components/">構成要素の総和よりも強力な型</a></li>
<li><a href="https://lucumr.pocoo.org/2026/9/29/deser/">Deser: Rust のシリアライゼーションを再考する</a></li>
<li><a href="https://rustunit.com/blog/2026/09-04-bevy-ios-crates-objc2/">Bevy iOS クレートから Swift を除外する</a></li>
<li><a href="https://wolfgirl.dev/blog/2026-09-29-pining-for-arc-downcasting-in-rust/">Rust における Arc のダウンキャストへの熱望</a></li>
<li><a href="https://tokio.rs/blog/2026-09-24-topcoat-server-applications">Topcoat は Rust でサーバーアプリケーションの限界を押し広げている</a></li>
<li><a href="https://developerlife.com/2026/09/25/rust-reborrowing/">Rust の再借用、エイリアシング、および可変参照</a></li>
<li><a href="https://liw.fi/distilled-rust/">Rust の基本に関する極めて凝縮された入門</a></li>
<li>[動画] <a href="https://youtu.be/bs8bpAZ10SM">状態とイベントで GPUI アプリをインタラクティブにする</a></li>
<li>[ES] <a href="https://codigolinea.com/domain-flow-effects-dfe-arquitectura-rust/">Domain–Flow–Effects (DFE): Rust 向けに設計されたアーキテクチャ</a></li>
</ul>
<h3 id="miscellaneous"><a class="toclink" href="#miscellaneous">その他</a></h3>
<ul>
<li>[DE]<a href="https://cryptpad.fr/form/#/2/form/view/ppm1DazKFfZxfLB8Fw6-7W0vBC1kFV9KgkHQWqY7UU0/">Rust & Linux コミュニティイベント – 2026年11月20日〜21日 @ TUXEDO、アウクスブルク – ワークショップのトピック選びにご協力ください</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://github.com/velvia/ying-profiler">ying-profiler</a> です。ネイティブな Rust サンプリングメモリプロファイラです。</p>
<p>自薦してくださった <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1683">Evan Chan</a> に感謝します！</p>
<p><a href="https://users.rust-lang.org/t/crate-of-the-week/2704">来週の提案や投票をお願いします</a>！</p>
<h2 id="calls-for-testing"><a class="toclink" href="#calls-for-testing">テストの募集</a></h2>
<p>RFC の実装において重要なステップは、特に安定化の前に、人々が実装を試してフィードバックを提供することです。</p>
<p>機能の実装者で、自分の RFC をこのリストに掲載したい場合は、RFC に <code>call-for-testing</code> ラベルを追加し、テスト手順やテストが必要な機能の側面に関するガイダンスを提供するコメントを添えてください。</p>
<p><em>今週は、<a href="https://github.com/rust-lang/rust/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rust</a>、
<a href="https://github.com/rust-lang/cargo/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Cargo</a>、
<a href="https://github.com/rust-lang/rustup/issues?q=state%3Aopen%20label%3Acall-for-testing%20state%3Aopen">Rustup</a>、または
<a href="https://github.com/rust-lang/rfcs/issues?q=label%3Acall-for-testing%20state%3Aopen">Rust 言語 RFC</a> からのテスト募集はありませんでした。</em></p>
<p>あなたの機能をこのリストの一部として追跡してほしい場合は、<a href="https://github.com/rust-lang/this-week-in-rust/issues">私たちにお知らせください</a>。</p>
<h2 id="call-for-participation-projects-and-speakers"><a class="toclink" href="#call-for-participation-projects-and-speakers">参加の呼びかけ：プロジェクトと講演者</a></h2>
<h3 id="cfp-projects"><a class="toclink" href="#cfp-projects">CFP - プロジェクト</a></h3>
<p>オープンソースプロジェクトに貢献したいとずっと思っていたけれど、どこから始めればよいかわかりませんでしたか？
毎週、Rust コミュニティからあなたが選んで始められるタスクをいくつか紹介しています！</p>
<p>これらのタスクの中にはメンターが利用できるものもあります。詳細についてはタスクページをご覧ください。</p>


<ul>
<li><a href="https://github.com/zaydmulani09/unsynced/issues/1">unsynced - オフセット -1（現在のファイルオフセット）での pwritev2 において strace フロントエンドが失敗する</a></li>
<li><a href="https://github.com/zaydmulani09/unsynced/issues/2">unsynced - 警告する代わりにハードリンク（link/linkat）をモデル化する</a></li>
<li><a href="https://github.com/zaydmulani09/unsynced/issues/3">unsynced - ext4 data=writeback 永続性プロファイルを追加する</a></li>
<li><a href="https://github.com/wuisabel-gif/MemWhale/issues/253">MemoryWhale - 不完全な <code>mw</code> 引数に対するわかりやすいエラーを網羅する</a></li>
<li><a href="https://github.com/wuisabel-gif/MemWhale/issues/254">MemoryWhale - <code>mw --help</code> の出力を固定化する</a></li>
<li><a href="https://github.com/AndreaBozzo/dataprof/issues/840">dataprof - サーバーが Range を無視した場合、リモート Parquet 拒否メッセージでファイルをダウンロードするよう案内する</a></li>
<li><a href="https://github.com/AndreaBozzo/dataprof/issues/827">dataprof - <code>ScoreBounds::dimension_scores</code> のドキュメントで推定キー数が依然として無制限としてリストされている</a></li>
<li><a href="https://github.com/AndreaBozzo/dataprof/issues/824">dataprof - 行数上限によって増分エンジンが停止した際、進行状況の <code>finished</code> イベントで行数が過小カウントされる</a></li>
</ul>
<p>Rust プロジェクトのオーナーで貢献者をお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>からタスクを提出するか、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からご連絡ください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>新進気鋭の、あるいは経験豊富なスピーカーで、何かクールなことを共有する場をお探しですか？このセクションでは、企画進行中でスピーカーとしての参加応募を受け付けているイベントを紹介します。</p>



<p>イベントの認知度を高めたいとお考えのイベント主催者の方は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a> または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> を通じてウェブサイトへのリンクをお寄せください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p>先週は 546 件のプルリクエストが<a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-09-22..2026-09-29">マージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/154724">HIR の代わりにメタデータエンコーディングから <code>crate_hash</code> を計算する（#94878 の実装）</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/156949">let 文で欠落している else を検出する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162361">クロージャ内の参照に noalias を復元する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161775">強制キーワード（<code>k#</code>）を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163190">LocalizedConstraintGraph で SmallVec を使用する</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/162832"><code>Complex<{float}></code> に <code>Div</code> および <code>Mul</code> を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/156882">alloc: <code>Allocator</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/129036">追加の <code>NonZero</code> 変換</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/159564"><code>thread_local!</code> で省略された (<code>'static</code>) ライフタイムを許可する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/152972"><code>Vec<T></code>、<code>&[T]</code>、<code>&mut [T]</code>、<code>[T; N]</code>、<code>&[T; N]</code>、および <code>&mut [T; N]</code> に対して <code>PartialEq<VecDeque<U>></code> を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161791">空の BTreeMap の drop を無料（コストゼロ）にする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163366">SyncView を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160436"><code>Box::take</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161712"><code>Result::into_{ok,err}</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161015"><code>funnel_shifts</code>（<code>const</code> を含む）を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161710"><code>mem::conjure_zst</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163459"><code>vec_try_remove</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163099"><code>from_str_radix</code> でラッピング演算を使用する</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17498"><code>builtin-deps</code>: 組み込み依存関係マニフェスト構文を追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17215"><code>config</code>: build.profile、install.profile を追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17517"><code>metadata</code>: <code>features_v2</code> にパッケージ機能を反映する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17499"><code>builtin-deps</code>: 組み込み依存関係マニフェストの検証を修正</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17515"><code>diag</code>: 静的ライブラリがスキップされた場合、未使用の通常の依存関係を報告しない</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17509"><code>package</code>: 正規化されたマニフェストで機能メタデータを保持する</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163268"><code>--generate-link-to-definition</code> でアイテムが <code>doc(hidden)</code> でないことを正しくチェックする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162862">ドキュメントコメントが内部および外部の両方のドキュメントコメントで構成されている場合のドキュメント内リンク解決を修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163133"><code>#[rustc_allow_incoherent_impl]</code> が関与している場合の無効な定義へジャンプリンクを修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162976">重複するサイドバーリンクの二次的な命名問題を修正</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17614"><code>while_let_loop</code>: ループにラベルがある場合にパターンを検出する</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17030">新しい <code>try_from_instead_of_from_str</code> リントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17752"><code>nonnull_unchecked_on_box_ptr</code> で <code>Box::leak</code> を提案しないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16951"><code>collapsible_match</code> の消費/変更チェックを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17759">or パターン内の str にマッチする <code>match_str_case</code> を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17678">proc-macro の doc 属性スパン追跡を改善</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23386">サーバーの起動に失敗したときに拡張機能のアクティベーションを失敗させない</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23406">type-alias の <code>type_match</code> 関連性を追加</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23416">安全な関数から unsafe な関数への型強制</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23382">cfg 属性で 'false' を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23414">引用符なしの文字列内の属性値を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23185">単一バリアント <code>enum</code> の定数評価キャスト</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23413">'derive' および 'test' 属性マクロの重複を排除する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23408">不明な型を型マッチしないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23410">リフレッシュ時にセマンティックトークンキャッシュをクリアしない</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23365">トレイト付き impl の場合にホバーで impl ヘッダーを表示する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23409">高階トレイト境界を持つ非同期クロージャでのパニック</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23421">非居住（uninhabited）<code>enum</code> の判別子を読み取る際にパニックする代わりに UB を返す</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>今週は極めて好調でした。純粋なリグレッションはなく、結果のほとんどは混合またはほぼ好影響をもたらした少数のアーキテクチャ改善によるものでした。また、クロージャ内の参照に対する no_alias アノテーションの欠落によって引き起こされていた、以前トリアージされたリグレッションへの対処からもいくつかの改善が得られました。</p>
<p>今週の最大の改善は rustdoc にあり、サイドバーリンク生成時の二次関数的（quadratic）な挙動への対処によるものです。これはユーザーから報告されたものですが、ベンチマークには影響が現れなかったため、専用のストレステストを追加しました。</p>
<p>トリアージ担当: <strong>@panstromek</strong>。
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=3670d2532bdf51abbe0b8fea22284d7ca340ffe3&end=c1070d69382b8d2f2eb65119c738a77d9e324c9e&absolute=false&stat=instructions%3Au">3670d253..c1070d69</a></p>
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
<td style="text-align: center;">リグレッション ❌ <br /> (プライマリ)</td>
<td style="text-align: center;">0.6%</td>
<td style="text-align: center;">[0.2%, 0.8%]</td>
<td style="text-align: center;">8</td>
</tr>
<tr>
<td style="text-align: center;">リグレッション ❌ <br /> (セカンダリ)</td>
<td style="text-align: center;">1.4%</td>
<td style="text-align: center;">[0.1%, 5.8%]</td>
<td style="text-align: center;">30</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (プライマリ)</td>
<td style="text-align: center;">-0.6%</td>
<td style="text-align: center;">[-1.7%, -0.2%]</td>
<td style="text-align: center;">192</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (セカンダリ)</td>
<td style="text-align: center;">-1.5%</td>
<td style="text-align: center;">[-82.5%, -0.1%]</td>
<td style="text-align: center;">101</td>
</tr>
<tr>
<td style="text-align: center;">すべて ❌✅ (プライマリ)</td>
<td style="text-align: center;">-0.6%</td>
<td style="text-align: center;">[-1.7%, 0.8%]</td>
<td style="text-align: center;">200</td>
</tr>
</tbody>
</table>
<p>0件のリグレッション、2件の改善、6件の混合。そのうち3件はロールアップ内
合計26回のアーティファクト比較を実施</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/7409c0adce96db29bbfa5030136401590f768577/triage/2026/2026-09-29.md">完全なレポートはこちら</a></p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/master">承認された RFC</a></a></h3>
<p>Rust への変更は Rust <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC (コメント募集) プロセス</a>に従います。今週実装が承認された RFC は以下のとおりです:</p>
<ul>
<li><em>今週承認された RFC はありません。</em></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐあなたの意見を表明してください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/157712">MinGW 上でインポートライブラリを生成するために dlltool を使用するのをやめる</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/154170"><code>ptr::try_cast_aligned</code> を安定化する</a></li>
<li>[disposition: close] <a href="https://github.com/rust-lang/rust/issues/161916">1.99 beta crater リグレッション: 要件の評価でのオーバーフロー</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163161"><code>rustc_allowed_through_unstable_modules</code> アイテムに対する FCW を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163267"><code>RegionOutlives</code> の高速パスで <code>VisibleForLeakCheck</code> を修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/146099"><code>debug_closure_helpers</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161998">ジェネリックパラメータのデフォルトと定数パラメータ型で型相対の関連アイテムパスをサポート</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162974"><code>unsafe fn</code> 上の <code>#[panic_handler]</code> に対する FCW。</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/157273"><code>optimize</code> 属性を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/159744">単項演算子のオペランド型を後から推論できるようにする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162460">Feat - <code>#[inline(always)] + #[target_feature(enable = "....")]</code> #2</a></li>
<li><a href="https://github.com/rust-lang/rust/issues/139984"><code>CStr::display</code> のトラッキング Issue</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162652">裸のトレイトオブジェクト型 (<code>(use<…>)+</code>) における先頭の括弧付き精密キャプチャリストを構文的に拒否する</a></li>
</ul>
<h5 id="rust-rfcs"><a class="toclink" href="#rust-rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFCs</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/3983"><code>f16b</code> 型</a></li>
</ul>
<h5 id="cargo_1"><a class="toclink" href="#cargo_1"><a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17488">feat(trim-paths): <code>profile.trim-paths</code> を安定化する</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1038">QTEE 向けの新しい Tier 3 ターゲットを作成: <code>aarch64-unknown-qtee</code></a></li>
</ul>
<p><em>今週、<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、<a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a>、<a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a>、または <a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> で最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストの一部として追跡してほしい場合は、私たちにお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4008">トレイトメソッドを const コンテキストで呼び出し可能にする（その3）</a></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-09-30 〜 2026-10-28 の Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-09-30 | オンライン (英国 カーディフ) | <a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff">Rust and C++ Cardiff</a><ul>
<li><a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff/events/316486941/"><strong>Operating Systems Book Club: Segmentation and Introduction to Paging</strong></a></li>
</ul>
</li>
<li>2026-10-01 | オンライン | <a href="https://rustfoundation.org/event/livestream-smarter-coding-agents-for-rust-with-symposium/">Rust Foundation & JetBrains</a><ul>
<li><a href="https://info.jetbrains.com/rustrover-livestream-october01-2026.html#form"><strong>Livestream: Smarter Coding Agents for Rust with Symposium</strong></a></li>
</ul>
</li>
<li>2026-10-02 | オンライン | <a href="https://luma.com/rust-girona">Rust Girona</a><ul>
<li><a href="https://luma.com/yqxvguts"><strong>Sessió setmanal de codificació / Weekly coding session</strong></a></li>
</ul>
</li>
<li>2026-10-03 | オンライン (オランダ アムステルダム) | <a href="https://www.meetup.com/bevy-game-development/events/">Bevy Game Development</a><ul>
<li><a href="https://www.meetup.com/bevy-game-development/events/316736369/"><strong>Bevy Meetup #14</strong></a></li>
</ul>
</li>
<li>2026-10-04 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316134009/"><strong>Rust Deep Learning: First Sunday</strong></a></li>
</ul>
</li>
<li>2026-10-06 | オンライン (英国 ロンドン) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315773044/"><strong>👋 Community Catch Up</strong></a></li>
</ul>
</li>
<li>2026-10-07 | オンライン (米国 インディアナ州インディアナポリス) | <a href="https://www.meetup.com/indyrs">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/wqzhftyjcnbkb/"><strong>Indy.rs - with Social Distancing</strong></a></li>
</ul>
</li>
<li>2026-10-08 | オンライン (ドイツ ベルリン) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/315907995/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-10-08 | オンライン (ドイツ ニュルンベルク) | <a href="https://www.meetup.com/rust-noris">Rust Nuremberg</a><ul>
<li><a href="https://www.meetup.com/rust-noris/events/315619617/"><strong>Rust Nürnberg online</strong></a></li>
</ul>
</li>
<li>2026-10-10 | オンライン (ポーランド グダニスク) | <a href="https://www.meetup.com/stacja-it-trojmiasto">Stacja IT Trójmiasto</a><ul>
<li><a href="https://www.meetup.com/stacja-it-trojmiasto/events/316381946/"><strong>[BEZPŁATNIE] Programowanie w języku Rust</strong></a></li>
</ul>
</li>
<li>2026-10-10 | ハイブリッド (マレーシア クアラルンプール) | <a href="https://discord.gg/Uz88bnZA3B">Rust Malaysia Meetup</a><ul>
<li><a href="https://forms.gle/721DxqrPeHXY6omP9"><strong>Rust Meetup October 2026</strong></a></li>
</ul>
</li>
<li>2026-10-13 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254772/"><strong>Second Tuesday</strong></a></li>
</ul>
</li>
<li>2026-10-14 - 2026-10-17 | ハイブリッド (スペイン バルセロナ) | <a href="https://eurorust.eu/">EuroRust</a><ul>
<li><a href="https://eurorust.eu/"><strong>EuroRust 2026</strong></a></li>
</ul>
</li>
<li>2026-10-18 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316563013/"><strong>Rust Deep Learning: Third Sunday</strong></a></li>
</ul>
</li>
<li>2026-10-20 | オンライン (米国 ワシントンD.C.) | <a href="https://www.meetup.com/rustdc">Rust DC</a><ul>
<li><a href="https://www.meetup.com/rustdc/events/fhvsztyjcnbbc/"><strong>Mid-month Rustful</strong></a></li>
</ul>
</li>
<li>2026-10-21 | ハイブリッド (カナダ バンクーバー) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210233/"><strong>Disposable Agent Sandboxes in Rust</strong></a></li>
</ul>
</li>
<li>2026-10-22 | オンライン (ドイツ ベルリン) | <a href="https://www.meetup.com/rust-berlin/events/">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316272609/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust/events/">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254771/"><strong>Fourth Tuesday Rust Bookclub</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オンライン (英国 ロンドン) | <a href="https://www.meetup.com/women-in-rust/events/">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315297195/"><strong>Lunch & Learn: Reasoning with Async Rust</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-10-09 | ハイブリッド (マレーシア クアラルンプール) | <a href="https://discord.gg/Uz88bnZA3B">Rust Malaysia Meetup</a><ul>
<li><a href="https://forms.gle/721DxqrPeHXY6omP9"><strong>Rust Meetup August 2026</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
<li>2026-09-30 | スイス バーゼル | <a href="https://www.meetup.com/rust-basel">Rust Basel</a><ul>
<li><a href="https://www.meetup.com/rust-basel/events/315986893/"><strong>Rust Meetup #16 @ ERNI</strong></a></li>
</ul>
</li>
<li>2026-09-30 | ドイツ ベルリン | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316661690/"><strong>Rust Berlin Talks: The next generation</strong></a></li>
</ul>
</li>
<li>2026-10-01 | ドイツ ベルリン | <a href="https://www.meetup.com/rust-berlin/events/">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316763107/"><strong>Rust Berlin on location 🏳️‍🌈 – Edition 018</strong></a></li>
</ul>
</li>
<li>2026-10-01 | 英国 オックスフォード | <a href="https://www.meetup.com/oxford-rust-meetup-group/events/">Oxford ACCU/Rust Meetup.</a><ul>
<li><a href="https://www.meetup.com/oxford-rust-meetup-group/events/316708765/"><strong>Embedded Rust for Duffers</strong></a></li>
</ul>
</li>
<li>2026-10-05 | ドイツ ミュンヘン | <a href="https://www.meetup.com/rust-munich">Rust Munich</a><ul>
<li><a href="https://www.meetup.com/rust-munich/events/316244709/"><strong>Rust Munich 2026 / 3</strong></a></li>
</ul>
</li>
<li>2026-10-08 | ノルウェー オスロ | <a href="https://www.meetup.com/rust-oslo">Rust Oslo</a><ul>
<li><a href="https://www.meetup.com/rust-oslo/events/316564477/"><strong>Rust Hack'n'Learn at Kampen Bistro</strong></a></li>
</ul>
</li>
<li>2026-10-08 | スイス ジュネーブ | <a href="https://www.posttenebraslab.ch/wiki/events/monthly_meeting/rust_meetup">Rust Geneva</a><ul>
<li><a href="https://www.posttenebraslab.ch/wiki/events/monthly_meeting/rust_meetup"><strong>Rust Meetup Geneva</strong></a></li>
</ul>
</li>
<li>2026-10-14 | スペイン バルセロナ | <a href="https://www.meetup.com/bcnrust">BcnRust</a><ul>
<li><a href="https://www.meetup.com/bcnrust/events/316316234/"><strong>22nd bcnrust session</strong></a></li>
</ul>
</li>
<li>2026-10-14 - 2026-10-17 | ハイブリッド (スペイン バルセロナ) | <a href="https://eurorust.eu/">EuroRust</a><ul>
<li><a href="https://eurorust.eu/"><strong>EuroRust 2026</strong></a></li>
</ul>
</li>
<li>2026-10-20 | ドイツ ライプツィヒ | <a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig">Rust - Modern Systems Programming in Leipzig</a><ul>
<li><a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig/events/313816496/"><strong>トピック未定（Topic TBD）</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
<li>2026-10-01 | 米国 ミズーリ州セントルイス | <a href="https://www.meetup.com/stl-rust">STL Rust</a><ul>
<li><a href="https://www.meetup.com/stl-rust/events/316410027/"><strong>Building a Minimal, Rootless Container in Rust</strong></a></li>
</ul>
</li>
<li>2026-10-03 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316378820/"><strong>Alewife Rust Lunch, Oct 3</strong></a></li>
</ul>
</li>
<li>2026-10-08 | 米国 ユタ州リーハイ | <a href="https://www.meetup.com/utah-rust/events/">Utah Rust</a><ul>
<li><a href="https://www.meetup.com/utah-rust/events/316708351/"><strong>Lightning Talks N' Chill</strong></a></li>
</ul>
</li>
<li>2026-10-08 | 米国 ニューヨーク州ニューヨーク | <a href="https://www.meetup.com/rust-nyc/events/">Rust NYC</a><ul>
<li><a href="https://www.meetup.com/rust-nyc/events/316698929/"><strong>Rust NYC: Zero Knowledge Proofs & GPUs in Rendering</strong></a></li>
</ul>
</li>
<li>2026-10-08 | 米国 カリフォルニア州サンディエゴ | <a href="https://www.meetup.com/san-diego-rust">San Diego Rust</a><ul>
<li><a href="https://www.meetup.com/san-diego-rust/events/316319730/"><strong>San Diego Rust October Meetup - Back in person!</strong></a></li>
</ul>
</li>
<li>2026-10-10 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316378823/"><strong>Back Bay Rust Lunch, Oct 10</strong></a></li>
</ul>
</li>
<li>2026-10-14 | 米国 カリフォルニア州ロサンゼルス | <a href="https://www.meetup.com/rust-los-angeles">Rust Los Angeles</a><ul>
<li><a href="https://www.meetup.com/rust-los-angeles/events/315795432/"><strong>Rust LA October: AI & Rust w/ Oxen.AI & Origin Lab!</strong></a></li>
</ul>
</li>
<li>2026-10-20 | 米国 カリフォルニア州サンフランシスコ | <a href="https://www.meetup.com/san-francisco-rust-study-group">San Francisco Rust Study Group</a><ul>
<li><a href="https://www.meetup.com/san-francisco-rust-study-group/events/315783988/"><strong>Rust Hacking in Person</strong></a></li>
</ul>
</li>
<li>2026-10-21 | ハイブリッド (カナダ バンクーバー) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210233/"><strong>Disposable Agent Sandboxes in Rust</strong></a></li>
</ul>
</li>
<li>2026-10-21 | 米国 カリフォルニア州サンフランシスコ | <a href="https://luma.com/bayarearust">Bay Area Rust</a><ul>
<li><a href="https://luma.com/ur4pm34i"><strong>Bay Area Rust - Embedded Meetup</strong></a></li>
</ul>
</li>
<li>2026-10-28 | 米国 テキサス州オースティン | <a href="https://www.meetup.com/rust-atx/events/">Rust ATX</a><ul>
<li><a href="https://www.meetup.com/rust-atx/events/316655403/"><strong>Rust Lunch - Fareground</strong></a></li>
</ul>
</li>
</ul>
<h3 id="south-america"><a class="toclink" href="#south-america">南米</a></h3>
<ul>
<li>2026-10-08 | アルゼンチン ブエノスアイレス | <a href="https://www.meetup.com/rust-argentina">Rust en Español</a><ul>
<li><a href="https://www.meetup.com/rust-argentina/events/316664266/"><strong>WebApp Ergonomics y Secretos Distribuidos.</strong></a></li>
</ul>
</li>
</ul>
<p>Rust のイベントを開催する場合は、<a href="https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com">カレンダー</a>に追加してここで紹介されるようにしてください。イベントへのリンクも忘れずに追加してください。アクセスのためには <a href="mailto:community-team@rust-lang.org">Rust コミュニティチーム</a>にメールでお問い合わせください。</p>
<h2 id="jobs"><a class="toclink" href="#jobs">求人</a></h2>
<p><a href="https://www.reddit.com/r/rust/comments/1wo5btb/official_rrust_whos_hiring_thread_for_jobseekers/">r/rust の最新の求人スレッド（Who's Hiring）</a>をご覧ください</p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">今週の言葉</a></h2>
<blockquote>
<p>このコミュニティは、呆れるほど親切です。私は Rust コミュニティの Discord サーバーで簡単な質問をしました。「Rust でファイルを読み込む最も良い方法は何ですか？」と。私は率直な答えを期待していました。ところが返ってきたのは、I/O の内部動作、バッファリング、エラー処理、所有権に関する2,000語のエッセイ、さらに4つの異なるブログ記事へのリンク、ファイルサイズに応じた3つの異なるアプローチ、そして実際に動作するコード例でした。</p>
<p>...</p>
<p>Rust コミュニティは私に対して教育を武器化しました。私は自分の意に反して、昨日よりも優れたエンジニアになってしまっています。</p>
</blockquote>
<p>– <a href="https://youtu.be/B2gmKy3pHkw?si=4QRLux5X55fTx8c8&t=196">YouTube での tris</a></p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1806">MusicalNinjaDad</a> に感謝します！</p>
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
</ul>
<p><em>メーリングリストのホスティングは <a href="https://foundation.rust-lang.org/">The Rust Foundation</a> のスポンサーシップを受けています</em></p>
<p><small><a href="https://www.reddit.com/r/rust/comments/1wuo2o9/this_week_in_rust_671/">r/rust で議論する</a></small></p>