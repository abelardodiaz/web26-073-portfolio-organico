"use client";

import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() =>
        setTheme(theme === "editorial" ? "terminal" : "editorial")
      }
      aria-label="Cambiar tema visual"
      className="gap-1.5 font-mono text-xs text-muted-foreground"
    >
      {theme === "editorial" ? (
        <>
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          terminal
        </>
      ) : (
        <>
          <svg
            className="size-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 7V4h16v3" />
            <path d="M9 20h6" />
            <path d="M12 4v16" />
          </svg>
          editorial
        </>
      )}
    </Button>
  );
}
