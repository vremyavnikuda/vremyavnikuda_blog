---
title: "This Week in Rust 675"
description: "今週のクレートは offline-protocol です。AGPL／商用ライセンスの下で、さまざまなネットワーク向けにメッシュネットワーキング／ピア検出を提供するクレートです。"
pubDate: 2026-10-28
updatedDate: 2026-10-28
draft: false
lang: ja
source: twir
sourceUrl: "https://this-week-in-rust.org/blog/2026/10/28/this-week-in-rust-675/"
externalId: "tag:this-week-in-rust.org,2026-10-28:/blog/2026/10/28/this-week-in-rust-675/"
issueNumber: 675
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
<li><a href="https://blog.rust-lang.org/inside-rust/2026/10/27/variadic-generics-micro-survey-results/">可変長ジェネリクスに関する簡易アンケート結果</a></li>
<li><a href="https://blog.rust-lang.org/2026/10/26/how-to-fund-rust-contributors/">Rust コントリビューターに資金提供する方法</a></li>
</ul>
<h3 id="newsletters"><a class="toclink" href="#newsletters">ニュースレター</a></h3>
<ul>
<li><a href="https://www.theembeddedrustacean.com/p/the-embedded-rustacean-issue-83">The Embedded Rustacean 第83号</a></li>
</ul>
<h3 id="projecttooling-updates"><a class="toclink" href="#projecttooling-updates">プロジェクト／ツールの最新情報</a></h3>
<ul>
<li><a href="https://www.redox-os.org/news/nlnet-rb-summary/">リングバッファプロジェクトのまとめ - Redox - 次世代 OS</a></li>
<li><a href="https://astral.sh/blog/tar-codec">tar-codec: Rust エコシステム向けの高速で安全な tar パーサー</a></li>
</ul>


<h3 id="observationsthoughts"><a class="toclink" href="#observationsthoughts">考察／意見</a></h3>
<ul>
<li><a href="https://ieeexplore.ieee.org/abstract/document/11723159">近道なしの Rust: 安全性の真のコストとは何か</a></li>
<li><a href="https://kivooeo.github.io/blog/what-stable-rust-stands-on/">安定版 Rust が立脚するもの</a></li>
<li><a href="https://shieldify.ee/research/where-a-flood-goes/">フラッドはどこへ向かうのか</a></li>
<li><a href="https://lwn.net/SubscriberLink/1100520/2e0f0241deef5804/">XArray の再実装に関する議論</a></li>
<li><a href="https://lwn.net/SubscriberLink/1099606/0fe2b8d731fd167f/">将来の Rust 機能</a></li>
<li><a href="https://lwn.net/SubscriberLink/1100873/0934a9a322c6df4c/">カーネルコードにおけるパニックのガイドライン</a></li>
<li><a href="https://kerkour.com/rust-crdt-love">分散システムとエンドツーエンド暗号化アプリの共通点とは？CRDT と Rust！</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=2j6BzKaODUk">P99 CONF 2026 | Piotr Gankiewicz による超高性能メッセージストリーミングの構築</a></li>
</ul>
<h3 id="rust-walkthroughs"><a class="toclink" href="#rust-walkthroughs">Rust ウォークスルー</a></h3>
<ul>
<li><a href="https://bitfieldconsulting.com/posts/heat-is-on">ヒートオン: Rust における単位の取り扱い</a></li>
<li><a href="https://tweedegolf.nl/en/blog/242/finding-panics-with-call-graph-analyzer/">Call Graph Analyzer によるパニックの発見</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=P9xCUmjkPUM">バイブコーディングを超えて: AI 生成の Python & Rust ソフトウェアの形式検証</a></li>
<li>[動画] <a href="https://www.youtube.com/watch?v=LnxuQKoxvFM">ネイティブから Web までの Rust と GPU: Liam Rust による <code>wgpu</code> 入門</a></li>
</ul>
<h3 id="miscellaneous"><a class="toclink" href="#miscellaneous">その他</a></h3>
<ul>
<li>[uz] <a href="https://doc.ferris.uz/">Rust Uzbekistan の発表および The Rust Book の公式ウズベク語訳</a></li>
</ul>
<h2 id="crate-of-the-week"><a class="toclink" href="#crate-of-the-week">今週のクレート</a></h2>
<p>今週のクレートは <a href="https://crates.io/crates/offline-protocol">offline-protocol</a> です。AGPL／商用ライセンスの下で、さまざまなネットワーク向けにメッシュネットワーキング／ピア検出を提供するクレートです。</p>
<p>自薦してくださった <a href="https://users.rust-lang.org/t/crate-of-the-week/2704/1702">Gokul</a> に感謝します！</p>
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
<li><a href="https://github.com/lacs-project/sysknife/issues/559">sysknife - 以前の sshd_config.d ドロップインが書き込まれた値を上書きしているにもかかわらず SetSshdOption が成功を報告する</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/558">sysknife - Postgres においてデーモンが監査チェーンをアンカーするが、すべてのリーダーがアンカー非対応を報告して 2 で終了する</a></li>
<li><a href="https://github.com/lacs-project/sysknife/issues/591">sysknife - #555 の終了修正、欠落ツールのデフォルト、またはオプトアウトフラグが差し戻された場合でも ci-local.test.sh がグリーンのままになる</a></li>
<li><a href="https://github.com/TabularisDB/tabularis/issues/1309">Tabularis - [Feat]: pgAdmin 4 からの接続のインポート</a></li>
<li><a href="https://git.keepword.net/keepword/keepword/issues/49">Keepword - まだ配置されていないノードを観測したネットワークの数を表示</a></li>
<li><a href="https://github.com/Muvon/octomind/issues/242">Octomind - <code>./docs/</code> が存在するときに <code>octomind workflow docs</code> が "Is a directory" で失敗する</a></li>
<li><a href="https://github.com/Muvon/octomind/issues/241">Octomind - <code>max_iterations = 0</code> のワークフローループが検証を通過し、一度も実行されない</a></li>
<li><a href="https://github.com/Muvon/octomind/issues/166">Octomind - ACP: ツール呼び出しとともにツール種別、ファイルの場所、diff を送信</a></li>
</ul>


