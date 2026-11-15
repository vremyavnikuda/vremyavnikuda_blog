---
title: "This Week in Rust 672"
description: "今週のクレートは karatepe です。静的型付けされたローカライゼーション言語およびライブラリです。"
pubDate: 2026-10-07
updatedDate: 2026-10-07
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/10/07/this-week-in-rust-672/"
externalId: "tag:this-week-in-rust.org,2026-10-07:/blog/2026/10/07/this-week-in-rust-672/"
issueNumber: 672
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


<h3 id="official"><a class="toclink" href="#official">公式</a></h3>
<ul>
<li><a href="https://blog.rust-lang.org/2026/10/01/Rust-1.99.0/">Rust 1.99.0 のリリースのお知らせ</a></li>
<li><a href="https://blog.rust-lang.org/inside-rust/2026/10/02/generic-const-args-and-you/">ジェネリック定数引数とあなた</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=SLV9AJxnb1U">Rust リリース変更履歴 - 1.99.0</a></li>
</ul>
<h3 id="foundation"><a class="toclink" href="#foundation">Foundation</a></h3>
<ul>
<li><a href="https://rustfoundation.org/media/a-fond-farewell-to-three-rust-foundation-colleagues/">Rust Foundation の3名の同僚への温かい別れ</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://rust-osdev.com/this-month/2026-09/index.html">This Month in Rust OSDev: 2026年9月</a></li>
<li><a href="https://rust-trends.com/newsletter/nvidia-brings-rust-to-the-gpu-kernel/">Rust Trends 第83号 - NVIDIA が GPU カーネルに Rust を導入</a></li>
<li><a href="https://rust-trends.com/newsletter/google-puts-agents-on-the-rust-rewrite/">Rust Trends 第84号 - Google が Rust への書き換えにエージェントを投入</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>


<ul>
<li><a href="https://docs.fullbleed.dev/getting-started/rust/">HTML と CSS を使用して Rust から PDF を生成する</a></li>
<li><a href="https://medium.com/@vbasky/catharsis-for-noisy-audio-a-pure-rust-restoration-toolkit-with-no-ffmpeg-and-no-black-boxes-a6c5c38e4c14">ノイズの多い音声のためのカタルシス: ffmpeg やブラックボックスを使用しない Pure-Rust 音声復元ツールキット</a></li>
<li><a href="https://github.com/rui314/mold/releases/tag/v3.0.0">mold 3.0.0 のリリース · rui314/mold</a></li>
</ul>
<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://blog.python.org/2026/09/language-summit-2026-rust-for-cpython/">CPython のための Rust（Python Language Summit 2026）</a></li>
<li><a href="https://kerkour.com/rust-techempower-benchmarks">嘘、真っ赤な嘘、そして TechEmpower Web フレームワークベンチマークにおける Rust</a></li>
<li><a href="https://lwn.net/SubscriberLink/1096028/7524dbcae1be7205/"><code>&</code> のその先へ</a></li>
<li><a href="https://pranitha.dev/posts/rwlock-vs-lockfree/">読み取り負荷の高いワークロードにおける RwLock のパフォーマンスコスト</a></li>
<li><a href="https://tokio.rs/blog/2026-10-06-tokioconf-2027-cfp">TokioConf 2027 の登壇応募（CFP）の受付が開始</a></li>
<li><a href="https://developer.chrome.com/blog/jpeg-xl-in-chrome">Chrome における JPEG XL の提供</a></li>
<li><a href="https://medium.com/@Koukyosyumei/proving-rust-web-application-correctness-with-lean-4-8889583f1e15">Lean 4 を用いた Rust Web アプリケーションの正当性の証明</a></li>
<li><a href="https://medium.com/@alan0408yuan/hardware-aware-programming-in-rust-6e68a70c1535?postPublishedType=repub">Rust におけるハードウェアを意識したプログラミング</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li><a href="https://mcmah309.github.io/posts/the-missing-piece-in-rust-error-handling/">Rust のエラー処理における欠けたピース</a></li>
<li><a href="https://lwn.net/Articles/1095553/">gccrs によるカーネルのコンパイル</a></li>
<li><a href="https://sigseis.dev/articles/2026/10/06">Rust の宣言的マクロ: シンプルで実践的な入門</a></li>
<li><a href="https://www.deepcausality.com/tutorials/dynamic-drone-failsafe/">状況の変化に適応する動的なドローンフェイルセーフシステム。</a></li>
<li><a href="https://iot.implrust.com/burglar-alarm/index.html">Telegram アラートを送信する ESP32-C5 防犯アラームの構築</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://codeberg.org/miroo/karatepe">karatepe</a> です。静的型付けされたローカライゼーション言語およびライブラリです。</p>
<p>自薦してくださった <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1690">miro</a> に感謝します！</p>
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
<li><a href="https://github.com/issuerd/issuerd/issues/1">issuerd - ログインページとメール用のフランス語（fr）メッセージバンドルを追加する</a></li>
<li><a href="https://github.com/issuerd/issuerd/issues/3">issuerd - issuerd-protocol パーサー用の proptest スイートを追加する</a></li>
<li><a href="https://github.com/issuerd/issuerd/issues/5">issuerd - 追加のクライアントインストールプロバイダー（アダプター設定ダウンロード形式）を追加する</a></li>
<li><a href="https://github.com/gvozdetsky/ruxen/issues/35">ruxen - include 内の glob を展開する</a></li>
<li><a href="https://github.com/gvozdetsky/ruxen/issues/33">ruxen - すべての場所で nginx のステータス理由句を使用する</a></li>
<li><a href="https://github.com/gvozdetsky/ruxen/issues/39">ruxen - proxy_method を実装する</a></li>
</ul>
<p>Rust プロジェクトのオーナーで貢献者をお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>からタスクを提出するか、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からご連絡ください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>新進気鋭の、あるいは経験豊富なスピーカーで、何かクールなことを共有する場をお探しですか？このセクションでは、企画進行中でスピーカーとしての参加応募を受け付けているイベントを紹介します。</p>



