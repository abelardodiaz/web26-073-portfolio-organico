"use client";

import { useEffect, useRef } from "react";

type Source = { abbr: string; name: string; year: string };

type TerminalLine =
  | { type: "comment"; text: string }
  | { type: "data"; key: string; highlight: string; text: string; src: string }
  | { type: "closing"; key: string; text: string; cursor?: boolean };

type SocialProofProps = {
  editorialQuote: React.ReactNode;
  sources: Source[];
  terminalLines: TerminalLine[];
};

export function SocialProof({
  editorialQuote,
  sources,
  terminalLines,
}: SocialProofProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="translate-y-5 opacity-0 transition-all duration-800 [&.visible]:translate-y-0 [&.visible]:opacity-100"
    >
      {/* Editorial */}
      <div className="hidden editorial:block">
        <div className="max-w-2xl rounded-xl border border-border bg-card p-8 sm:p-10">
          <span className="mb-2 block text-5xl leading-none text-primary/60">
            &ldquo;
          </span>
          <div className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {editorialQuote}
          </div>
          <div className="flex flex-wrap items-center gap-5 border-t border-border pt-5">
            <span className="text-[9px] font-semibold uppercase tracking-widest text-muted-foreground/40">
              fuentes verificadas
            </span>
            {sources.map((s) => (
              <div key={s.abbr} className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-md bg-secondary text-[10px] font-extrabold text-muted-foreground">
                  {s.abbr}
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground">{s.name}</p>
                  <p className="text-[10px] text-muted-foreground/50">
                    {s.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="hidden terminal:block">
        <div className="max-w-2xl rounded-lg border border-border bg-card p-6 font-mono sm:p-8">
          {terminalLines.map((line, i) => {
            if (line.type === "comment") {
              return (
                <p
                  key={i}
                  className="text-[13px] leading-[2] text-muted-foreground/50"
                >
                  {line.text}
                </p>
              );
            }
            if (line.type === "data") {
              return (
                <p key={i} className="text-[13px] leading-[2]">
                  <span className="text-primary">{line.key}:</span>{" "}
                  <span className="font-bold text-primary">
                    {line.highlight}
                  </span>{" "}
                  <span className="text-muted-foreground">{line.text}</span>{" "}
                  <span className="text-muted-foreground/40">{line.src}</span>
                </p>
              );
            }
            return (
              <p key={i} className="text-[13px] leading-[2]">
                <span className="text-primary">{line.key}:</span>{" "}
                <span className="text-muted-foreground">{line.text}</span>{" "}
                {line.cursor && (
                  <span className="animate-blink text-primary">_</span>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
