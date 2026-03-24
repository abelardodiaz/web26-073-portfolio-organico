"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";

type Level = {
  title: string;
  terminalTitle: string;
  desc: string;
};

const levels: Level[] = [
  {
    title: "Te sugiere, tu decides",
    terminalTitle: "sugiere_tu_decides",
    desc: "El asistente prepara borradores o resumenes, analiza fuentes, metricas, datos complejos. Tu revisas antes de enviar.",
  },
  {
    title: "Responde con validaciones",
    terminalTitle: "responde_validado",
    desc: "Contesta a los usuarios con datos verificados de tu negocio y fuentes controladas.",
  },
  {
    title: "Actua, pero te pide permiso",
    terminalTitle: "actua_con_permiso",
    desc: "Agenda citas, produce cotizaciones, genera reportes -- pero tu confirmas antes.",
  },
  {
    title: "Trabaja solo dentro de reglas",
    terminalTitle: "autonomia_acotada",
    desc: "Ejecuta tareas automaticamente dentro de limites que tu defines.",
  },
];

const DOT_POSITIONS = [12, 37, 62, 87];
const DEFAULT_LEVEL = 1; // 0-indexed, levels 0+1 active by default

export function AutonomyMeter() {
  const { theme } = useTheme();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [fillWidth, setFillWidth] = useState(0);
  const [litCount, setLitCount] = useState(0);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [showPointer, setShowPointer] = useState(false);

  const isTerminal = theme === "terminal";

  // Scroll-triggered entrance animation
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || animated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setAnimated(true);
        observer.unobserve(el);

        // Staggered animation
        setTimeout(() => {
          setFillWidth(DOT_POSITIONS[0]);
          setLitCount(1);
          setVisibleCards((p) => { const n = [...p]; n[0] = true; return n; });
        }, 400);

        setTimeout(() => {
          setFillWidth(DOT_POSITIONS[1]);
          setTimeout(() => {
            setLitCount(2);
            setVisibleCards((p) => { const n = [...p]; n[1] = true; return n; });
          }, 300);
        }, 800);

        setTimeout(() => setShowPointer(true), 1200);
        setTimeout(() => setVisibleCards((p) => { const n = [...p]; n[2] = true; return n; }), 1400);
        setTimeout(() => setVisibleCards((p) => { const n = [...p]; n[3] = true; return n; }), 1600);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  const activateLevel = useCallback((idx: number) => {
    if (!animated) return;
    setHoverIdx(idx);
    setFillWidth(DOT_POSITIONS[idx]);
    setLitCount(idx + 1);
  }, [animated]);

  const resetLevel = useCallback(() => {
    setHoverIdx(null);
    setFillWidth(DOT_POSITIONS[DEFAULT_LEVEL]);
    setLitCount(DEFAULT_LEVEL + 1);
  }, []);

  // Bar interaction: find closest dot from mouse/touch position
  const handleBarInteraction = useCallback(
    (clientX: number) => {
      const el = wrapRef.current;
      if (!el || !animated) return;
      const track = el.querySelector("[data-track]") as HTMLElement;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const pct = ((clientX - rect.left) / rect.width) * 100;
      let closest = 0;
      let minDist = Infinity;
      for (let i = 0; i < DOT_POSITIONS.length; i++) {
        const dist = Math.abs(pct - DOT_POSITIONS[i]);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      }
      activateLevel(closest);
    },
    [animated, activateLevel]
  );

  const gradientClass = isTerminal
    ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400"
    : "bg-gradient-to-r from-primary via-orange-500 to-orange-400";

  const glowClass = isTerminal
    ? "shadow-[0_0_12px_rgba(16,185,129,0.3)]"
    : "shadow-[0_0_12px_rgba(234,88,12,0.3)]";

  const dotLitClass = isTerminal
    ? "border-emerald-500 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
    : "border-primary bg-primary shadow-[0_0_10px_rgba(234,88,12,0.4)]";

  const badgeText = isTerminal ? "$ start_here" : "Aqui empezamos contigo";

  return (
    <div ref={wrapRef}>
      {/* Meter track */}
      <div className="relative mb-8 px-[7px]">
        <div data-track className="relative h-1 rounded-full bg-border">
          {/* Fill */}
          <div
            className={`absolute left-0 top-0 h-full rounded-full transition-[width] duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] ${gradientClass} ${glowClass}`}
            style={{ width: `${fillWidth}%` }}
          />

          {/* Dots */}
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
            {DOT_POSITIONS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Nivel ${i + 1}`}
                onClick={() => {
                  activateLevel(i);
                  setTimeout(resetLevel, 2000);
                }}
                className={`size-4 rounded-full border-2 transition-all duration-500 cursor-pointer ${
                  i < litCount
                    ? dotLitClass
                    : "border-border bg-background"
                }`}
              />
            ))}
          </div>

          {/* Invisible hit zone */}
          <div
            className="absolute -top-3 left-0 right-0 h-8 z-10 cursor-pointer"
            onMouseMove={(e) => handleBarInteraction(e.clientX)}
            onMouseLeave={resetLevel}
            onTouchMove={(e) => {
              e.preventDefault();
              handleBarInteraction(e.touches[0].clientX);
            }}
            onTouchEnd={() => setTimeout(resetLevel, 1500)}
          />
        </div>

        {/* Pointer */}
        <div
          className={`absolute -top-7 transition-all duration-400 ${
            showPointer ? "opacity-100" : "opacity-0"
          } ${isTerminal ? "font-mono" : ""}`}
          style={{
            left: `${hoverIdx !== null ? DOT_POSITIONS[hoverIdx] : DOT_POSITIONS[DEFAULT_LEVEL]}%`,
            transform: "translateX(-50%)",
          }}
        >
          <span className="whitespace-nowrap text-[10px] font-bold text-primary">
            {isTerminal ? "$ start_here" : "Aqui empezamos"}
          </span>
          <div className="mx-auto size-0 border-x-4 border-t-4 border-x-transparent border-t-primary" />
        </div>
      </div>

      {/* Level cards */}
      <div className="grid gap-2.5 sm:grid-cols-4">
        {levels.map((level, i) => {
          const isActive = i <= DEFAULT_LEVEL;
          const isHighlighted = hoverIdx !== null && i <= hoverIdx;
          const isDimmed = !isActive && hoverIdx === null;

          return (
            <div
              key={i}
              onMouseEnter={() => activateLevel(i)}
              onMouseLeave={resetLevel}
              onTouchStart={() => activateLevel(i)}
              onTouchEnd={() => setTimeout(resetLevel, 1500)}
              className={`rounded-lg border p-3.5 transition-all duration-300 cursor-pointer ${
                isHighlighted
                  ? "border-primary/25 bg-primary/[0.04] opacity-100"
                  : isActive
                    ? "border-primary/20 bg-primary/[0.03] opacity-100"
                    : "border-transparent opacity-100"
              } ${isDimmed ? "!opacity-40" : ""} ${
                visibleCards[i]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2.5 !opacity-0"
              } hover:!opacity-100 hover:border-primary/30 hover:bg-primary/[0.05]`}
              style={{ transitionDelay: visibleCards[i] ? "0ms" : `${i * 100}ms` }}
            >
              <p
                className={`mb-1 text-[10px] font-bold tracking-wider text-primary ${
                  isTerminal ? "font-mono" : ""
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p
                className={`mb-1 font-semibold leading-tight ${
                  isTerminal ? "font-mono text-[12px]" : "text-[13px]"
                }`}
              >
                {isTerminal ? level.terminalTitle : level.title}
              </p>
              <p
                className={`leading-relaxed text-muted-foreground ${
                  isTerminal ? "font-mono text-[10px]" : "text-[11px]"
                }`}
              >
                {level.desc}
              </p>
              {i <= DEFAULT_LEVEL && (
                <span
                  className={`mt-1.5 inline-block rounded-full border border-primary px-2 py-0.5 text-[9px] font-bold text-primary ${
                    isTerminal ? "font-mono" : ""
                  }`}
                >
                  {badgeText}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
