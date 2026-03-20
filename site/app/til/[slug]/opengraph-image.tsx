import { ImageResponse } from "next/og";
import { getTilBySlug } from "@/lib/content";
import { loadInterSemiBold } from "@/lib/og-fonts";

export const alt = "TIL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const til = getTilBySlug(params.slug);
  if (!til) {
    return new ImageResponse(<div>Not found</div>, { ...size });
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
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #f97316, #ea580c)",
          }}
        />
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
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
                fontSize: 16,
                color: "#f97316",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {til.category}
            </div>
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {til.title}
          </div>
        </div>
        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 18, color: "#71717a" }}>{til.date}</div>
          <div style={{ fontSize: 14, color: "#71717a" }}>
            abelardodiaz.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Inter", data: fontData, style: "normal", weight: 600 }],
    }
  );
}
