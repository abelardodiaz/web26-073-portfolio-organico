"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds `in-view` class when element enters viewport.
 * Uses Intersection Observer (zero scroll listeners, zero dependencies).
 * On desktop, hover animations still work alongside scroll trigger.
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
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
          setTimeout(() => setInView(false), 2000);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return (
    <div ref={ref} className={`${className} ${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}
