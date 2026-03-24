"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";

type Step = {
  num: string;
  bin?: string;
  title: string;
  desc: string;
  tag?: string;
};

export function Timeline({ steps }: { steps: Step[] }) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const stepEls = el.querySelectorAll("[data-tl-step]");
        stepEls.forEach((step, i) => {
          setTimeout(() => step.classList.add("active"), i * 500);
        });

        const lineFill = el.querySelector("[data-tl-line-fill]") as HTMLElement;
        const dots = el.querySelectorAll("[data-tl-dot]");
        if (lineFill && dots.length > 1) {
          const firstDot = dots[0] as HTMLElement;
          const lastDot = dots[dots.length - 1] as HTMLElement;
          setTimeout(() => {
            lineFill.style.height = `${lastDot.offsetTop - firstDot.offsetTop}px`;
          }, 200);
        }

        observer.unobserve(el);
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isTerminal = theme === "terminal";

  return (
    <div ref={containerRef} className="relative pl-14">
      {/* Background line */}
      <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-border" />
      {/* Animated fill line */}
      <div
        data-tl-line-fill
        className={`absolute left-[23px] top-6 w-0.5 h-0 rounded-sm transition-[height] duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isTerminal
            ? "bg-gradient-to-b from-primary to-emerald-400"
            : "bg-gradient-to-b from-primary to-orange-400"
        }`}
        style={{ zIndex: 1 }}
      />

      {steps.map((step, i) => (
        <div
          key={step.num}
          data-tl-step
          className={`relative ${i < steps.length - 1 ? "pb-12" : ""} [&.active_[data-tl-dot]]:border-primary [&.active_[data-tl-dot]]:text-primary [&.active_[data-tl-dot]]:shadow-[0_0_16px_var(--accent-glow)] [&.active_[data-tl-content]]:opacity-100 [&.active_[data-tl-content]]:translate-y-0`}
        >
          {/* Dot */}
          <div
            data-tl-dot
            className={`absolute -left-[41px] top-0 z-2 flex size-6 items-center justify-center rounded-full border-2 border-border bg-background text-[11px] font-bold text-muted-foreground transition-all duration-600 ${
              isTerminal ? "font-mono" : ""
            }`}
          >
            {step.num}
          </div>

          {/* Content */}
          <div
            data-tl-content
            className="translate-y-3 opacity-0 transition-all duration-600"
          >
            <h3
              className={`mb-1.5 font-semibold ${
                isTerminal ? "font-mono text-sm" : "text-base"
              }`}
            >
              {isTerminal ? `$ ${step.title.toLowerCase().replace(/ /g, "_")}` : step.title}
            </h3>
            <p
              className={`leading-relaxed text-muted-foreground ${
                isTerminal ? "font-mono text-[12px]" : "text-[13px]"
              }`}
            >
              {step.desc}
            </p>
            {step.tag && (
              <span
                className={`mt-2.5 inline-block rounded-md bg-primary/8 px-2.5 py-1 text-[11px] font-semibold text-primary ${
                  isTerminal ? "font-mono rounded" : ""
                }`}
              >
                {isTerminal ? step.tag.toLowerCase().replace(/ /g, "_") : step.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
