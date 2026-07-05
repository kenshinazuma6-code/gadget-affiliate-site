import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "@/lib/markdown";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  ogImage?: string;
  featured?: boolean;
}

export interface Post extends PostMeta {
  html: string;
}

function readPostFile(slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updatedAt: data.updatedAt,
      category: data.category,
      tags: data.tags ?? [],
      ogImage: data.ogImage,
      featured: data.featured ?? false,
    },
    content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPostsMeta(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => readPostFile(slug).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const { meta, content } = readPostFile(slug);
  const html = await markdownToHtml(content);
  return { ...meta, html };
}

export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPostsMeta().map((post) => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(getAllPostsMeta().flatMap((post) => post.tags)));
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPostsMeta().filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPostsMeta().filter((post) => post.tags.includes(tag));
}
