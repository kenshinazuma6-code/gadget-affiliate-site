import { ImageResponse } from "next/og";
import { diagnosisResults, type DiagnosisTypeId } from "@/lib/diagnosis";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(diagnosisResults).map((type) => ({ type }));
}

function isValidType(type: string): type is DiagnosisTypeId {
  return type in diagnosisResults;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const result = isValidType(type) ? diagnosisResults[type] : undefined;

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
        <div style={{ fontSize: 28, color: "#fed7aa" }}>診断結果</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 16 }}>
          {result?.title ?? siteConfig.name}
        </div>
        {result && (
          <div style={{ fontSize: 30, marginTop: 24, color: "#fed7aa" }}>
            {result.tagline}
          </div>
        )}
        <div style={{ fontSize: 26, marginTop: 48 }}>{siteConfig.name}</div>
      </div>
    ),
    { ...size },
  );
}
