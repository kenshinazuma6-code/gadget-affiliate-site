import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // サンプルデータのプレースホルダー画像用。実際の商品画像を使う際は
      // 各ASPの画像ホストをここに追加してください（例: m.media-amazon.com,
      // thumbnail.image.rakuten.co.jp など）。
      { protocol: "https", hostname: "placehold.co" },
      // 多摩電子工業(tama's)の商品画像
      { protocol: "https", hostname: "shop.tamadenco.co.jp" },
      // SwitchBotの商品画像
      { protocol: "https", hostname: "cdn.shopify.com" },
      // Edifierの商品画像
      { protocol: "https", hostname: "www.edifier.jp" },
      // Amazonの商品画像
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
};

export default nextConfig;
