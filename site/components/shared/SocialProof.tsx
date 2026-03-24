"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";

const sources = [
  { abbr: "MK", name: "McKinsey", year: "2025" },
  { abbr: "HBR", name: "Harvard Business Review", year: "2025" },
];

export function SocialProof() {
  const { theme } = useTheme();
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
          <p className="mb-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Las empresas que implementan agentes de IA correctamente logran
            entre{" "}
            <strong className="font-semibold text-primary">
              20% y 60% mas productividad
            </strong>
            . Pero el{" "}
            <strong className="font-semibold text-primary">
              40% de los proyectos se cancelan
            </strong>{" "}
            por mala implementacion. La diferencia esta en como se hace. Yo lo
            hago bien.
          </p>
          <div className="flex flex-wrap gap-5 border-t border-border pt-5">
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
          <p className="text-[13px] leading-[2] text-muted-foreground/50">
            # fuentes verificadas
          </p>
          <p className="text-[13px] leading-[2]">
            <span className="text-primary">productividad:</span>{" "}
            <span className="font-bold text-primary">+20-60%</span>{" "}
            <span className="text-muted-foreground">
              con agentes IA bien implementados
            </span>{" "}
            <span className="text-muted-foreground/40">// McKinsey 2025</span>
          </p>
          <p className="text-[13px] leading-[2]">
            <span className="text-primary">cancelados:</span>{" "}
            <span className="font-bold text-primary">40%+</span>{" "}
            <span className="text-muted-foreground">
              de proyectos IA por mala ejecucion
            </span>{" "}
            <span className="text-muted-foreground/40">
              // HBR/Gartner 2025
            </span>
          </p>
          <p className="text-[13px] leading-[2] text-muted-foreground/50">
            # la diferencia esta en como se hace
          </p>
          <p className="text-[13px] leading-[2]">
            <span className="text-primary">implementacion:</span>{" "}
            <span className="text-muted-foreground">
              profesional, local, en SLP
            </span>{" "}
            <span className="animate-blink text-primary">_</span>
          </p>
        </div>
      </div>
    </div>
  );
}
