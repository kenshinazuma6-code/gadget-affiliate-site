import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-gray-500">
        <p className="mb-4">
          本サイトはAmazonアソシエイト・楽天アフィリエイト等のアフィリエイトプログラムに参加し、
          商品リンクを通じて収益を得ることがあります。
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-gray-700">
            運営者情報
          </Link>
          <Link href="/privacy" className="hover:text-gray-700">
            プライバシーポリシー・免責事項
          </Link>
          <Link href="/contact" className="hover:text-gray-700">
            お問い合わせ
          </Link>
        </div>
        <p className="mt-4">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
