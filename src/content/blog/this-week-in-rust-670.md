---
title: "This Week in Rust 670"
description: "今週のクレートは fastlogging-rs です。8つの異なるプログラミング言語をサポートする高速ロガーです。"
pubDate: 2026-09-23
updatedDate: 2026-09-23
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/09/23/this-week-in-rust-670/"
externalId: "tag:this-week-in-rust.org,2026-09-23:/blog/2026/09/23/this-week-in-rust-670/"
issueNumber: 670
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
<li><a href="https://blog.rust-lang.org/2026/09/17/targeted-attacks/">警戒を: 著名な Rustacean に対する標的型攻撃</a></li>
<li><a href="https://blog.rust-lang.org/2026/09/21/github-actions-leaking-secrets-when-miri-output-is-cached/">Miri の出力がキャッシュされた場合に GitHub Actions がシークレットを漏洩する問題</a></li>
<li><a href="https://blog.rust-lang.org/inside-rust/2026/09/21/maintainer-spotlight-alejandra-gonzalez-blyxyas/">メンテナースポットライト: Alejandra González (@blyxyas)</a></li>
<li><a href="https://blog.rust-lang.org/2026/09/22/announcing-a-maintainer-in-residence-scott-schafer-for-the-cargo-team/">専任メンテナー（Maintainer in Residence）の発表: Cargo チームの Scott Schafer</a></li>
</ul>
<h3 id="foundation"><a class="toclink" href="#foundation">Foundation</a></h3>
<ul>
<li><a href="https://rustfoundation.org/media/guest-post-rust-is-tier-1-language-at-microsoft/">ゲスト投稿: Rust はマイクロソフトにおいて Tier-1 言語である</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>
<ul>
<li><a href="https://linebender.org/blog/fearless-simd-1-0/">Fearless SIMD v1.0 がリリース</a></li>
<li><a href="https://blog.guillaume-gomez.fr/articles/2026-09-22+Syncing+Rust+GCC+backend+or+how+to+test+Murphy%27s+law">Rust GCC バックエンドの同期、あるいはマーフィーの法則をテストする方法</a></li>
<li><a href="https://davidlattimore.github.io/posts/2026/09/18/benchmarking-wild-vs-mold.html">Wild と Mold のベンチマーク</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://steveklabnik.com/writing/arguing-about-arguments/">引数をめぐる議論</a></li>
<li><a href="https://levelup.gitconnected.com/nine-rules-for-vibe-validation-of-vibe-coded-algorithms-20db019f5583">バイブスで書かれた（Rust）アルゴリズムをバイブス検証するための9つのルール</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li>[動画] <a href="https://www.youtube.com/watch?v=ZxxUqoUTgnA">ゼロコピーのログ行パーサーを構築して Rust の所有権を理解する</a></li>
<li><a href="https://matklad.github.io/2026/09/19/finding-bugs.html">バグを見つける（Finding Bugs）</a></li>
<li><a href="https://dev.to/dimanovikov/why-datadiff-matches-arrays-by-key-instead-of-computing-tree-edit-distance-2ehp">datadiff がツリー編集距離を計算する代わりにキーで配列をマッチングする理由</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=dLx8usb759E">RustCurious レッスン 10: あらゆる借用エラーを修正する3つの方法</a></li>
<li><a href="https://sam.dev/blog/faster-sha1-collision-detection">より高速な SHA-1 衝突検出の解決</a></li>
<li><a href="https://kerkour.com/rust-docker">Rust 向けの小さく安全な Docker イメージ: Alpine 対 Debian 対 Scratch</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://github.com/brmmm3/fastlogging-rs">fastlogging-rs</a> です。8つの異なるプログラミング言語をサポートする高速ロガーです。</p>
<p>自薦してくださった <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1673">brmmm3</a> に感謝します！</p>
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
<li><a href="https://github.com/lacs-project/sysknife/issues/482">sysknife - 成功した自動ロールバックがオペレータに対して unknown と表示される</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/480">sysknife - sysknife-setup --uninstall が .mcp.json を丸ごと削除し、他のすべての MCP サーバーも一緒に消えてしまう</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/268">sysknife - 監査エクスポートが編集前のパラメータに対するソルトなしハッシュである request_hash を公開しており、その機密性に関する記述がない</a></li>
<li><a href="https://github.com/apache/iggy/issues/4165">Apache Iggy - Python SDK: コンシューマのシャットダウンとオフセット排出タイムアウトを公開する</a></li>
<li><a href="https://github.com/apache/iggy/issues/4163">Apache Iggy - Python SDK: クライアントの切断およびシャットダウンのライフサイクルメソッドを公開する</a></li>
</ul>


