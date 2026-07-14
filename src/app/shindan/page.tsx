import type { Metadata } from "next";
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
      </div>
      <DiagnosisQuiz />
    </div>
  );
}
