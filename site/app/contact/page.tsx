import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto para proyectos de consultoria y colaboracion.",
};

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const contactLinks = [
  {
    href: "mailto:contacto@abelardodiaz.dev",
    label: "contacto@abelardodiaz.dev",
    icon: EmailIcon,
  },
  {
    href: "https://github.com/abelardodiaz",
    label: "github.com/abelardodiaz",
    icon: GitHubIcon,
  },
  {
    href: "https://x.com/abelardodiaz",
    label: "x.com/abelardodiaz",
    icon: XIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      {/* Editorial */}
      <div className="hidden editorial:block">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Contacto</h1>
        <p className="mb-8 text-muted-foreground">
          Para colaboraciones, consultoria o simplemente platicar sobre agentes
          autonomos y arquitectura multi-IA.
        </p>
        <div className="space-y-3 max-w-md">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-3.5 transition-all hover:border-primary hover:text-primary"
            >
              <link.icon className="size-5 shrink-0 text-muted-foreground" />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="hidden terminal:block">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
            // contacto
          </h1>
          <span className="flex-1 h-px bg-border" />
        </div>
        <p className="mb-8 text-sm text-muted-foreground">
          Para colaboraciones, consultoria o simplemente platicar sobre agentes
          autonomos y arquitectura multi-IA.
        </p>
        <div className="space-y-2 max-w-md">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 transition-all hover:border-primary hover:shadow-[0_0_0_3px_var(--accent-glow)]"
            >
              <link.icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <span className="font-mono text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