<p>Rust プロジェクトのオーナーで貢献者をお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>からタスクを提出するか、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からご連絡ください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>新進気鋭の、あるいは経験豊富なスピーカーで、何かクールなことを共有する場をお探しですか？このセクションでは、企画進行中でスピーカーとしての参加応募を受け付けているイベントを紹介します。</p>



<p>イベントの認知度を高めたいとお考えのイベント主催者の方は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a> または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> を通じてウェブサイトへのリンクをお寄せください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p>先週は 618 件のプルリクエストが<a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-09-15..2026-09-22">マージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163027">Polonius 制約のいくつかのパフォーマンス改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162747">AST ロワリングのクリーンアップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162922">Polonius の各種微調整</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/147876">LateLint で <code>tainted_by_error</code> をチェックする</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162925"><code>rustc_builtin_macros</code> のさらなるクリーンアップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162712">perf: 最初のマクロ構文コンテキストマッピングをインラインに維持する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/153662">メソッド名の衝突時に完全修飾パスを提案する</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163007"><code>Dir::try_clone</code> を追加する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162750">Latin-1 向けの大文字小文字マッピングの高速パスを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162865">複素数の共役、反転、およびデフォルト</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/147790">スライス型の比較トレイトを const 化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/156216">Range に対して const Iterator を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162856"><code>CommandExt::show_window</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160544"><code>feature(trim_prefix_suffix)</code>（{<code>str</code>,<code>[T]</code>, <code>Path</code>}<code>::trim_prefix</code> および {<code>str</code>, <code>[T]</code>}<code>::trim_suffix</code>）を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160108"><code>windows_process_extensions_main_thread_handle</code> を安定化する</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17489"><code>build-rs</code>: <code>unstable</code> をコンパイルできるようにする</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17485">クリーンファイルサイズの計算時にハードリンクを（考慮/加算）する</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17469">fix: ワークスペースの依存関係を解決する際に正しいパッケージ仕様を返す</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17486">-Zasymmetric-token / cargo:paseto を削除</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17479"><code>build.warnings='deny'</code> でのエラー数を報告する</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/163036">定義へジャンプ機能における <code>dyn</code> トレイトメソッドのリンクを正しく処理する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162669">異なる名前でインライン化された同一アイテムに対するドキュメント内リンクを正しく処理する</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16592"><code>must_use_without_reason</code> リントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17731"><code>needless_borrows_for_generic_args</code> における <code>const_trait_impl</code> 関連の無限ループを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16778"><code>extend_with_drain</code> を <code>VecDeque</code> および <code>BinaryHeap</code> に汎用化する</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17631">const コンテキストでの <code>mul_add</code>、<code>custom_abs</code>、<code>radians</code> に対する <code>suboptimal_flops</code> のリント</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/16885">インライン化されていない引数に対するネストされた <code>format_args!</code> をリントする</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23407">トレイトのオートコンプリートで必須アイテムを優先する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23384"><code>cfg!()</code> 内での補完をサポート</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23390">cfg 述語でのホバーをサポート</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23395">文字列内の cfg 値を補完する</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23405">組み込み型の非推奨の定数の順序を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23399">前に引数が存在する場合に属性引数を補完しないようにする</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23375">すべてのディレクトリではなく、インクルードルートを一度に再帰的に監視する</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>


