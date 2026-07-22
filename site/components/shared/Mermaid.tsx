"use client";

import { useEffect, useId, useState } from "react";

type Props = {
  chart: string;
};

export function Mermaid({ chart }: Props) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    let cancelled = false;
    const isDark = document.documentElement.classList.contains("dark");

    import("mermaid").then(async ({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? "dark" : "neutral",
        securityLevel: "strict",
        fontFamily: "inherit",
      });
      try {
        const { svg } = await mermaid.render(`mermaid-${id}`, chart);
        if (!cancelled) setSvg(svg);
      } catch {
        // diagrama invalido: se muestra el texto fuente como fallback
      }
    });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (!svg) {
    return (
      <pre className="overflow-x-auto rounded-lg border border-border bg-card p-4 text-xs text-muted-foreground">
        {chart}
      </pre>
    );
  }

  return (
    <div
      className="mermaid-diagram my-6 flex justify-center overflow-x-auto rounded-lg border border-border bg-card p-4 [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
