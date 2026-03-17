import Link from "next/link";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

const navItems = [
  { href: "/projects", label: "Proyectos" },
  { href: "/til", label: "TIL" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          abelardo<span className="text-muted-foreground">.dev</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="sm:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