<ul>
<li><a href="https://sessionize.com/rustweek-2027/"><strong>RustWeek 2027</strong></a> | CFP 締切: 2027-01-10 | オランダ ユトレヒト | イベント開催日: 2027-05-24</li>
<li><a href="https://tokio.rs/blog/2026-10-06-tokioconf-2027-cfp"><strong>TokioConf 2027</strong></a> | CFP 締切: 2026-11-30 | 米国 オレゴン州ポートランド | 2027-04-26 〜 2027-04-27</li>
</ul>
<p>イベントの認知度を高めたいとお考えのイベント主催者の方は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a> または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> を通じてウェブサイトへのリンクをお寄せください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p>先週は 653 件のプルリクエストが<a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-09-29..2026-10-06">マージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163628">エントリが1つの親 <code>SpanData</code> キャッシュを追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163607">一般化に高速パスを追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163649">Cranelift を PGO で最適化する</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/151793">浮動小数点型に <code>mul_add_relaxed</code> メソッドを追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/158936"><code>std::fs::{Home|Media}Dirs</code> を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163489"><code>Rc::is_unique</code> を公開する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163711"><code>CStr::display</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/146099"><code>debug_closure_helpers</code> を安定化する</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17531"><code>-Zmem-stats</code> を介して有効化されるピークメモリテーブルを cargo timings に追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17536"><code>config</code>: レガシーフォールバック付きの適切なドット付きタプルのサポート</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17329">git: git が存在する場合はデフォルトで net.git-fetch-with-cli に設定</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17547">テストスイートのファイルパーミッションのクリーンアップを改善</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17538"><code>lint</code>: リント名をドキュメントへのターミナルハイパーリンクにする</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17488"><code>trim-paths</code>: <code>profile.trim-paths</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17426">Cargo クレートに信頼できる公開（trusted publishing）を使用する</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163360">プリミティブメソッド上の <code>rustc_allow_incoherent_impl</code> を正しく処理する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163682">「定義へジャンプ」で（インポートされた）<code>enum</code> バリアントに正しくリンクする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160915"><code>Deref</code> アイテムの処理方法を修正</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7156"><code>items</code>: <code>clause_shape</code> 予算を使用して where 句の後のコメントをフォーマット</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7152"><code>adjust_max_width</code> に飽和演算を使用する</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17817"><code>manual_range_patterns</code>: 文字およびバイトリテラルをサポート</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17701"><code>let_unit_value</code>: 初期化子が cfg に依存している場合は中断する</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17012">可変参照パターンをリントするように <code>needless_borrowed_reference</code> を拡張</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17807"><code>has_non_owning_mutable_access_inner</code> の指数時間パフォーマンスバグを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17816"><code>items_after_test_module</code> を改善: derive の展開によって末尾のアイテムが隠されないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16953">新しいリント: <code>unnecessary_as_slice</code></a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17355">MSRV の呼び出しを（再び）最適化</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23468">アーム式およびクロージャ式で 'let' 'letm' を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23473">関数がパラメータを推論できない場合に turbofish を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23452">期待される呼び出し可能引数で引数リストを提案しない</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23449"><code>unicode-ident</code> を修正（その2）</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23444">unresolved-references 実行時に不足している HIR データベースを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/22982">マクロ文での展開時にマクロ内の let を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23422">or アームの項数が一致しない不正な形式の let パターンでパニックしないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23462">impl 内で self のバリアントを生成する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23467">ネストされた曖昧な箇所でのブロック内ヒューリスティックチェックを改善</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23456">name-match で先頭および末尾のアンダースコアを無視する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23441">トレイトをモジュールに抽出する際の使用パスを変換する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23061">next-sol… の <code>opaques_with_sub_unified_hidden_type</code> の実装を修正</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>比較的静かな一週間でしたが、それでも非常に前向きな結果となりました。
主なハイライトとしては、rustdoc 実行時にメタデータベースの crate_hash を使用しないことによる rustdoc の速度の 3.1% の改善、
トレイトソルバーの新しい高速パスによる 0.5% の改善、
そして <code>SpanData</code> の親用のキャッシュによる 0.4% の改善が挙げられます。</p>
<p>トリアージ担当: <strong>@JonathanBrouwer</strong>。
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=c1070d69382b8d2f2eb65119c738a77d9e324c9e&end=cc9a14f721fac5226338c61dcec7d5ab785bde82&absolute=false&stat=instructions%3Au">c1070d69..cc9a14f7</a></p>
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
<td style="text-align: center;">[0.4%, 1.0%]</td>
<td style="text-align: center;">12</td>
</tr>
<tr>
<td style="text-align: center;">リグレッション ❌ <br /> (セカンダリ)</td>
<td style="text-align: center;">0.4%</td>
<td style="text-align: center;">[0.1%, 0.9%]</td>
<td style="text-align: center;">26</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (プライマリ)</td>
<td style="text-align: center;">-1.1%</td>
<td style="text-align: center;">[-6.2%, -0.2%]</td>
<td style="text-align: center;">212</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (セカンダリ)</td>
<td style="text-align: center;">-1.9%</td>
<td style="text-align: center;">[-15.7%, -0.1%]</td>
<td style="text-align: center;">208</td>
</tr>
<tr>
<td style="text-align: center;">すべて ❌✅ (プライマリ)</td>
<td style="text-align: center;">-1.0%</td>
<td style="text-align: center;">[-6.2%, 1.0%]</td>
<td style="text-align: center;">224</td>
</tr>
</tbody>
</table>
<p>4件のリグレッション、3件の改善、1件の混合。そのうち5件はロールアップ内
合計33回のアーティファクト比較を実施</p>
<p><a href="https://github.com/JonathanBrouwer/rustc-perf/blob/b65c7aa3a161fb8590ed262043e822d278f5a7f5/triage/2026/2026-10-05.md">完全なレポートはこちら</a></p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC (コメント募集) プロセス</a>に従います。今週実装が承認された RFC は以下のとおりです:</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4012">デフォルトブランチを main に変更</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/3983"><code>f16b</code> 型</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐあなたの意見を表明してください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/162444">サポートされていない場合でも、<code>std::fs::{File, ReadDir, DirEntry}</code> が常に <code>needs_drop</code> になるようにする。</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163224">[rustdoc] 設定ポップオーバーにタブを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160877">rustc: WebAssembly の <code>wide-arithmetic</code> 機能を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160904">マクロ呼び出しの doc 属性内の非リテラル式でエラーにする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162927"><code>ptr_cast_slice</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162858"><code>VaArgSafe</code> に追加の型を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/159580">安全に削除できない式に対する cfg を拒否する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162140"><code>fn_addr_eq</code>: 実際には基本的に何も保証できない</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/157712">MinGW 上でインポートライブラリを生成するために dlltool を使用するのをやめる</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/154170"><code>ptr::try_cast_aligned</code> を安定化する</a></li>
<li>[disposition: close] <a href="https://github.com/rust-lang/rust/issues/161916">1.99 beta crater リグレッション: 要件の評価でのオーバーフロー</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1044"><code>hir::Param</code> を関数の <code>Body</code> から <code>FnDecl</code> に移動する。</a></li>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1016">MCP: バイナリサイズ削減のための -Zasync-panic を追加</a></li>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1041">Nightly Rust に BorrowSanitizer を実験的にアップストリーム化</a></li>
</ul>
<h5 id="language-reference"><a class="toclink" href="#language-reference"><a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/reference/pull/2309">never 型 <code>!</code> がサイズ 0 かつアライメント 1 であることを保証する。</a></li>
</ul>
<p><em>今週、<a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFCs</a>、<a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a>、<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、<a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a>、または <a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> で最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストの一部として追跡してほしい場合は、私たちにお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4013">RFC: ワークスペースパッケージ選択のための <code>required-targets</code> の追加</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4014">RFC: unsafe <code>global_asm</code></a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4011">適切な <code>Copy</code> クロージャキャプチャ</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4015">crates.io における限定的なセルフサービスバージョン削除のための RFC</a></li>
</ul>

