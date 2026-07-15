"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  bigFiveQuestions,
  computeBigFiveResult,
  LIKERT_LABELS,
} from "@/lib/bigfive";

export default function BigFiveQuiz() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = bigFiveQuestions[step];
  const progress = Math.round((step / bigFiveQuestions.length) * 100);

  function handleSelect(value: number) {
    const nextAnswers = [...answers, value];

    if (step + 1 < bigFiveQuestions.length) {
      setAnswers(nextAnswers);
      setStep(step + 1);
    } else {
      const result = computeBigFiveResult(nextAnswers);
      router.push(`/manual/result/${result}`);
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-2 text-sm text-indigo-200">
        質問 {step + 1} / {bigFiveQuestions.length}
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-indigo-900/40">
        <div
          className="h-full rounded-full bg-indigo-300 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <h2 className="mb-6 text-xl font-bold text-white">{question.text}</h2>
      <div className="flex flex-col gap-3">
        {LIKERT_LABELS.map((label, index) => (
          <button
            key={label}
            onClick={() => handleSelect(index + 1)}
            className="rounded-lg border border-indigo-300/30 bg-white/5 px-5 py-4 text-left text-indigo-50 transition hover:border-indigo-200 hover:bg-white/10"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
