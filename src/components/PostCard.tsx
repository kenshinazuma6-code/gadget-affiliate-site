import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-sm"
    >
      <span className="text-xs font-semibold text-orange-600">
        {post.category}
      </span>
      <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
      <p className="line-clamp-2 text-sm text-gray-600">{post.description}</p>
      <time className="text-xs text-gray-400" dateTime={post.date}>
        {post.date}
      </time>
    </Link>
  );
}
