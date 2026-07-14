import type { Metadata } from "next";
import Link from "next/link";
import Diagnosis16Quiz from "@/components/Diagnosis16Quiz";

export const metadata: Metadata = {
  title: "【16タイプ】ガジェット性格診断",
  description:
    "28の質問に答えるだけで、あなたの性格タイプと相性のいいガジェット選びがわかる本格診断です。",
};

export default function Shindan16Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold text-orange-600">
          本格版・全28問
        </p>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">
          16タイプ ガジェット性格診断
        </h1>
        <p className="mt-2 text-gray-600">
          性格の4つの軸を診断して、あなたにぴったりのガジェットタイプを16通りに分類します。
        </p>
        <p className="mt-4 text-sm text-gray-500">
          もっと手軽に知りたい方は
          <Link href="/shindan" className="mx-1 text-orange-600 underline underline-offset-2">
            6問の簡易診断
          </Link>
          もあります。
        </p>
      </div>
      <Diagnosis16Quiz />
    </div>
  );
}
