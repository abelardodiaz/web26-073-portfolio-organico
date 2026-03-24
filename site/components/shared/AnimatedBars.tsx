"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";

type Bar = {
  label: string;
  value: number;
  color: "primary" | "green" | "red" | "blue";
  source: string;
};

export function AnimatedBars({ bars }: { bars: Bar[] }) {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const fills = el.querySelectorAll("[data-bar-fill]");
        fills.forEach((fill, i) => {
          setTimeout(() => {
            (fill as HTMLElement).style.width =
              fill.getAttribute("data-bar-fill") + "%";
          }, i * 200);
        });

        observer.unobserve(el);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isTerminal = theme === "terminal";

  const colorMap = {
    primary: isTerminal
      ? "bg-gradient-to-r from-emerald-600 to-emerald-400"
      : "bg-gradient-to-r from-primary to-orange-400",
    green: "bg-gradient-to-r from-emerald-600 to-emerald-400",
    red: "bg-gradient-to-r from-red-600 to-red-400",
    blue: "bg-gradient-to-r from-blue-600 to-blue-400",
  };

  return (
    <div ref={ref} className="space-y-6">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="mb-2 flex items-baseline justify-between">
            <span
              className={`font-medium ${
                isTerminal ? "font-mono text-[13px]" : "text-sm"
              }`}
            >
              {bar.label}
            </span>
            <span
              className={`font-bold text-primary ${
                isTerminal ? "font-mono text-[13px]" : "text-sm"
              }`}
            >
              {bar.value}%
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div
              data-bar-fill={bar.value}
              className={`h-full w-0 rounded-full transition-[width] duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)] ${colorMap[bar.color]}`}
            />
          </div>
          <p
            className={`mt-1 text-muted-foreground/50 ${
              isTerminal ? "font-mono text-[10px]" : "text-[11px]"
            }`}
          >
            {bar.source}
          </p>
        </div>
      ))}
    </div>
  );
}
