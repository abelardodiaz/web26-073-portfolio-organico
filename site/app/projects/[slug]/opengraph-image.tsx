import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/content";
import { loadInterSemiBold } from "@/lib/og-fonts";

export const alt = "Project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return new ImageResponse(<div>Not found</div>, { ...size });
  }

  const fontData = await loadInterSemiBold();
  const stackDisplay = project.stack.slice(0, 6);

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
          <div
            style={{
              fontSize: 16,
              color: "#f97316",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Proyecto
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a1a1aa",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            {project.description}
          </div>
        </div>
        {/* Stack tags */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {stackDisplay.map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: 16,
                color: "#d4d4d8",
                backgroundColor: "#27272a",
                padding: "8px 16px",
                borderRadius: "6px",
              }}
            >
              {tech}
            </div>
          ))}
          <div
            style={{
              fontSize: 14,
              color: "#71717a",
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
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
