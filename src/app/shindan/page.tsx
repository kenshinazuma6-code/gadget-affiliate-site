import type { Metadata } from "next";
import Link from "next/link";
import DiagnosisQuiz from "@/components/DiagnosisQuiz";

export const metadata: Metadata = {
  title: "あなたにぴったりのガジェットタイプ診断",
  description:
    "6つの質問に答えるだけで、あなたに合ったガジェット選びのタイプがわかる診断です。",
};

export default function ShindanPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          あなたにぴったりのガジェットタイプ診断
        </h1>
        <p className="mt-2 text-gray-600">
          6つの質問に答えるだけ。あなたに合ったガジェット選びのタイプがわかります。
        </p>
        <p className="mt-4 text-sm text-gray-500">
          もっと詳しく知りたい方は
          <Link href="/shindan16" className="mx-1 text-orange-600 underline underline-offset-2">
            全28問の16タイプ診断
          </Link>
          もあります。
        </p>
      </div>
      <DiagnosisQuiz />
    </div>
  );
}
