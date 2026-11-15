---
title: "This Week in Rust 673"
description: "今週のクレートは hotcode です。実行時に Rust 関数をホットリロードするためのクレートです。"
pubDate: 2026-10-14
updatedDate: 2026-10-14
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/10/14/this-week-in-rust-673/"
externalId: "tag:this-week-in-rust.org,2026-10-14:/blog/2026/10/14/this-week-in-rust-673/"
issueNumber: 673
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
<li><a href="https://blog.rust-lang.org/inside-rust/2026/10/12/infrastructure-team-q3-recap-and-q4-plan/">インフラチーム 2026年第3四半期の振り返りと第4四半期の計画</a></li>
</ul>
<h3 id="foundation"><a class="toclink" href="#foundation">Foundation</a></h3>
<ul>
<li><a href="https://rustfoundation.org/media/rust-foundation-board-updates-october-2026/">Rust Foundation 理事会アップデート | 2026年10月</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://www.theembeddedrustacean.com/p/the-embedded-rustacean-issue-82">The Embedded Rustacean 第82号</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>
<ul>
<li><a href="https://bevy.org/news/bevy-0-20/">Bevy 0.20</a></li>
<li><a href="https://devlog.creusot.rs/v0-14-0/">Creusot 0.14.0</a></li>
<li><a href="https://brian-armstrong.github.io/yagi/lab.html">Yagi Signal Lab</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://mainmatter.com/blog/2026/10/08/all-code-will-converge-on-rust/">すべてのコードは Rust に収束する</a></li>
<li><a href="https://smallcultfollowing.com/babysteps/blog/2026/10/10/modular-vs-external-proofs/">巡回トレイト実装の「外在化された」証明が機能しない理由</a></li>
<li><a href="https://sofiabelen.github.io/projects/visualizing-crossbeam-epoch-based-reclamation/">crossbeam のエポックベース回収（Epoch Based Reclamation）の可視化</a></li>
<li><a href="https://kerkour.com/rust-ios-android-signal-whatsapp">Signal と WhatsApp が何十億もの Android および iOS デバイスに Rust をデプロイする方法</a></li>
<li><a href="https://lwn.net/SubscriberLink/1098617/d020e93fea8f12d2/">Rust のプロジェクト目標に関する最新情報</a></li>
<li><a href="https://lwn.net/SubscriberLink/1097198/ebf7de6c107d042e/">Charon による Rust プログラムの解析</a></li>
<li><a href="https://lwn.net/SubscriberLink/1099015/54401bed7cd9c3ef/">Rust コードから C の型を所有する</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=l-GaaivVJCE">RustConf 2025 インタビュー: Manish Goregaokar、Rust Devtools</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li>[JA] <a href="https://qiita.com/mattbusel/items/98045dcee4b4420ed981">同じ質問に2回お金を払うのをやめた: LLM の前に置くだけの重複排除プロキシを Rust (Tokio) で作った</a></li>
<li><a href="https://tweedegolf.nl/en/blog/241/using-trustzone-m-in-rust-on-the-raspberry-pi-pico-2/">Raspberry Pi Pico 2 上で Rust による TrustZone-M を使用する</a></li>
<li><a href="https://benjamingeer.eu/en/post/hypermedia-rust/">Rust でハイパーメディアアプリを書く</a></li>
<li><a href="https://gitlab.gnome.org/World/Rust/markup-rs/xml-tech-stack-in-rust/-/wikis/Papers/Custom-structs-as-Tree-Nodes">ツリーノードとしてのカスタム構造体</a></li>
<li><a href="https://hotpath.rs/blog/rust-performance-grafana">Grafana と Prometheus を使用して Rust のパフォーマンスをプロファイリングする方法</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=zaDvLfljbMk">RustCurious レッスン 11: 再借用（Reborrowing）と Rust の不可視ライフタイム</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=XhtLk0gEu40">BAML の Rust 駆動テレメトリ: 1000倍高速でロスレス</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=yMYBCxrRJyo">離散イベントシミュレータのファズテスト</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://github.com/alordash/hotcode">hotcode</a> です。実行時に Rust 関数をホットリロードするためのクレートです。</p>
<p>自薦してくださった <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1697">alordash</a> に感謝します！</p>
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
<p><em>今週は参加募集（Call for participation）の提出はありませんでした。</em></p>
<p>Rust プロジェクトのオーナーで貢献者をお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>からタスクを提出するか、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からご連絡ください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>新進気鋭の、あるいは経験豊富なスピーカーで、何かクールなことを共有する場をお探しですか？このセクションでは、企画進行中でスピーカーとしての参加応募を受け付けているイベントを紹介します。</p>
<p><em>今週は論文やプレゼンテーションの募集（Call for papers）の提出はありませんでした。</em></p>
<p>イベントの認知度を高めたいとお考えのイベント主催者の方は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a> または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> を通じてウェブサイトへのリンクをお寄せください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p>先週は 603 件のプルリクエストが<a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-10-06..2026-10-13">マージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/159744">単項演算子のオペランド型を後から推論できるようにする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164074">後期解決で impl trait の AST ノードのクローンを回避する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164206">ValidateBoundVars の TypeVisitor 実装で <code>self.bound_vars</code> の長さを二重チェックするのを回避する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163778">RefProp での置換時に <code>is_indirect_first_projection</code> をチェックする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164089"><code>BorrowckDomain</code> に <code>clone_from</code> を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163337">MIR ムーブ除去 (3/6): PreciseLiveness</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163348">perf: <code>improper_ctypes</code> リントで FFI 安全性の結果をキャッシュする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164150">Symbol interner により多くの容量を予約する</a></li>
<li><a href="https://github.com/rust-lang/compiler-builtins/pull/1330"><code>x86_64</code> でコンパイル時に有効な場合、実行時の fma 検出をスキップする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160877">WebAssembly の <code>wide-arithmetic</code> 機能を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/157273"><code>optimize</code> 属性を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163425"><code>value_analysis</code> で union のフィールドを相互にエイリアスしているものとして扱う</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/162027"><code>fs::rename_noreplace</code> を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162931">BTreeMap の drop 時にすべての要素を走査する代わりに直接ノードを解放する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163521"><code>BTreeMap::Iter::next</code> の高速パス</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164051"><code>NonNull::{read,write}_volatile</code> を実験的に const にする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/154170"><code>ptr::try_cast_aligned</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162810"><code>vec::dedup</code> のベクトル化された事前スキャン</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17573">ワークスペースルートに対する相対パスである場合、フィンガープリントでの絶対パスを回避する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17552">fix: 依存関係のないバイナリパッケージで、ディレクトリソースからの cargo install が失敗する問題を修正</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17569"><code>config</code>: <code>credentials.toml</code> ファイルの include を処理しない</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17568"><code>git</code>: 自動検出の削除に向けた準備として将来の非互換性警告を追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17368"><code>hints</code>: 最小限の最適化レベルをサポート</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17527"><code>job</code>: Windows で子プロセスの明示的なブレイクアウェイを許可する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17560"><code>layout</code>: 親として作成された build-dir をバックアップから除外する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17565"><code>mock-std</code>: 安定版クレートのバージョンを 0.0.0 に設定する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17539"><code>pkgid-spec</code>: 組み込みパッケージ仕様のパースとフォーマット</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17584">refactor: 1.99 向けに一部の API 使用法を刷新する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17575">ワークスペース相対の dep-info をワークスペースパッケージに限定する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17557"><code>rustdoc</code>: エディション未指定の警告を抑制する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17563"><code>test</code>: ssh を呼び出すテストに ssh が必要であることをマークする</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163841"><code>incoherent_impl</code> のリンクに関するさらなる不具合を修正</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164007">外部アイテムがローカルで再エクスポートされている場合、リモートパスよりもローカルパスを優先する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164033">再エクスポートチェーンで hidden の前に inline があるかをチェックする</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17476">configuration: <code>check-private-items</code> リストに <code>too_long_first_doc_paragraph</code> リントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16585">リテラルの除数に対して <code>manual_is_multiple_of</code> をトリガーしないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17841"><code>lint-inconsistent-struct-field-initializers</code> に対して非推奨の警告が確実に発行されるようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17609">新しいリント <code>deprecated_attributes_without_</code>{<code>since</code>, <code>note</code>}</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17704">{<code>panic</code>, <code>todo</code>, <code>unimplemented</code>, <code>unreachable</code>} を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17848">グループ化された再エクスポートにおける <code>module_name_repetitions</code> の偽陰性を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17850"><code>needless_lifetimes</code> が where 句のライフタイムをリントする問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17810"><code>manual_filter</code>: 条件が <code>&mut</code> を必要とする場合にリントしない…</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17457"><code>multiple_unsafe_ops_per_block</code>: union フィールドへの書き込み時の誤検知を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/13598">新しいリント: <code>unnecessary_box_pin</code></a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17843">マクロ展開で <code>try_from_instead_of_from_str</code> をスキップする</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17785"><code>unnecessary_self_imports</code> で末尾の <code>::self</code> をサポート</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23428">マクロ呼び出し内でのインライン呼び出しをサポート</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23476"><code>enum</code> のクロージャキャプチャにおけるダウンキャスト処理を追加</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23493">assist: ライフタイムのみの turbofish を追加しない</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23487">パスのコロンの後に括弧のない呼び出しをチェックする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23507"><code>cfg!()</code> 内の文字列での cfg キーと値の補完</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23486">内部ドキュメント後のトップレベルでの補完</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23443">エスケープを含む <code>#[doc]</code> 文字列をソースマップしない</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23508">enum のニッチデコードを rustc に合わせる</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23179">無名定数内のジェネリックパラメータの処理を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23503">unstable-book-gen に rustc のパスを渡す</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23500"><code>let</code> の初期化子が発散する場合、発散しない <code>else</code> を許可する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23482">クロージャキャプチャ推論の小さなリファクタリング</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23207">perf: ソルバーから呼び出され、計算コストが比較的高い一部の処理をクエリ化</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/22511">optimize 属性を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23483"><code>rustc_target</code> からターゲット機能の暗意を同期</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/22185">typeMismatch クイックフィックスの位置エラー: <code>to_owned()</code></a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>今週は目立った改善やリグレッションはありませんでした。改善としてマークされた PR の多くは同様のパフォーマンス結果を示しましたが、これは測定におけるコード生成のノイズによるものでした。</p>
<p>ただし、<a href="https://github.com/rust-lang/rust/pull/163915">#163915</a>、そして特に <a href="https://github.com/rust-lang/rust/pull/163887">#163887</a> のおかげで、メモリ使用量において素晴らしい成果が得られました。</p>
<p>トリアージ担当: <strong>@Kobzol</strong>。
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=cc9a14f721fac5226338c61dcec7d5ab785bde82&end=7211ea594cbf137ef6118b1752b959dea7cb9088&absolute=false&stat=instructions%3Au">cc9a14f7..7211ea59</a></p>
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
<td style="text-align: center;">0.2%</td>
<td style="text-align: center;">[0.1%, 0.6%]</td>
<td style="text-align: center;">73</td>
</tr>
<tr>
<td style="text-align: center;">リグレッション ❌ <br /> (セカンダリ)</td>
<td style="text-align: center;">0.3%</td>
<td style="text-align: center;">[0.1%, 1.4%]</td>
<td style="text-align: center;">57</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (プライマリ)</td>
<td style="text-align: center;">-0.3%</td>
<td style="text-align: center;">[-1.0%, -0.1%]</td>
<td style="text-align: center;">21</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (セカンダリ)</td>
<td style="text-align: center;">-0.3%</td>
<td style="text-align: center;">[-1.7%, -0.1%]</td>
<td style="text-align: center;">28</td>
</tr>
<tr>
<td style="text-align: center;">すべて ❌✅ (プライマリ)</td>
<td style="text-align: center;">0.1%</td>
<td style="text-align: center;">[-1.0%, 0.6%]</td>
<td style="text-align: center;">94</td>
</tr>
</tbody>
</table>
<p>3件のリグレッション、21件の改善、2件の混合。そのうち1件はロールアップ内
合計27回のアーティファクト比較を実施</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/c0ecdb487d59cfbae4516ca92bef60b4906dd98f/triage/2026/2026-10-11.md">完全なレポートはこちら</a>。</p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC (コメント募集) プロセス</a>に従います。今週実装が承認された RFC は以下のとおりです:</p>
<ul>
<li><em>今週承認された RFC はありません。</em></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐあなたの意見を表明してください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/162840">Tier 3 ターゲットポリシー: ターゲット CPU と機能はアップストリームのバックエンドによってサポートされる必要がある</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161253"><code>!</code> に対して <code>AsMut<T></code> および <code>AsRef<T></code> を実装する。</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160902">borrowck データフロー: 代入と競合する借用を終了する際、借用の浅さ（shallowness）を尊重する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160491">暗黙の境界（implied bounds）の計算を borrowck の外部に移動</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162264"><code>pat_param</code> の後に <code>:</code> を許可する</a></li>
<li><a href="https://github.com/rust-lang/rust/issues/163830">1.100-beta リグレッション: <code>box</code> パターンが削除された（機能 <code>box_patterns</code>）</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163436"><code>-Zembed-metadata</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162444">サポートされていない場合でも、<code>std::fs::{File, ReadDir, DirEntry}</code> が常に <code>needs_drop</code> になるようにする。</a></li>
</ul>
<h5 id="rust-rfcs"><a class="toclink" href="#rust-rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFCs</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/3532">RFC: タプル型の要素およびタプル（構造体）パターンに対する（外側）cfg-属性を許可する</a></li>
</ul>
<h5 id="language-reference"><a class="toclink" href="#language-reference"><a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/reference/pull/2337">最終的な有効性ルールの確定: 参照と union</a></li>
</ul>
<h5 id="leadership-council"><a class="toclink" href="#leadership-council"><a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/leadership-council/issues/340">All Hands 2027 ホテルの事前予約</a></li>
</ul>
<p><em>今週、<a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a>、<a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a>、<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、または <a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> で最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストの一部として追跡してほしい場合は、私たちにお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4016">RFC: レジストリ保留（withholding）のサポート</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4014">RFC: unsafe <code>global_asm</code></a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4015">crates.io における限定的なセルフサービスバージョン削除のための RFC</a></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-10-14 〜 2026-11-11 の Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-10-14 - 2026-10-17 | ハイブリッド (スペイン バルセロナ) | <a href="https://eurorust.eu/">EuroRust</a><ul>
<li><a href="https://eurorust.eu/"><strong>EuroRust 2026</strong></a></li>
</ul>
</li>
<li>2026-10-15 | ハイブリッド (米国 ワシントン州シアトル) | <a href="https://www.meetup.com/join-srug">Seattle Rust User Group</a><ul>
<li><a href="https://www.meetup.com/seattle-rust-user-group/events/316943302/"><strong>October, 2026 SRUG (Seattle Rust User Group) Meetup</strong></a></li>
</ul>
</li>
<li>2026-10-18 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316563013/"><strong>Rust Deep Learning: Third Sunday</strong></a></li>
</ul>
</li>
<li>2026-10-20 | オンライン (米国 ワシントンD.C.) | <a href="https://www.meetup.com/rustdc">Rust DC</a><ul>
<li><a href="https://www.meetup.com/rustdc/events/316788257/"><strong>Mid-month Rustful</strong></a></li>
</ul>
</li>
<li>2026-10-21 | ハイブリッド (カナダ バンクーバー) | <a href="https://www.meetup.com/vancouver-rust">Vancouver Rust</a><ul>
<li><a href="https://www.meetup.com/vancouver-rust/events/315210233/"><strong>Disposable Agent Sandboxes in Rust</strong></a></li>
</ul>
</li>
<li>2026-10-21 | オンライン (英国 カーディフ) | <a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff">Rust and C++ Cardiff</a><ul>
<li><a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff/events/316880405/"><strong>Operating Systems Book Club: Paging Mechanisms</strong></a></li>
</ul>
</li>
<li>2026-10-22 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/k1978ath"><strong>Rust and the GPU from Native to Web: An Introduction to <code>wgpu</code></strong></a></li>
</ul>
</li>
<li>2026-10-22 | オンライン (ドイツ ベルリン) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316272609/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-10-26 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/1byfc495"><strong>No Python was harmed: teaching a tiny MCU to learn as it goes</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254771/"><strong>Fourth Tuesday Rust Bookclub</strong></a></li>
</ul>
</li>
<li>2026-10-27 | オンライン (英国 ロンドン) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315297195/"><strong>Lunch & Learn: Reasoning with Async Rust</strong></a></li>
</ul>
</li>
<li>2026-10-29 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/q8i3385k"><strong>Creating a hexadecimal editor in Rust</strong></a></li>
</ul>
</li>
<li>2026-11-01 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/omlooqv8"><strong>Cursed Rust</strong></a></li>
</ul>
</li>
<li>2026-11-01 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/316331277/"><strong>Rust Deep Learning: First Sunday</strong></a></li>
</ul>
</li>
<li>2026-11-03 | オンライン | <a href="https://luma.com/rust-maven">Rust 🦀 Maven</a><ul>
<li><a href="https://luma.com/rfbzk3ae"><strong>Solving Real-World Planning Problems in Rust with SolverForge</strong></a></li>
</ul>
</li>
<li>2026-11-03 | オンライン (英国 ロンドン) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315773682/"><strong>👋 Community Catch Up</strong></a></li>
</ul>
</li>
<li>2026-11-04 | オンライン (米国 インディアナ州インディアナポリス) | <a href="https://www.meetup.com/indyrs">Indy Rust</a><ul>
<li><a href="https://www.meetup.com/indyrs/events/wqzhftyjcpbgb/"><strong>Indy.rs - with Social Distancing</strong></a></li>
</ul>
</li>
<li>2026-11-05 | オンライン (ドイツ ベルリン) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907780/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-10 | オンライン (米国 テキサス州ダラス) | <a href="https://www.meetup.com/dallasrust">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254770/"><strong>Second Tuesday</strong></a></li>
</ul>
</li>
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-11-03 | イスラエル テルアビブ | <a href="https://www.meetup.com/rust-tlv">Rust 🦀 TLV</a><ul>
<li><a href="https://www.meetup.com/rust-tlv/events/316440864/"><strong>In person Rust November 2026 at AWS in Tel Aviv</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
<li>2026-10-14 | スペイン バルセロナ | <a href="https://www.meetup.com/bcnrust">BcnRust</a><ul>
<li><a href="https://www.meetup.com/bcnrust/events/316316234/"><strong>22nd bcnrust session</strong></a></li>
</ul>
</li>
<li>2026-10-14 - 2026-10-17 | ハイブリッド (スペイン バルセロナ) | <a href="https://eurorust.eu/">EuroRust</a><ul>
<li><a href="https://eurorust.eu/"><strong>EuroRust 2026</strong></a></li>
</ul>
</li>
<li>2026-10-14 | ドイツ ケルン | <a href="https://www.meetup.com/rust-cologne-bonn">Rust Cologne</a><ul>
<li><a href="https://www.meetup.com/rustcologne/events/316891100/"><strong>Rust in October: Macro-magic</strong></a></li>
</ul>
</li>
<li>2026-10-20 | ドイツ ライプツィヒ | <a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig">Rust - Modern Systems Programming in Leipzig</a><ul>
<li><a href="https://www.meetup.com/rust-modern-systems-programming-in-leipzig/events/313816496/"><strong>Creating a realtime web Multiuser Dungeon game with Dioxus</strong></a></li>
</ul>
</li>
<li>2026-10-22 | ドイツ カールスルーエ | <a href="https://www.meetup.com/rust-hack-learn-karlsruhe">Rust Hack & Learn Karlsruhe</a><ul>
<li><a href="https://www.meetup.com/rust-hack-learn-karlsruhe/events/316799366/"><strong>Karlsruhe Rust Hack and Learn Meetup bei BlueYonder</strong></a></li>
</ul>
</li>
<li>2026-10-22 | フランス トゥールーズ | <a href="https://www.meetup.com/rust-community-toulouse">Rust Toulouse</a><ul>
<li><a href="https://www.meetup.com/rust-community-toulouse/events/316880185/"><strong>Rust Toulouse Meetup - Rust & Python interoperability</strong></a></li>
</ul>
</li>
<li>2026-10-27 | デンマーク オーフス | <a href="https://www.meetup.com/rust-aarhus">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316796329/"><strong>Hack Night: Rust meets AI</strong></a></li>
</ul>
</li>
<li>2026-10-27 | フランス パリ | <a href="https://www.meetup.com/rust-paris">Rust Paris</a><ul>
<li><a href="https://www.meetup.com/rust-paris/events/316865643/"><strong>Rust meetup #89</strong></a></li>
</ul>
</li>
<li>2026-10-31 | スウェーデン ストックホルム | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/316721062/"><strong>Ferris' Fika Forum #31</strong></a></li>
</ul>
</li>
<li>2026-11-01 - 2026-11-03 | イタリア | <a href="https://rustlab.it/">RustLab</a><ul>
<li><a href="https://rustlab.it/schedule"><strong>RustLab - The International Conference on Rust in Italy</strong></a></li>
</ul>
</li>
<li>2026-11-04 | アイルランド ダブリン | <a href="https://www.meetup.com/rust-dublin">Rust Dublin</a><ul>
<li><a href="https://www.meetup.com/rust-dublin/events/316898325/"><strong>Rust 263: Getting Started with the New Rust Driver for Oracle AI Database</strong></a></li>
</ul>
</li>
<li>2026-11-05 | イタリア ミラノ | <a href="https://www.meetup.com/rust-language-milano">Rust Language Milan</a><ul>
<li><a href="https://www.meetup.com/rust-language-milan/events/316213872/"><strong>Digital Model Trains & Rust: Bare-Metal DCC Command Station on ESP32</strong></a></li>
</ul>
</li>
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
<li>2026-10-14 | 米国 カリフォルニア州ロサンゼルス | <a href="https://www.meetup.com/rust-los-angeles">Rust Los Angeles</a><ul>
<li><a href="https://www.meetup.com/rust-los-angeles/events/315795432/"><strong>Rust LA October: AI & Rust w/ Oxen.AI & Origin Lab!</strong></a></li>
</ul>
</li>
<li>2026-10-15 | ハイブリッド (米国 ワシントン州シアトル) | <a href="https://www.meetup.com/join-srug">Seattle Rust User Group</a><ul>
<li><a href="https://www.meetup.com/seattle-rust-user-group/events/316943302/"><strong>October, 2026 SRUG (Seattle Rust User Group) Meetup</strong></a></li>
</ul>
</li>
<li>2026-10-17 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924092/"><strong>Central Cambridge Rust Lunch, Oct 17</strong></a></li>
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
<li>2026-10-22 | 米国 ニューヨーク州ニューヨーク | <a href="https://www.meetup.com/rust-nyc">Rust NYC</a><ul>
<li><a href="https://www.meetup.com/rust-nyc/events/316901518/"><strong>Rust NYC w/Bryan Cantrill - Code Matters: Reflections on Rust in the LLM Age</strong></a></li>
</ul>
</li>
<li>2026-10-24 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924143/"><strong>Davis Square Rust Lunch, Oct 24</strong></a></li>
</ul>
</li>
<li>2026-10-28 | 米国 テキサス州オースティン | <a href="https://www.meetup.com/rust-atx/events/">Rust ATX</a><ul>
<li><a href="https://www.meetup.com/rust-atx/events/316655403/"><strong>Rust Lunch - Fareground</strong></a></li>
</ul>
</li>
<li>2026-10-31 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924288/"><strong>North End Rust Lunch, Oct 31</strong></a></li>
</ul>
</li>
<li>2026-11-05 | 米国 ミズーリ州セントルイス | <a href="https://www.meetup.com/stl-rust">STL Rust</a><ul>
<li><a href="https://www.meetup.com/stl-rust/events/316896797/"><strong>HTMX and Rust</strong></a></li>
</ul>
</li>
</ul>
<h3 id="south-america"><a class="toclink" href="#south-america">南米</a></h3>
<ul>
<li>2026-11-07 | ブラジル プラナルト・パウリスタ | <a href="https://www.meetup.com/rust-sao-paulo-meetup">Rust São Paulo Meetup</a><ul>
<li><a href="https://www.meetup.com/rust-sao-paulo-meetup/events/316812852/"><strong>Encontro do Rust-SP - Agora no Luma</strong></a></li>
</ul>
</li>
</ul>
<p>Rust のイベントを開催する場合は、<a href="https://www.google.com/calendar/embed?src=apd9vmbc22egenmtu5l6c5jbfc%40group.calendar.google.com">カレンダー</a>に追加してここで紹介されるようにしてください。イベントへのリンクも忘れずに追加してください。アクセスのためには <a href="mailto:community-team@rust-lang.org">Rust コミュニティチーム</a>にメールでお問い合わせください。</p>
<h2 id="jobs"><a class="toclink" href="#jobs">求人</a></h2>
<p><a href="https://www.reddit.com/r/rust/comments/1wzctie/official_rrust_whos_hiring_thread_for_jobseekers/">r/rust の最新の求人スレッド（Who's Hiring）</a>をご覧ください</p>
<h2 id="quote-of-the-week"><a class="toclink" href="#quote-of-the-week">今週の言葉</a></h2>
<blockquote>
<p>この分野のエキスパートで、「C言語ってどう動くの？」という問いに「動かないよ、次の質問どうぞ」と本気で答える人は、ゼロではないと思います。</p>
</blockquote>
<p>– <a href="https://rust-lang.zulipchat.com/#narrow/channel/219381-t-libs/topic/optimize_for_size/near/629933186">rust-lang zulip での Clar Fon</a></p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1824">kleines Filmröllchen</a> に感謝します！</p>
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
<p><small><a href="https://www.reddit.com/r/rust/comments/1x70ut5/this_week_in_rust_673/">r/rust で議論する</a></small></p>