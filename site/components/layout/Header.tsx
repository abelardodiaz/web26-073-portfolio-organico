"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { whatsappUrl, WHATSAPP_MSG_GENERAL } from "@/lib/whatsapp";

const navItems = [
  { href: "/projects/categoria/portfolio", editorial: "Proyectos", terminal: "/proyectos" },
  { href: "/til", editorial: "TIL", terminal: "/til" },
  { href: "/blog", editorial: "Blog", terminal: "/blog" },
  { href: "/servicios", editorial: "Servicios", terminal: "/servicios" },
  { href: "/about", editorial: "About", terminal: "/about" },
  { href: "/cv", editorial: "CV", terminal: "/cv" },
  { href: "/contact", editorial: "Contacto", terminal: "/contacto" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const waUrl = whatsappUrl(WHATSAPP_MSG_GENERAL);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="animate-wiggle inline-block shrink-0">
          <span className="hidden editorial:inline text-base font-bold tracking-tight">
            abelardodiaz<span className="text-primary">.dev</span>
          </span>
          <span className="hidden terminal:inline font-mono text-sm font-semibold">
            <span className="text-primary">~$</span> abelardodiaz.dev
            <span className="text-primary animate-blink">_</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegacion principal" className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground editorial:px-3 editorial:py-1.5 editorial:text-sm editorial:font-medium editorial:transition-colors editorial:hover:text-foreground terminal:rounded-md terminal:px-2.5 terminal:py-1.5 terminal:font-mono terminal:text-xs terminal:font-medium terminal:transition-all terminal:hover:bg-secondary terminal:hover:text-foreground"
            >
              <span className="hidden editorial:inline">{item.editorial}</span>
              <span className="hidden terminal:inline">{item.terminal}</span>
            </Link>
          ))}
          <Link
            href="/search"
            className="ml-1 rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Buscar"
          >
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 text-xs editorial:rounded-full editorial:bg-primary editorial:px-3.5 editorial:py-1.5 editorial:font-semibold editorial:text-primary-foreground editorial:transition-colors editorial:hover:bg-primary/85 terminal:rounded-md terminal:border terminal:border-primary terminal:bg-primary/10 terminal:px-3 terminal:py-1.5 terminal:font-mono terminal:font-medium terminal:text-primary terminal:transition-all terminal:hover:bg-primary/20 terminal:hover:shadow-[0_0_0_3px_var(--accent-glow)]"
          >
            <WhatsAppIcon className="size-3.5" />
            <span className="hidden editorial:inline">Hablemos</span>
            <span className="hidden terminal:inline">./whatsapp</span>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-1 rounded-md p-2 text-muted-foreground hover:text-foreground"
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav aria-label="Menu movil" className="border-t border-border px-4 pb-4 sm:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="hidden editorial:inline">{item.editorial}</span>
              <span className="hidden terminal:inline">{item.terminal}</span>
            </Link>
          ))}
          <Link
            href="/search"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <span className="hidden editorial:inline">Buscar</span>
            <span className="hidden terminal:inline">/buscar</span>
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            <WhatsAppIcon className="size-4" />
            <span className="hidden editorial:inline">Hablemos por WhatsApp</span>
            <span className="hidden terminal:inline">./whatsapp.sh</span>
          </a>
        </nav>
      )}
    </header>
  );
}
