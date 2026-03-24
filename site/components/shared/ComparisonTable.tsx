"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";

type CellType = "good" | "bad" | "meh" | "check" | "cross" | "dash";

type Row = {
  label: string;
  cells: { text: string; type: CellType }[];
};

type ComparisonTableProps = {
  headers: string[];
  winnerIndex: number;
  rows: Row[];
};

const cellStyles: Record<CellType, string> = {
  good: "font-semibold text-emerald-500",
  bad: "text-red-400",
  meh: "text-muted-foreground",
  check: "font-bold text-emerald-500",
  cross: "text-red-400",
  dash: "text-muted-foreground/40",
};

export function ComparisonTable({
  headers,
  winnerIndex,
  rows,
}: ComparisonTableProps) {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const trs = el.querySelectorAll("tbody tr");
        trs.forEach((tr, i) => {
          setTimeout(() => tr.classList.add("visible"), i * 100);
        });
        observer.unobserve(el);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isTerminal = theme === "terminal";

  return (
    <div
      ref={ref}
      className="-mx-4 overflow-x-auto px-4"
    >
      <div className="min-w-[600px] overflow-hidden rounded-xl border border-border shadow-[0_0_30px_var(--accent-glow,transparent)]">
        <table
          className={`w-full border-collapse ${
            isTerminal ? "font-mono text-[12px]" : "text-sm"
          }`}
        >
          <thead>
            <tr className="border-b border-border">
              <th
                className={`px-5 py-4 text-left font-medium text-muted-foreground ${
                  isTerminal ? "text-[11px] uppercase tracking-wider" : "text-[13px]"
                }`}
                style={{ width: 160 }}
              >
                <span
                  className="sm:hidden text-muted-foreground/40 text-[11px]"
                  style={{ animation: "swipeHint 5s ease-in-out forwards" }}
                >
                  desliza &rarr;
                </span>
              </th>
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={`px-5 py-4 text-left ${
                    i === winnerIndex
                      ? `font-bold text-primary bg-primary/5 ${
                          isTerminal ? "text-[11px] uppercase tracking-wider" : "text-[13px]"
                        }`
                      : `font-medium text-muted-foreground ${
                          isTerminal ? "text-[11px] uppercase tracking-wider" : "text-[13px]"
                        }`
                  }`}
                >
                  {h}
                  {i === winnerIndex && (
                    <span className="mt-1 block text-[9px] font-semibold uppercase tracking-widest text-primary/70">
                      Recomendado
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="translate-y-2.5 border-b border-border/50 opacity-0 transition-all duration-500 last:border-b-0 [&.visible]:translate-y-0 [&.visible]:opacity-100"
              >
                <td
                  className={`px-5 py-3.5 font-medium ${
                    isTerminal
                      ? "text-[12px] text-muted-foreground"
                      : "text-[13px]"
                  }`}
                >
                  {row.label}
                </td>
                {row.cells.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-5 py-3.5 ${cellStyles[cell.type]} ${
                      i === winnerIndex ? "bg-primary/5" : ""
                    }`}
                  >
                    {cell.text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