<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/master">承認された RFC</a></a></h3>
<p>Rust への変更は Rust <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC (コメント募集) プロセス</a>に従います。今週実装が承認された RFC は以下のとおりです:</p>
<ul>
<li><em>今週承認された RFC はありません。</em></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐあなたの意見を表明してください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust_1"><a class="toclink" href="#rust_1"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/issues/162130">Types FCP v2: スーパートレイトアイテムのシャドウイングの安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161904">C と C-unwind を相互に ABI 互換であると宣言する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/157973">ABI 互換性ルールにおいて <code>repr(C)</code> の ZST を他と区別する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162536">NumBuffer に対して Default を実装する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160877">rustc: WebAssembly の <code>wide-arithmetic</code> 機能を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/159564"><code>thread_local!</code> で省略された ('static) ライフタイムを許可する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161710"><code>mem::conjure_zst</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/157144"><code>CommandExt::exec</code> でグローバル環境ポインタを変更するのを防ぎ、execve を使用してパスを手動で解決するよう選択する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/146099"><code>debug_closure_helpers</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/129036">追加の NonZero 変換</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161015"><code>funnel_shifts</code>（<code>const</code> を含む）を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161712"><code>Result::into_{ok,err}</code> を安定化する</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161163">windows: inherit_handles を安定化する</a></li>
</ul>
<h5 id="cargo_1"><a class="toclink" href="#cargo_1"><a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/cargo/issues/17456">プログラム実行時にも OUT_DIR が設定される</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17215">feat(config): build.profile、install.profile を追加</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17329">fix(git)!: git が存在する場合はデフォルトで net.git-fetch-with-cli に設定</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1037">新しい Tier 3 ターゲットを作成: <code>wasm32-webp2</code></a></li>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1039">CI でスレッドとアンワインドを使用して wasm をテストする</a></li>
</ul>
<h5 id="leadership-council"><a class="toclink" href="#leadership-council"><a href="https://github.com/rust-lang/leadership-council/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Leadership Council</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/leadership-council/issues/325"><code>trusted-contributors</code> マーカーチームを組織する</a></li>
<li><a href="https://github.com/rust-lang/leadership-council/issues/320">2026年12月の Outreachy への参加（資金の拠出）</a></li>
</ul>
<p><em>今週、<a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFCs</a>、<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、<a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a>、または <a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> で最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストの一部として追跡してほしい場合は、私たちにお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><em>今週作成または更新された RFC はありません。</em></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-09-23 〜 2026-10-21 の Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-09-24 | オンライン (ドイツ ベルリン) | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/315907979/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-09-24 | オンライン (米国 バージニア州シャーロッツビル) | <a href="https://www.meetup.com/charlottesville-rust-meetup">Charlottesville Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/charlottesville-rust-meetup/events/316460694/"><strong>Rust Cells — Interior Mutability from Rust Core to Tock OS</strong></a></li>
</ul>
</li>
<li>2026-09-29 | オンライン (英国 ロンドン) | <a href="https://www.meetup.com/women-in-rust">Women in Rust</a><ul>
<li><a href="https://www.meetup.com/women-in-rust/events/315691730/"><strong>Lunch & Learn: Crates, Tips & Tricks Lightning Talks - Bring your ideas!</strong></a></li>
</ul>
</li>
<li>2026-09-30 | オンライン (英国 カーディフ) | <a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff">Rust and C++ Cardiff</a><ul>
<li><a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff/events/316486941/"><strong>Operating Systems Book Club: Segmentation and Introduction to Paging</strong></a></li>
</ul>
</li>
<li>2026-10-02 | オンライン | <a href="https://luma.com/rust-girona">Rust Girona</a><ul>
<li><a href="https://luma.com/yqxvguts"><strong>Sessió setmanal de codificació / Weekly coding session</strong></a></li>
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
</ul>
<h3 id="asia"><a class="toclink" href="#asia">アジア</a></h3>
<ul>
<li>2026-09-23 | インド マハーラーシュトラ州 | <a href="https://hasgeek.com/rustpune">Rust Pune</a><ul>
<li><a href="https://hasgeek.com/rustpune/exploring-standard-traits-in-rust/"><strong>Exploring standard traits in Rust</strong></a></li>
</ul>
</li>
</ul>
<h3 id="europe"><a class="toclink" href="#europe">ヨーロッパ</a></h3>
<ul>
<li>2026-09-24 | デンマーク オーフス | <a href="https://www.meetup.com/rust-aarhus">Rust Aarhus</a><ul>
<li><a href="https://www.meetup.com/rust-aarhus/events/316236528/"><strong>Talk Night at SkyTEM</strong></a></li>
</ul>
</li>
<li>2026-09-24 | オランダ アムステルダム | <a href="https://www.meetup.com/rust-amsterdam-group">Rust Developers Amsterdam Group</a><ul>
<li><a href="https://www.meetup.com/rust-amsterdam-group/events/316162802/"><strong>Rust Meetup @ BlockTech</strong></a></li>
</ul>
</li>
<li>2026-09-24 | ドイツ フランクフルト | <a href="https://www.meetup.com/rust-rhein-main">Rust Rhein-Main</a><ul>
<li><a href="https://www.meetup.com/rust-rhein-main/events/316328297/"><strong>AI Agentic Coding</strong></a></li>
</ul>
</li>
<li>2026-09-24 | 英国 ロンドン | <a href="https://www.meetup.com/rust-london-user-group">Rust London User Group</a><ul>
<li><a href="https://www.meetup.com/rust-london-user-group/events/316560409/"><strong>Rust London, Lloyds Banking Group, with Luca Palmieri & Mainmatter</strong></a></li>
</ul>
</li>
<li>2026-09-25 | 英国 エディンバラ | <a href="https://www.meetup.com/rust-edi">Rust and Friends</a><ul>
<li><a href="https://www.meetup.com/rust-and-friends/events/316610395/"><strong>Rust and Friends (daytime coffee)</strong></a></li>
</ul>
</li>
<li>2026-09-26 | スウェーデン ストックホルム | <a href="https://www.meetup.com/stockholm-rust">Stockholm Rust</a><ul>
<li><a href="https://www.meetup.com/stockholm-rust/events/316570423/"><strong>Ferris' Fika Forum #30</strong></a></li>
</ul>
</li>
<li>2026-09-28 | ドイツ アウクスブルク | <a href="https://rust-augsburg.github.io/meetup">Rust Meetup Augsburg</a><ul>
<li><a href="https://rust-augsburg.github.io/meetup/Meetup_21.html"><strong>Rust Meetup #21: Maximilian Grauvogl & Marcel Fink - From Bits to Bugs: A Rust generator for SUIT Manifests and Structure-Aware Parser Fuzzing</strong></a></li>
</ul>
</li>
<li>2026-09-29 | 英国 マンチェスター | <a href="https://www.meetup.com/rust-manchester">Rust Manchester</a><ul>
<li><a href="https://www.meetup.com/rust-manchester/events/316200964/"><strong>Rust Manchester September Code Night</strong></a></li>
</ul>
</li>
<li>2026-09-29 | イタリア ミラノ | <a href="https://www.meetup.com/rust-language-milano">Rust Language Milan</a><ul>
<li><a href="https://www.meetup.com/rust-language-milan/events/316654592/"><strong>Why Rust is not really OOP?</strong></a></li>
</ul>
</li>
<li>2026-09-30 | スイス バーゼル | <a href="https://www.meetup.com/rust-basel">Rust Basel</a><ul>
<li><a href="https://www.meetup.com/rust-basel/events/315986893/"><strong>Rust Meetup #16 @ ERNI</strong></a></li>
</ul>
</li>
<li>2026-09-30 | ドイツ ベルリン | <a href="https://www.meetup.com/rust-berlin">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316661690/"><strong>Rust Berlin Talks: The next generation</strong></a></li>
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
<li>2026-10-10 | スイス ジュネーブ | <a href="https://www.posttenebraslab.ch/wiki/events/monthly_meeting/rust_meetup">Rust Geneva</a><ul>
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
<li>2026-09-23 | 米国 テキサス州オースティン | <a href="https://www.meetup.com/rust-atx">Rust ATX</a><ul>
<li><a href="https://www.meetup.com/rust-atx/events/xvkdgtyjcmbfc/"><strong>Rust Lunch - Fareground</strong></a></li>
</ul>
</li>
<li>2026-09-23 | 米国 テキサス州オースティン | <a href="https://www.meetup.com/rust-atx">Rust ATX</a><ul>
<li><a href="https://www.meetup.com/rust-atx/events/316404827/"><strong>Rust Lunch - Fareground</strong></a></li>
</ul>
</li>
<li>2026-09-24 | 米国 ジョージア州アトランタ | <a href="https://www.meetup.com/rust-atl">Rust Atlanta</a><ul>
<li><a href="https://www.meetup.com/rust-atl/events/313539333/"><strong>Rust-Atl</strong></a></li>
</ul>
</li>
<li>2026-09-26 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316378817/"><strong>Harvard Rust Lunch, Sep 26</strong></a></li>
</ul>
</li>
<li>2026-10-01 | 米国 ミズーリ州セントルイス | <a href="https://www.meetup.com/stl-rust">STL Rust</a><ul>
<li><a href="https://www.meetup.com/stl-rust/events/316410027/"><strong>Building a Minimal, Rootless Container in Rust</strong></a></li>
</ul>
</li>
<li>2026-10-03 | 米国 マサチューセッツ州ボストン | <a href="https://www.meetup.com/bostonrust">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316378820/"><strong>Alewife Rust Lunch, Oct 3</strong></a></li>
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
</ul>
<h3 id="oceania"><a class="toclink" href="#oceania">オセアニア</a></h3>
<ul>
<li>2026-09-29 | オーストラリア バートン | <a href="https://www.meetup.com/rust-canberra">Canberra Rust User Group</a><ul>
<li><a href="https://www.meetup.com/rust-canberra/events/316398052/"><strong>September Meetup</strong></a></li>
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
<p>運用の衒学（operational pedantics）</p>
</blockquote>
<p>– <a href="https://rust-lang.zulipchat.com/#narrow/channel/136281-t-opsem/topic/Looping.20opsem.20into.20libs.20changes/near/626044816">rust zulip での Clar Fon</a></p>
<p>提案してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1803">Jules Bertholet</a> に感謝します！</p>
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
<p><small><a href="https://www.reddit.com/r/rust/comments/1woppw3/this_week_in_rust_670">r/rust で議論する</a></small></p>