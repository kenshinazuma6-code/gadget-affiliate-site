import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bigFiveResults, type BigFiveTypeId } from "@/lib/bigfive";
import { getAllPostsMeta } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

function isValidType(type: string): type is BigFiveTypeId {
  return type in bigFiveResults;
}

export function generateStaticParams() {
  return Object.keys(bigFiveResults).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  if (!isValidType(type)) return {};
  const result = bigFiveResults[type];

  return {
    title: { absolute: `診断結果：${result.title}｜じぶん取扱説明書` },
    description: result.tagline,
    openGraph: {
      title: `診断結果：${result.title}｜じぶん取扱説明書`,
      description: result.tagline,
      siteName: "じぶん取扱説明書",
    },
  };
}

export default async function ManualResultPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!isValidType(type)) notFound();

  const result = bigFiveResults[type];
  const allPosts = getAllPostsMeta();
  const relatedPosts = result.relatedPostSlugs
    .map((slug) => allPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const shareUrl = `${siteConfig.url}/manual/result/${result.id}`;
  const shareText = `私は「${result.title}」タイプでした！ #じぶん取扱説明書`;
  const shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="min-h-full bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-900 px-4 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-indigo-300">診断結果</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{result.title}</h1>
        <p className="mt-2 text-lg text-indigo-100">{result.tagline}</p>
        <p className="mx-auto mt-6 max-w-xl text-left text-indigo-50">
          {result.description}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-left text-sm text-indigo-300/80">
          {result.evidence}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={shareHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-50"
          >
            結果をXでシェアする
          </a>
          <Link
            href="/manual"
            className="rounded-md border border-indigo-300/40 px-5 py-2.5 text-sm font-semibold text-indigo-100 transition hover:border-indigo-200"
          >
            もう一度診断する
          </Link>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <Link
              href={siteConfig.url}
              className="block rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-left text-white shadow-lg transition hover:opacity-95"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-100">
                あなたにおすすめ
              </p>
              <p className="mt-1 text-xl font-bold">
                「{result.title}」タイプに合うガジェットは「{siteConfig.name}」で紹介中
              </p>
              <p className="mt-2 text-sm text-orange-50">
                {relatedPosts.map((post) => post.title).join(" / ")}
              </p>
              <span className="mt-4 inline-block rounded-md bg-white px-5 py-2 text-sm font-semibold text-orange-600">
                {siteConfig.name}を見にいく
              </span>
            </Link>
          </div>
        )}

        <p className="mt-10 text-xs leading-relaxed text-indigo-300/70">
          本診断はBig Five理論を参考に独自に作成したエンタメ企画であり、学術的に検証された正式な心理検査ではありません。
        </p>
      </div>
    </div>
  );
}
