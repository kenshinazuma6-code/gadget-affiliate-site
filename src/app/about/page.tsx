import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "運営者情報",
  description: `${siteConfig.name}の運営者情報です。`,
};

export default function AboutPage() {
  return (
    <div className="prose prose-gray mx-auto max-w-3xl px-4 py-12">
      <h1>運営者情報</h1>
      <p>
        当サイト「{siteConfig.name}」は、ITガジェットの比較・レビュー情報を発信するメディアです。
        実際の使用感やスペック比較をもとに、読者の製品選びに役立つ情報提供を目指しています。
      </p>
      <table>
        <tbody>
          <tr>
            <th>サイト名</th>
            <td>{siteConfig.name}</td>
          </tr>
          <tr>
            <th>運営者</th>
            <td>（運営者名を記載してください）</td>
          </tr>
          <tr>
            <th>連絡先</th>
            <td>
              お問い合わせページよりご連絡ください。
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
