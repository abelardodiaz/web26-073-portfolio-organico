"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Wraps children and adds `in-view` class when element enters viewport.
 * Touch devices only (pointer: coarse). Desktop keeps hover.
 * Uses Intersection Observer (zero scroll listeners, zero dependencies).
 */
export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const el = ref.current;
      if (!el || !entry.isIntersecting) return;
      if (el.classList.contains("in-view")) return;

      el.classList.add("in-view");

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        el.classList.remove("in-view");
      }, 2000);
    },
    []
  );

  useEffect(() => {
    const el = ref.current;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch || !el) return;

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin: "0px 0px -50px 0px",
    });

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [threshold, handleIntersect]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
