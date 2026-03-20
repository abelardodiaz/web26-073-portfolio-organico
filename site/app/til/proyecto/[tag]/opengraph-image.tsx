import { ImageResponse } from "next/og";
import { getAllTils, getAllTilProjects } from "@/lib/content";
import { loadInterSemiBold } from "@/lib/og-fonts";

export const alt = "TIL - Proyecto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllTilProjects().map((tag) => ({ tag }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const count = getAllTils().filter((t) => t.project === tag).length;

  if (count === 0) {
    return new ImageResponse(
      <div style={{ display: "flex" }}>Not found</div>,
      { ...size }
    );
  }

  const fontData = await loadInterSemiBold();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: "60px",
          fontFamily: "Inter",
          borderTop: "6px solid #f97316",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div
            style={{ display: "flex", gap: "16px", alignItems: "center" }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                color: "#0a0a0a",
                backgroundColor: "#f97316",
                padding: "6px 14px",
                borderRadius: "4px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
              }}
            >
              TIL
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 16,
                color: "#f97316",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              PROYECTO
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {tag}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 18, color: "#71717a" }}>
            {`${count} entradas`}
          </div>
          <div style={{ display: "flex", fontSize: 14, color: "#71717a" }}>
            abelardodiaz.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: fontData, style: "normal", weight: 600 },
      ],
    }
  );
}
