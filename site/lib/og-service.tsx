import { ImageResponse } from "next/og";
import { loadInterSemiBold } from "@/lib/og-fonts";

// Render compartido para los banners OG de las paginas de servicio.
// Mantiene la marca consistente (fondo oscuro + barra de acento + glow)
// y solo varia el texto por ruta.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type ServiceOg = {
  label: string;
  title: string;
  subtitle: string;
  tag: string;
};

export async function renderServiceOg({ label, title, subtitle, tag }: ServiceOg) {
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
        {/* Glow para profundidad */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(249,115,22,0.18), rgba(249,115,22,0) 70%)",
          }}
        />
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
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
              alignSelf: "flex-start",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#a1a1aa",
              maxWidth: "880px",
              lineHeight: 1.3,
            }}
          >
            {subtitle}
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
          <div style={{ fontSize: 20, color: "#f97316", fontWeight: 600 }}>
            {tag}
          </div>
          <div style={{ fontSize: 16, color: "#71717a" }}>abelardodiaz.dev</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Inter", data: fontData, style: "normal", weight: 600 }],
    }
  );
}
