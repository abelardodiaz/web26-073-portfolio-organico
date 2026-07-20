"use client";

import { useEffect } from "react";

export function ForceLightMode() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    return () => {
      if ((localStorage.getItem("site-mode") || "dark") === "dark") {
        document.documentElement.classList.add("dark");
      }
    };
  }, []);

  // Inline script: evita el flash oscuro en carga directa (corre antes de hidratar)
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.classList.remove("dark");`,
      }}
    />
  );
}
