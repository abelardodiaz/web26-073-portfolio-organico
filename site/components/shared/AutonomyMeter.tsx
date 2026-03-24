"use client";

import { useState, useCallback, useRef } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";

const levels = [
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
const DEFAULT_LEVEL = 1; // 0-indexed: levels 0+1 active

export function AutonomyMeter() {
  const { theme } = useTheme();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(DEFAULT_LEVEL);
  const isTerminal = theme === "terminal";

  const activate = useCallback((idx: number) => {
    setActiveIdx(idx);
  }, []);

  const reset = useCallback(() => {
    setActiveIdx(DEFAULT_LEVEL);
  }, []);

  // Bar: find closest dot from pointer position
  const barInteraction = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
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
      activate(closest);
    },
    [activate]
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
    <div>
      {/* Meter track */}
      <div className="relative mb-8 px-[7px]">
        <div ref={trackRef} className="relative h-1 rounded-full bg-border">
          {/* Fill */}
          <div
            className={`absolute left-0 top-0 h-full rounded-full transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${gradientClass} ${glowClass}`}
            style={{ width: `${DOT_POSITIONS[activeIdx]}%` }}
          />

          {/* Dots */}
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
            {DOT_POSITIONS.map((_, i) => (
              <div
                key={i}
                role="button"
                tabIndex={0}
                aria-label={`Nivel ${i + 1}`}
                onClick={() => { activate(i); setTimeout(reset, 2000); }}
                onKeyDown={(e) => { if (e.key === "Enter") { activate(i); setTimeout(reset, 2000); } }}
                className={`size-4 rounded-full border-2 transition-all duration-500 cursor-pointer ${
                  i <= activeIdx ? dotLitClass : "border-border bg-background"
                }`}
              />
            ))}
          </div>

          {/* Hit zone for bar interaction */}
          <div
            className="absolute -top-3 left-0 right-0 h-8 z-10 cursor-pointer"
            onMouseMove={(e) => barInteraction(e.clientX)}
            onMouseLeave={reset}
            onTouchMove={(e) => {
              e.preventDefault();
              barInteraction(e.touches[0].clientX);
            }}
            onTouchEnd={() => setTimeout(reset, 1500)}
          />
        </div>

        {/* Pointer */}
        <div
          className={`absolute -top-7 transition-all duration-500 ${
            isTerminal ? "font-mono" : ""
          }`}
          style={{
            left: `${DOT_POSITIONS[activeIdx]}%`,
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
          const isLit = i <= activeIdx;
          const isDimmed = i > DEFAULT_LEVEL && i > activeIdx;

          return (
            <div
              key={i}
              onMouseEnter={() => activate(i)}
              onMouseLeave={reset}
              onTouchStart={() => activate(i)}
              onTouchEnd={() => setTimeout(reset, 1500)}
              className={`rounded-lg border p-3.5 transition-all duration-300 cursor-pointer ${
                isLit
                  ? "border-primary/25 bg-primary/[0.04]"
                  : "border-transparent"
              } ${isDimmed ? "opacity-40" : "opacity-100"} hover:opacity-100 hover:border-primary/30 hover:bg-primary/[0.05]`}
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
