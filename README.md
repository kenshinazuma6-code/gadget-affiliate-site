# ITガジェット アフィリエイトサイト

Next.js (App Router) + Tailwind CSS + Markdownで構築したITガジェット比較・レビューサイトです。

## 開発

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## ディレクトリ構成

- `content/posts/*.md` — 記事本体。フロントマターでタイトル・カテゴリ・タグ等を管理
- `data/products.json` — 商品情報（商品名・画像・価格・ASPリンク）を一元管理
- `src/lib/posts.ts` — 記事の読み込み・一覧取得ロジック
- `src/lib/products.ts` — 商品データの読み込みロジック
- `src/lib/markdown.ts` — Markdown→HTML変換とショートコード処理
- `src/components/` — 共通UIコンポーネント

## 記事の書き方

`content/posts/` に `.md` ファイルを追加します。

```md
---
title: "記事タイトル"
description: "メタディスクリプション"
date: "2026-07-05"
category: "USB充電器"
tags: ["在宅ワーク", "USB-C"]
featured: false
---

記事本文をMarkdownで記述します。

商品比較表を挿入する場合は商品IDをカンマ区切りで指定します。

[compare:sample-charger-a,sample-charger-b]

単品の商品カードを挿入する場合:

[product:sample-charger-a]
```

## 商品データの管理

`data/products.json` に商品を追加・編集します。`id` が記事内のショートコードから参照されます。
ASPの承認が下りたら `links` に実際のアフィリエイトリンクを設定してください。

商品画像を外部ホスト（Amazon・楽天など）から直接読み込む場合は、`next.config.ts` の
`images.remotePatterns` に該当ドメインを追加してください。

## 環境変数

`.env.local` を作成し、本番URLを設定します（OGP・サイトマップの絶対URL生成に使用）。

```
NEXT_PUBLIC_SITE_URL=https://your-domain.example.com
```

未設定の場合は `http://localhost:3000` が使われます。

Google Analytics (GA4) と Google Search Console を使う場合は、以下も設定します。

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

- `NEXT_PUBLIC_GA_ID` — GA4プロパティの測定ID。設定するとページに自動でgtag.jsが埋め込まれます
- `GOOGLE_SITE_VERIFICATION` — Search Consoleの「HTMLタグ」確認方法で発行される`content`属性の値。設定すると`<meta name="google-site-verification">`が自動で挿入されます

どちらも未設定の場合はタグ自体が出力されません。

## サイト名・ブランディング

サイト名や説明文は `src/lib/site-config.ts` にまとめてあります。ドメイン取得後や
サイト名確定後にここを更新してください。

## Vercelへのデプロイ

1. GitHub等にリポジトリをプッシュ
2. [Vercel](https://vercel.com/new) でリポジトリをインポート（Next.jsプロジェクトとして自動検出されます）
3. 環境変数 `NEXT_PUBLIC_SITE_URL` に本番ドメインを設定
4. デプロイ後、`/sitemap.xml` と `/robots.txt` が生成されていることを確認
