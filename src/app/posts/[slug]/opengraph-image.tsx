import { ImageResponse } from "next/og";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  const title = post?.title ?? siteConfig.name;
  const category = post?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #1f2937, #111827)",
          color: "#ffffff",
        }}
      >
        {category && (
          <div style={{ fontSize: 28, color: "#fb923c", marginBottom: 16 }}>
            {category}
          </div>
        )}
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#d1d5db" }}>
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
