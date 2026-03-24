"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds `in-view` class when element enters viewport.
 * Only activates on touch devices (no hover). On desktop, does nothing.
 * Uses Intersection Observer (zero scroll listeners, zero dependencies).
 */
export function ScrollReveal({
  children,
  className = "",
  threshold = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Only activate on touch devices (mobile)
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Reset after 2s so it can trigger again if user scrolls back
          setTimeout(() => setInView(false), 2000);
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`${className} ${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}
