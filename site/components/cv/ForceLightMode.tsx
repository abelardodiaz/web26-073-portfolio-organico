"use client";

import { useEffect } from "react";

export function ForceLightMode() {
  useEffect(() => {
    const html = document.documentElement;
    html.dataset.forceLight = "1";
    html.classList.remove("dark");
    return () => {
      delete html.dataset.forceLight;
      if ((localStorage.getItem("site-mode") || "dark") === "dark") {
        html.classList.add("dark");
      }
    };
  }, []);

  // Inline script: evita el flash oscuro en carga directa (corre antes de hidratar).
  // El data-force-light le avisa al ThemeProvider que no re-aplique "dark" al hidratar.
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.dataset.forceLight="1";document.documentElement.classList.remove("dark");`,
      }}
    />
  );
}
