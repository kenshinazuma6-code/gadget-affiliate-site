import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta, getAllCategories, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "ITガジェットの比較・レビュー記事の一覧です。",
};

export default function PostsPage() {
  const posts = getAllPostsMeta();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">記事一覧</h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category}`}
            className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:border-gray-400"
          >
            {category}
          </Link>
        ))}
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tag/${tag}`}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200"
          >
            #{tag}
          </Link>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
