// サイト名・URLなどはまだ未確定のため仮の値。ドメイン取得後に更新してください。
export const siteConfig = {
  name: "ガジェットラボ",
  description:
    "在宅ワーク・旅行で役立つITガジェットを比較・レビュー。価格帯やシーン別に本当におすすめできる製品だけを紹介します。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "ja_JP",
  twitter: "",
};

export const NAV_LINKS = [
  { href: "/posts", label: "記事一覧" },
  { href: "/about", label: "運営者情報" },
  { href: "/contact", label: "お問い合わせ" },
];
