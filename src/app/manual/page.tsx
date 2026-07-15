import type { Metadata } from "next";
import Link from "next/link";
import BigFiveQuiz from "@/components/BigFiveQuiz";

export const metadata: Metadata = {
  title: { absolute: "じぶん取扱説明書｜心理学のBig Five理論でわかる性格診断" },
  description:
    "20の質問に答えるだけ。心理学のBig Five（ビッグファイブ）理論をベースにした、5つの軸であなたの性格傾向がわかる無料診断です。",
  openGraph: {
    title: "じぶん取扱説明書｜Big Five理論でわかる性格診断",
    description:
      "20の質問で、5つの軸からあなたの性格傾向がわかる無料診断。",
    siteName: "じぶん取扱説明書",
  },
};

export default function ManualPage() {
  return (
    <div className="min-h-full bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-900 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-300">
            全20問・約2分
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white">
            じぶん取扱説明書
          </h1>
          <p className="mt-3 text-indigo-100">
            心理学で研究されている「Big Five（ビッグファイブ）」理論をベースに、
            外向性・協調性・勤勉性・神経症傾向・開放性の5つの軸からあなたの性格傾向を診断します。
          </p>
        </div>

        <BigFiveQuiz />

        <div className="mx-auto mt-16 max-w-xl border-t border-indigo-300/20 pt-6 text-xs leading-relaxed text-indigo-300/70">
          <p className="mb-2">
            本診断は、Big Five理論（Goldberg, 1999；Gosling, Rentfrow, &amp; Swann,
            2003；Donnellan et al., 2006）を参考に独自に作成したエンタメ企画です。学術的に検証された正式な心理検査そのものではなく、診断結果によって性格や能力を断定するものではありません。
          </p>
          <p>
            参考：小塩真司『性格診断ブームを問う――心理学からの警鐘』（岩波ブックレット, 2025）
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/about" className="hover:text-indigo-200">
              運営者情報
            </Link>
            <Link href="/privacy" className="hover:text-indigo-200">
              プライバシーポリシー
            </Link>
            <Link href="/contact" className="hover:text-indigo-200">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
