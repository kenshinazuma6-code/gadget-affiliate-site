import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのお問い合わせページです。`,
};

export default function ContactPage() {
  return (
    <div className="prose prose-gray mx-auto max-w-3xl px-4 py-12">
      <h1>お問い合わせ</h1>
      <p>
        当サイトに関するご質問・ご指摘・掲載依頼等がございましたら、以下のメールアドレスまでご連絡ください。
      </p>
      <p>
        <a href="mailto:contact@example.com">contact@example.com</a>
        <br />
        <span className="text-sm text-gray-500">
          （メールアドレスは仮のものです。実際の連絡先に変更してください）
        </span>
      </p>
    </div>
  );
}