<p>Rust プロジェクトのオーナーでコントリビューターをお探しの場合は、<a href="https://github.com/rust-lang/this-week-in-rust?tab=readme-ov-file#call-for-participation-guidelines">こちら</a>、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からタスクを送信してください！</p>
<h3 id="cfp-events"><a class="toclink" href="#cfp-events">CFP - イベント</a></h3>
<p>素晴らしいトピックを共有する場を探している、新しい講演者または経験豊富な講演者ですか？このセクションでは、計画中で講演者としての応募を受け付けているイベントを取り上げています。</p>



<p>イベントの主催者でイベントの認知度を高めたい場合は、<a href="https://github.com/rust-lang/this-week-in-rust">TWiR への PR</a>、または <a href="https://bsky.app/profile/thisweekinrust.bsky.social">Bluesky</a> や <a href="https://mastodon.social/@thisweekinrust">Mastodon</a> からウェブサイトへのリンクを送信してください！</p>
<h2 id="updates-from-the-rust-project"><a class="toclink" href="#updates-from-the-rust-project">Rustプロジェクトからの最新情報</a></h2>
<p><a href="https://github.com/search?q=is%3Apr+org%3Arust-lang+is%3Amerged+merged%3A2026-10-20..2026-10-27">先週、609 件のプルリクエストがマージされました</a></p>
<h4 id="compiler"><a class="toclink" href="#compiler">コンパイラ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/159689">解決エラーにおいて欠落している turbofish を考慮</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163845">インライン化されないホットパス上の単純な関数にさまざまな <code>#[inline]</code> アノテーションを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164300">クエリキャッシュ内の DefId エンコーディングの重複を排除</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162460"><code>#[inline(always)] + #[target_feature(enable = "....")]</code> #2</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163338">MIR の移動の除去 [4/6]: MoveElimination</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163485"><code>rustc_builtin_macros</code> のクリーンアップ、パート 8</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163971">Span 操作（特に頻出する <code>Span::to</code>）を最適化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164330">冗長な単相化チェックをスキップ</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164849">行番号の把握のために doctest コードブロックフェンスの span を使用</a></li>
</ul>
<h4 id="library"><a class="toclink" href="#library">ライブラリ</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164643">{<code>BinaryHeap</code>, <code>BTreeMap</code>, <code>BTreeSet</code>, <code>LinkedList</code>, <code>VecDeque</code>}<code>::</code>{<code>len</code>, <code>is_empty</code>} を const 安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164474">core: <code>char::is_xid_</code>{<code>start</code>, <code>continue</code>} を実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164488"><code>Skip::advance_by(0)</code> でのスキップ処理を防止</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/161253"><code>!</code> に対して <code>AsMut<T></code> および <code>AsRef<T></code> を実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164611">ビット順列のコード生成を改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163510">process: Unix 上での <code>ExitStatus</code> の <code>Debug</code> 出力を改善</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164656">Windows 向けに ExitCodeExt を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163499"><code>Vec::into_iter</code> 向けのアロケータを安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163816"><code>String::into_chars</code> を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/162927"><code>ptr_cast_slice</code> を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164641"><code>slice_split_once</code> を安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/163458">{Rc, <code>Arc}::is_unique</code> を安定化</a></li>
</ul>
<h4 id="cargo"><a class="toclink" href="#cargo">Cargo</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/cargo/pull/17631"><code>timings</code>: ユニットテーブルの列としてのピークメモリ</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17621">nightly における rlib のアップリフトを停止</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17624"><code>-Cmetadata</code> ハッシュからパス依存関係の絶対パスを除外</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17617">test: ファイル内容のアサーションを簡素化</a></li>
<li><a href="https://github.com/rust-lang/cargo/pull/17637">ビルドスクリプトに build-rs を使用</a></li>
</ul>
<h4 id="rustdoc"><a class="toclink" href="#rustdoc">Rustdoc</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164733"><code>rustc_resolve</code> ドキュメント内リンク解決に <code>deprecated</code> 属性を含める</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164594">モジュール上の内部 <code>deprecated</code> 属性を正しく処理</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164883">パスプレフィックスのないネストした use グループでのパニックを防止</a></li>
</ul>
<h4 id="rustfmt"><a class="toclink" href="#rustfmt">Rustfmt</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164815"><code>cfg_select!</code> でのさらなるコメント消失を防止</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7211"><code>cfg_select!</code> の述語、外側／内側ブロック、アーム本体、末尾カンマの間のコメントや属性を保持</a></li>
<li><a href="https://github.com/rust-lang/rustfmt/pull/7195"><code>cfg_if!</code> のエラー数リークを修正</a></li>
</ul>
<h4 id="clippy"><a class="toclink" href="#clippy">Clippy</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17898"><code>wildcard_imports</code>: 自動的な derive および proc macro 展開内でのリントを廃止</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/14904"><code>ifs_as_logical_ops</code> リントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17847"><code>map_or_else</code> から <code>map_or</code> へのリントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17892"><code>const impl</code> における <code>missing_const_for_fn</code> の誤検知を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17907">必要な括弧を削除してしまう <code>double_comparisons</code> の提案を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-clippy/pull/17835">perf: <code>unconditional_recursion</code> リントを最適化</a></li>
</ul>
<h4 id="rust-analyzer"><a class="toclink" href="#rust-analyzer">Rust-Analyzer</a></h4>
<ul>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23484">ターゲット機能の含意の自動同期</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23424">Windows 上での NamedTempFile の問題を修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23529">サブモジュール内で 'main' 'lib' モジュールを補完</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23489">ドットのない self 上での ref-match を計算</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23231">マクロ内でインライン呼び出しパラメータを使用する際にパニックしないように修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23534">#22272 で導入された <code>fetch_semantic</code> のロジックバグを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23552"><code>experimental/serverStatusNotification</code> をサポートしないクライアント向けの状態メッセージを修正</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23540"><code>format_smolstr</code> で絶対パスを使用</a></li>
<li><a href="https://github.com/rust-lang/rust-analyzer/pull/23296">cargo メタデータ取得時に lockfile を求めてマニフェストの上位を検索</a></li>
</ul>
<h3 id="rust-compiler-performance-triage"><a class="toclink" href="#rust-compiler-performance-triage">Rustコンパイラのパフォーマンストリアージ</a></h3>
<p>今週も前向きな変化が見られた一週間でした。クリーンアップによるいくつかの予期せぬ改善と、少数の的を絞った最適化が行われました。
命令数の改善に加え、<a href="https://github.com/rust-lang/rust/pull/164300">#164300</a> ではクエリキャッシュサイズの大幅な削減もマージされました。
マイナスの変化は主に予期せぬ <code>doc</code> リグレッションによるもので、現在調査中です。</p>
<p>トリアージ実施者: <strong>@panstromek</strong>
リビジョン範囲: <a href="https://perf.rust-lang.org/?start=bd4c6cc4aeef0eb9919c6f73c1e690677e9c6b38&end=019b59d8101bb3e141f1b880684747b4217beeb6&absolute=false&stat=instructions%3Au">bd4c6cc4..019b59d8</a></p>
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
<td style="text-align: center;">0.8%</td>
<td style="text-align: center;">[0.2%, 6.8%]</td>
<td style="text-align: center;">25</td>
</tr>
<tr>
<td style="text-align: center;">悪化 ❌ <br /> (セカンダリ)</td>
<td style="text-align: center;">6.8%</td>
<td style="text-align: center;">[0.0%, 189.1%]</td>
<td style="text-align: center;">34</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (プライマリ)</td>
<td style="text-align: center;">-0.8%</td>
<td style="text-align: center;">[-12.6%, -0.1%]</td>
<td style="text-align: center;">195</td>
</tr>
<tr>
<td style="text-align: center;">改善 ✅ <br /> (セカンダリ)</td>
<td style="text-align: center;">-1.2%</td>
<td style="text-align: center;">[-10.6%, -0.1%]</td>
<td style="text-align: center;">157</td>
</tr>
<tr>
<td style="text-align: center;">全体 ❌✅ (プライマリ)</td>
<td style="text-align: center;">-0.6%</td>
<td style="text-align: center;">[-12.6%, 6.8%]</td>
<td style="text-align: center;">220</td>
</tr>
</tbody>
</table>
<p>悪化 3 件、改善 6 件、混合 3 件
合計 32 件の成果物比較が実施されました</p>
<p><a href="https://github.com/rust-lang/rustc-perf/blob/5080585bb0dc997cd8aeca17eff036e0c5ddf713/triage/2026/2026-10-26.md">完全なレポートはこちら</a></p>
<h3 id="approved-rfcs"><a class="toclink" href="#approved-rfcs"><a href="https://github.com/rust-lang/rfcs/commits/main">承認された RFC</a></a></h3>
<p>Rust への変更は Rust の <a href="https://github.com/rust-lang/rfcs#rust-rfcs">RFC（Request for Comments）プロセス</a>に従います。今週、実装に向けて承認された RFC は以下の通りです：</p>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4024">2052-epochs.md: タイポ修正</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4023">3722-explicit-extern-abis.md: タイポ修正</a></li>
<li><a href="https://github.com/rust-lang/rfcs/pull/4022">libs nominated triagebot.toml を修正</a></li>
</ul>
<h3 id="final-comment-period"><a class="toclink" href="#final-comment-period">最終コメント期間（Final Comment Period）</a></h3>
<p>毎週、<a href="https://www.rust-lang.org/team.html">チーム</a>は決定に近づいている RFC や主要な PR の「最終コメント期間（Final Comment Period）」を発表します。今すぐご意見をお寄せください。</p>
<h4 id="tracking-issues-prs"><a class="toclink" href="#tracking-issues-prs">トラッキング Issue と PR</a></h4>
<h5 id="rust"><a class="toclink" href="#rust"><a href="https://github.com/rust-lang/rust/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Rust</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rust/pull/164582"><code>let_underscore_drop_guard</code> リントを追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164653">内部関数 <code>vec::from_elem</code> を非推奨化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164328">core: 次の prelude に <code>assert_matches</code> と <code>debug_assert_matches</code> を追加</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/164258"><code>Vec::into_boxed_slice()</code> がインプレースで行われる条件を明確化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/153261"><code>ptr_alignment_type</code> を <code>alignment_type</code> として部分的に安定化</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/158368">std: すべてのプラットフォームで <code>Instant</code> を符号付き <code>Duration</code> に</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/159374">#[no_mangle] を #[symbol_name]/#[link_name] に lowering</a></li>
<li><a href="https://github.com/rust-lang/rust/issues/164701">新しいトレイトソルバーに対する lang team レビュー</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/160186">任意の ABI の安全な関数に対して <code>Fn</code> トレイトを実装</a></li>
<li><a href="https://github.com/rust-lang/rust/pull/147697">cmse: 安全な境界をまたぐ共用体に対するリント</a></li>
</ul>
<h5 id="rust-rfcs"><a class="toclink" href="#rust-rfcs"><a href="https://github.com/rust-lang/rfcs/issues?q=state%3Aopen%20label%3Afinal-comment-period%20state%3Aopen">Rust RFC</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/rfcs/pull/4013">RFC: ワークスペースパッケージ選択のための <code>required-targets</code> を追加</a></li>
</ul>
<h5 id="compiler-team-mcps-only"><a class="toclink" href="#compiler-team-mcps-only"><a href="https://github.com/rust-lang/compiler-team/issues?q=label%3Amajor-change%20label%3Afinal-comment-period%20state%3Aopen">Compiler Team</a> <a href="https://forge.rust-lang.org/compiler/mcp.html">(MCP のみ)</a></a></h5>
<ul>
<li><a href="https://github.com/rust-lang/compiler-team/issues/1045"><code>annotate-snippets</code> の <code>no-graphics</code> 出力形式のサポートを追加</a></li>
</ul>
<p><em>今週は、<a href="https://github.com/rust-lang/cargo/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Cargo</a>、
<a href="https://github.com/rust-lang/lang-team/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Team</a>、
<a href="https://github.com/rust-lang/reference/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Language Reference</a>、または
<a href="https://github.com/rust-lang/unsafe-code-guidelines/issues?q=is%3Aopen%20label%3Afinal-comment-period%20sort%3Aupdated-desc%20state%3Aopen">Unsafe Code Guidelines</a> において最終コメント期間に入った項目はありませんでした。</em>
ご自身の PR、トラッキング Issue、または RFC をこのリストで追跡したい場合はお知らせください。</p>
<h3 id="new-and-updated-rfcs"><a class="toclink" href="#new-and-updated-rfcs"><a href="https://github.com/rust-lang/rfcs/pulls">新規および更新された RFC</a></a></h3>
<ul>
<li><em>今週、新規または更新された RFC は作成されませんでした。</em></li>
</ul>
<h2 id="upcoming-events"><a class="toclink" href="#upcoming-events">今後のイベント</a></h2>
<p>2026-10-28 から 2026-11-25 までの Rust イベント 🦀</p>
<h3 id="virtual"><a class="toclink" href="#virtual">オンライン</a></h3>
<ul>
<li>2026-10-28 | オンライン (カーディフ, 英国) | <a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff/events/">Rust and C++ Cardiff</a><ul>
<li><a href="https://www.meetup.com/rust-and-c-plus-plus-in-cardiff/events/316880405/"><strong>オペレーティングシステム読書会: ページング機構</strong></a></li>
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
<li>2026-11-19 | オンライン (ベルリン, ドイツ) | <a href="https://www.meetup.com/rust-berlin/events/">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/316907781/"><strong>Rust Hack and Learn</strong></a></li>
</ul>
</li>
<li>2026-11-24 | オンライン (ダラス, テキサス州, 米国) | <a href="https://www.meetup.com/dallasrust/events/">Dallas Rust User Meetup</a><ul>
<li><a href="https://www.meetup.com/dallasrust/events/310254769/"><strong>第4火曜日 Rust 読書会</strong></a></li>
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
<li>2026-10-28 | コペンハーゲン, デンマーク | <a href="https://www.meetup.com/copenhagen-rust-community">Copenhagen Rust Community</a><ul>
<li><a href="https://www.meetup.com/copenhagen-rust-community/events/316545936/"><strong>Google スポンサーによる Rust meetup #72！</strong></a></li>
</ul>
</li>
<li>2026-10-29 | ベルリン, ドイツ | <a href="https://www.meetup.com/rust-berlin/events/">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/317130457/"><strong>現地での Rust Berlin 🏳️‍🌈 – 第019版</strong></a></li>
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
<li>2026-11-02 | ベルリン, ドイツ | <a href="https://www.meetup.com/rust-berlin/events/">Rust Berlin</a><ul>
<li><a href="https://www.meetup.com/rust-berlin/events/317103436/"><strong>Rust Berlin Talks: 次世代</strong></a></li>
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
<li>2026-11-05 | オックスフォード, 英国 | <a href="https://www.meetup.com/oxford-rust-meetup-group/events/">Oxford ACCU/Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/oxford-rust-meetup-group/events/317158298/"><strong>シナプス卓越性の極致</strong></a></li>
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
</ul>
<h3 id="north-america"><a class="toclink" href="#north-america">北米</a></h3>
<ul>
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
<li>2026-11-05 | サンフランシスコ, カリフォルニア州, 米国 | <a href="https://luma.com/user/usr-eWgtha6CHSTma7v/">Rust LA: NVIDIA</a><ul>
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
<li>2026-11-21 | ボストン, マサチューセッツ州, 米国 | <a href="https://www.meetup.com/bostonrust/events/">Boston Rust Meetup</a><ul>
<li><a href="https://www.meetup.com/bostonrust/events/316924366/"><strong>Winter Hill Rust ランチ, 11月21日</strong></a></li>
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
<p>25分が経過しましたが、私たちはまだタブかスペースかで議論（bikeshedding）を続けています</p>
</blockquote>
<p>– <a href="https://hackmd.io/RUHqJ5InQkCBRs5d0WpFBA">ライブラリチームのミーティングでの Josh Triplett の発言</a></p>
<p>推薦してくれた <a href="https://users.rust-lang.org/t/twir-quote-of-the-week/328/1836">Theemathas</a> に感謝します！</p>
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
<p><small><a href="https://www.reddit.com/r/rust/comments/1xi7826/this_week_in_rust_675/">r/rust で議論する</a></small></p>