<p>この RFC は This Week in Rust (TWiR) の次号 (#) の<strong>テストの募集</strong>セクションに掲載されます。<code>call-for-testing</code> ラベルは削除して構いません。この RFC を TWiR の別の号に再度掲載したい場合は、<code>call-for-testing</code> ラベルをそのままにしておいてください。</p>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-10-07 〜 2026-11-04 の Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
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
<li>2026-10-11 | オンライン (インド ベンガルール) | <a href="https://discord.com/invite/pvYY69PvyS">Embedded Rust Discord</a><ul>
<li><a href="https://discord.gg/t9Cb2gjjq7?event=1553055353149718588"><strong>Silicon Sundays 4</strong></a></li>
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
<li>2026-10-22 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/k1978ath"><strong>Rust and the GPU from Native to Web: An Introduction to <code>wgpu</code></strong></a></li>
</ul>
</li>
<li>2026-10-26 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/1byfc495"><strong>No Python was harmed: teaching a tiny MCU to learn as it goes</strong></a></li>
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
<li>2026-10-29 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/q8i3385k"><strong>Creating a hexadecimal editor in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-01 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust/events/">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316331277/"><strong>Rust Deep Learning: First Sunday</strong></a></li>
</ul>
</li>
<li>2026-11-03 | オンライン (英国 ロンドン) | <a href="https://www.meetup.com/women-in-rust/events/">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315773682/"><strong>👋 Community Catch Up</strong></a></li>
</ul>
</li>
<li>2026-11-04 | オンライン (米国 インディアナ州インディアナポリス) | <a href="https://www.meetup.com/indyrs/events/">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/wqzhftyjcpbgb/"><strong>Indy.rs - with Social Distancing</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-10-09 | ハイブリッド (マレーシア クアラルンプール) | <a href="https://discord.gg/Uz88bnZA3B">Rust Malaysia Meetup</a><ul>
<li><a href="https://forms.gle/721DxqrPeHXY6omP9"><strong>Rust Meetup August 2026</strong></a></li>
</ul>
</li>
<li>2026-11-03 | イスラエル テルアビブ | <a href="https://www.meetup.com/rust-tlv/events/">Rust 🦀 TLV</a><ul>
<li><a href="https://www.meetup.com/rust-tlv/events/316440864/"><strong>In person Rust November 2026 at AWS in Tel Aviv</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
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
<li>2026-10-20 | ドイツ ライプツィヒ | <a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig/events/">Rust - Modern Systems Programming in Leipzig</a><ul>
<li><a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig/events/313816496/"><strong>Creating a realtime web Multiuser Dungeon game with Dioxus</strong></a></li>
</ul>
</li>
<li>2026-10-22 | ドイツ カールスルーエ | <a href="https://www.meetup.com/rust-hack-learn-karlsruhe/events/">Rust Hack & Learn Karlsruhe</a><ul>
<li><a href="https://www.meetup.com/rust-hack-learn-karlsruhe/events/316799366/"><strong>Karlsruhe Rust Hack and Learn Meetup bei BlueYonder</strong></a></li>
</ul>
</li>
<li>2026-10-22 | フランス トゥールーズ | <a href="https://www.meetup.com/rust-community-toulouse">Rust Toulouse</a><ul>
<li><a href="https://www.meetup.com/rust-community-toulouse/events/316880185/"><strong>Rust Toulouse Meetup - Rust & Python interoperability</strong></a></li>
</ul>
</li>
<li>2026-10-27 | デンマーク オーフス | <a href="https://www.meetup.com/rust-aarhus/events/">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316796329/"><strong>Hack Night: Rust meets AI</strong></a></li>
</ul>
</li>
<li>2026-10-31 | スウェーデン ストックホルム | <a href="https://www.meetup.com/stockholm-rust/events/">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/316721062/"><strong>Ferris' Fika Forum #31</strong></a></li>
</ul>
</li>
<li>2026-11-01 - 2026-11-03 | イタリア | <a href="https://rustlab.it/">RustLab</a><ul>
<li><a href="https://rustlab.it/schedule"><strong>RustLab - The International Conference on Rust in Italy</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
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
<p><a href="https://www.reddit.com/r/rust/comments/1wzctie/official_rrust_whos_hiring_thread_for_jobseekers/">r/rust の最新の求人スレッド（Who's Hiring）</a>をご覧ください</p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">今週の言葉</a></h2>
<blockquote>
<p>「今週の言葉」にはルールなんてない — 生き残るのは、最も機知（wit）に富んだ者だ</p>
</blockquote>
<p>– <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1814?u=llogiq">rust-users での Simon Buchan</a></p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1815">Jonas Fassbender</a> に感謝します！</p>
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
<p><small><a href="https://www.reddit.com/r/rust/comments/1x0kagz/this_week_in_rust_672/">r/rust で議論する</a></small></p>