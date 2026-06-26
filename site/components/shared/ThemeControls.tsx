"use client";

import dynamic from "next/dynamic";

const ThemeSelector = dynamic(
  () => import("@/components/shared/ThemeSelector").then((m) => ({ default: m.ThemeSelector })),
  { ssr: false }
);

const ThemeToggle = dynamic(
  () => import("@/components/shared/ThemeToggle").then((m) => ({ default: m.ThemeToggle })),
  { ssr: false }
);

export function ThemeControls() {
  return (
    <div className="flex items-center gap-1">
      <ThemeSelector />
      <ThemeToggle />
    </div>
  );
}
