import { ImageResponse } from "next/og";

export const alt = "Abelardo Diaz - Full-Stack Developer & AI Agent Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(): Promise<ArrayBuffer> {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@600"
  ).then((r) => r.text());
  const url = css.match(/url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error("Font URL not found");
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0a0a0a",
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
            }}
          >
            abelardodiaz.dev
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a1a1aa",
              maxWidth: "700px",
              textAlign: "center",
            }}
          >
            Full-Stack Developer & AI Agent Architect
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#f97316",
              marginTop: "8px",
            }}
          >
            Patterns de produccion real
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
