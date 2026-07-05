import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // サンプルデータのプレースホルダー画像用。実際の商品画像を使う際は
      // 各ASPの画像ホストをここに追加してください（例: m.media-amazon.com,
      // thumbnail.image.rakuten.co.jp など）。
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
