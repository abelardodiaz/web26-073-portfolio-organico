"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "@/components/shared/ThemeProvider";
import { ThemeSelector } from "@/components/shared/ThemeSelector";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const editorialNav = [
  { href: "/projects", label: "Proyectos" },
  { href: "/til", label: "TIL" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contacto" },
];

const terminalNav = [
  { href: "/projects", label: "/proyectos" },
  { href: "/til", label: "/til" },
  { href: "/about", label: "/about" },
  { href: "/contact", label: "/contacto" },
];

export function Header() {
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = theme === "editorial" ? editorialNav : terminalNav;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="shrink-0">
          {theme === "editorial" ? (
            <span className="text-base font-bold tracking-tight">
              abelardodiaz<span className="text-primary">.dev</span>
            </span>
          ) : (
            <span className="font-mono text-sm font-semibold">
              <span className="text-primary">~$</span> abelardodiaz.dev
              <span className="text-primary animate-blink">_</span>
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navegacion principal" className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                theme === "editorial"
                  ? "px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  : "rounded-md px-2.5 py-1.5 font-mono text-xs font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
              }
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-border pl-3">
            <ThemeSelector />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeSelector />
          <ThemeToggle />
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
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
