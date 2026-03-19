"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const labels = [
  "Full-Stack + AI Agents",
  "sistemas autonomos en produccion",
];

export function RotatingLabel() {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % labels.length);
        setVisible(true);
      }, 350);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (theme === "editorial") {
    return (
      <span
        className={`inline-block rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-primary transition-all duration-350 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1"
        }`}
      >
        {labels[index]}
      </span>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 font-mono text-sm text-primary transition-all duration-350 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-1"
      }`}
    >
      <span className="inline-block h-px w-6 bg-primary" />
      {labels[index]}
    </div>
  );
}
