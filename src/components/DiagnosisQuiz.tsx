"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  diagnosisQuestions,
  computeDiagnosisResult,
  type DiagnosisTypeId,
} from "@/lib/diagnosis";

export default function DiagnosisQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Partial<Record<DiagnosisTypeId, number>>>(
    {},
  );

  const question = diagnosisQuestions[step];

  function handleSelect(optionScores: Partial<Record<DiagnosisTypeId, number>>) {
    const nextScores = { ...scores };
    for (const [id, value] of Object.entries(optionScores)) {
      const key = id as DiagnosisTypeId;
      nextScores[key] = (nextScores[key] ?? 0) + (value ?? 0);
    }

    if (step + 1 < diagnosisQuestions.length) {
      setScores(nextScores);
      setStep(step + 1);
    } else {
      const result = computeDiagnosisResult(nextScores);
      router.push(`/shindan/result/${result}`);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
        <span>
          質問 {step + 1} / {diagnosisQuestions.length}
        </span>
        <Link
          href="/posts"
          className="underline underline-offset-2 hover:text-gray-700"
        >
          記事を見る
        </Link>
      </div>
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        {question.question}
      </h2>
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.label}
            onClick={() => handleSelect(option.scores)}
            className="rounded-lg border border-gray-200 bg-white px-5 py-4 text-left text-gray-800 transition hover:border-orange-400 hover:bg-orange-50"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
