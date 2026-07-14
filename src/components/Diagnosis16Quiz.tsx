"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  diagnosis16Questions,
  computeDiagnosis16Result,
  type Letter,
} from "@/lib/diagnosis16";

export default function Diagnosis16Quiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<Letter, number>>>({});

  const question = diagnosis16Questions[step];
  const progress = Math.round((step / diagnosis16Questions.length) * 100);

  function handleSelect(letter: Letter) {
    const nextScores = { ...scores, [letter]: (scores[letter] ?? 0) + 1 };

    if (step + 1 < diagnosis16Questions.length) {
      setScores(nextScores);
      setStep(step + 1);
    } else {
      const result = computeDiagnosis16Result(nextScores);
      router.push(`/shindan16/result/${result}`);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
        <span>
          質問 {step + 1} / {diagnosis16Questions.length}
        </span>
        <Link
          href="/posts"
          className="underline underline-offset-2 hover:text-gray-700"
        >
          記事を見る
        </Link>
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-orange-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        {question.question}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleSelect(option.letter)}
            className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-left text-gray-800 transition hover:border-orange-400 hover:bg-orange-50"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
