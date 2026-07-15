import { ImageResponse } from "next/og";
import { bigFiveResults, type BigFiveTypeId } from "@/lib/bigfive";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return Object.keys(bigFiveResults).map((type) => ({ type }));
}

function isValidType(type: string): type is BigFiveTypeId {
  return type in bigFiveResults;
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const result = isValidType(type) ? bigFiveResults[type] : undefined;

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
          background: "linear-gradient(135deg, #312e81, #1e1b4b)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 26, color: "#a5b4fc" }}>
          じぶん取扱説明書 ／ 診断結果
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, marginTop: 20 }}>
          {result?.title ?? "じぶん取扱説明書"}
        </div>
        {result && (
          <div style={{ fontSize: 30, marginTop: 24, color: "#c7d2fe" }}>
            {result.tagline}
          </div>
        )}
        <div style={{ fontSize: 24, marginTop: 48, color: "#a5b4fc" }}>
          Big Five理論にもとづく性格診断
        </div>
      </div>
    ),
    { ...size },
  );
}
