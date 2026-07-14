import { ImageResponse } from "next/og";
import { diagnosis16Results, type TypeCode16 } from "@/lib/diagnosis16";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(diagnosis16Results).map((type) => ({ type }));
}

function isValidType(type: string): type is TypeCode16 {
  return type in diagnosis16Results;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const result = isValidType(type) ? diagnosis16Results[type] : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #f97316, #7c2d12)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 26, color: "#fed7aa" }}>
          {`16タイプ診断 ／ ${result?.group ?? ""}`}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginTop: 16 }}>
          {result?.id ?? siteConfig.name}
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, marginTop: 8 }}>
          {result?.title ?? ""}
        </div>
        {result && (
          <div style={{ fontSize: 28, marginTop: 24, color: "#fed7aa" }}>
            {result.tagline}
          </div>
        )}
        <div style={{ fontSize: 26, marginTop: 48 }}>{siteConfig.name}</div>
      </div>
    ),
    { ...size },
  );
}
