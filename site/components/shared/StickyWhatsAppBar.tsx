"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function StickyWhatsAppBar({
  href,
  price,
  note,
  label = "Agendar",
}: {
  href: string;
  price: string;
  note: string;
  label?: string;
}) {
  const [visible, setVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px 0px -8px 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 sm:hidden transition-transform duration-300 ${
        visible && !footerVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="editorial:font-sans terminal:font-mono text-sm font-bold text-primary">
              {price}
            </p>
            <p className="truncate text-[11px] text-muted-foreground">
              {note}
            </p>
          </div>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial:rounded-lg terminal:rounded-md terminal:font-mono inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            <WhatsAppIcon className="size-4" />
            {label}
          </a>
        </div>
      </div>
    </div>
  );
}
