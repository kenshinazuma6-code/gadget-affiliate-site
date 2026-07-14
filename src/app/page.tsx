import Link from "next/link";
import { getAllPostsMeta, getAllCategories } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { siteConfig } from "@/lib/site-config";

export default function HomePage() {
  const allPosts = getAllPostsMeta();
  const latestPosts = allPosts.slice(0, 6);
  const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 3);
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">{siteConfig.name}</h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          {siteConfig.description}
        </p>
      </section>

      <section className="mb-16 grid gap-4 sm:grid-cols-2">
        <Link
          href="/shindan"
          className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-8 text-center text-white transition hover:opacity-95 sm:items-start sm:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-100">
            6問でサクッと
          </p>
          <p className="mt-1 text-xl font-bold">
            ガジェットタイプ診断（簡易版）
          </p>
          <span className="mt-4 rounded-md bg-white px-5 py-2 text-sm font-semibold text-orange-600">
            診断してみる
          </span>
        </Link>
        <Link
          href="/shindan16"
          className="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 px-6 py-8 text-center text-white transition hover:opacity-95 sm:items-start sm:text-left"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
            全28問・本格版
          </p>
          <p className="mt-1 text-xl font-bold">
            16タイプ ガジェット性格診断
          </p>
          <span className="mt-4 rounded-md bg-white px-5 py-2 text-sm font-semibold text-slate-800">
            診断してみる
          </span>
        </Link>
      </section>

      {featuredPosts.length > 0 && (
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">特集記事</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section className="mb-16">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">新着記事</h2>
          <Link
            href="/posts"
            className="text-sm font-medium text-orange-600 hover:underline"
          >
            記事一覧を見る
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {categories.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">カテゴリ</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 transition hover:border-gray-400"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
