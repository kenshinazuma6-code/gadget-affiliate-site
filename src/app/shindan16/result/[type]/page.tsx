import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { diagnosis16Results, type TypeCode16 } from "@/lib/diagnosis16";
import { getAllPostsMeta } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { siteConfig } from "@/lib/site-config";

function isValidType(type: string): type is TypeCode16 {
  return type in diagnosis16Results;
}

export function generateStaticParams() {
  return Object.keys(diagnosis16Results).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  if (!isValidType(type)) return {};
  const result = diagnosis16Results[type];

  return {
    title: `診断結果：${result.id}「${result.title}」`,
    description: result.tagline,
    openGraph: {
      title: `診断結果：${result.id}「${result.title}」`,
      description: result.tagline,
    },
  };
}

export default async function Shindan16ResultPage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!isValidType(type)) notFound();

  const result = diagnosis16Results[type];
  const allPosts = getAllPostsMeta();
  const relatedPosts = result.relatedPostSlugs
    .map((slug) => allPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const shareUrl = `${siteConfig.url}/shindan16/result/${result.id}`;
  const shareText = `私は「${result.id} ${result.title}」タイプでした！ #${siteConfig.name}診断`;
  const shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}&url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <p className="text-sm font-semibold text-orange-600">
        診断結果 ／ {result.group}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        {result.id}「{result.title}」
      </h1>
      <p className="mt-2 text-lg text-gray-600">{result.tagline}</p>
      <p className="mx-auto mt-6 max-w-xl text-left text-gray-700">
        {result.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href={shareHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          結果をXでシェアする
        </a>
        <Link
          href="/shindan16"
          className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-gray-400"
        >
          もう一度診断する
        </Link>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        もっと手軽な
        <Link href="/shindan" className="mx-1 text-orange-600 underline underline-offset-2">
          6問の簡易診断
        </Link>
        もあります。
      </p>

      {relatedPosts.length > 0 && (
        <div className="mt-16 text-left">
          <h2 className="mb-4 text-center text-xl font-bold text-gray-900">
            あなたにおすすめの記事
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
