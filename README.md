# vremyavnikuda_blog

Personal blog repository for vremyavnikuda.

![Site screenshot](img/img_1.png)

vremyavnikuda 
の個人ブログリポジトリ。

## This Week in Rust の翻訳

新しい号が公開されると、GitHub Actions が原文へのリンク付きで翻訳タスクを作成します。
タスクに記載された号番号を指定して原文をダウンロードします。

```sh
npm run twir:download -- 679
```

原文は `.cache/twir/this-week-in-rust-679-en.md` に保存されます。
翻訳は `src/content/blog/this-week-in-rust-679.md` に保存し、`lang: ja`、
`draft: false` と原文の `sourceUrl` を設定します。
公開後にローカルの原文を削除して、翻訳タスクを閉じます。
