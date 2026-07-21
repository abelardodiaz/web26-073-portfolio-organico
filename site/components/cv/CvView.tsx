import Link from "next/link";
import { cvData, type CvLocale } from "@/lib/cv-data";

function PrinterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 6 2 18 2 18 9" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <rect x="6" y="14" width="12" height="8" />
    </svg>
  );
}

export function CvView({ locale }: { locale: CvLocale }) {
  const cv = cvData[locale];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 print:max-w-none print:p-0">
      {/* Controls: language switch + print (hidden on print) */}
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link
          href={cv.labels.otherLocaleHref}
          className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {cv.labels.otherLocale}
        </Link>
        <a
          href={cv.labels.pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <PrinterIcon className="size-3.5" />
          {cv.labels.print}
        </a>
      </div>

      {/* Header */}
      <header>
        <h1 className="text-2xl font-bold tracking-tight">{cv.name}</h1>
        <p className="mt-0.5 text-muted-foreground">{cv.title}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
          <span>{cv.location}</span>
          <a href="mailto:contacto@abelardodiaz.dev" className="hover:text-primary">
            contacto@abelardodiaz.dev
          </a>
          <Link href="/" className="hover:text-primary">
            abelardodiaz.dev
          </Link>
          <a
            href="https://github.com/abelardodiaz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            github.com/abelardodiaz
          </a>
        </div>
      </header>

      {/* Profile */}
      <section className="mt-9">
        <h2 className="mb-3 border-b border-border pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {cv.labels.profile}
        </h2>
        <p className="text-sm leading-relaxed">{cv.summary}</p>
      </section>

      {/* Projects */}
      <section className="mt-9">
        <h2 className="mb-3 border-b border-border pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {cv.labels.projects}
        </h2>
        <div className="space-y-5">
          {cv.projects.map((p) => (
            <div key={p.name} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold">
                  {p.url ? (
                    <Link href={p.url} className="hover:text-primary">
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                  {p.note && (
                    <span className="ml-2 font-normal text-muted-foreground">{p.note}</span>
                  )}
                </h3>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {p.dates}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {p.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded border border-border bg-secondary px-1.5 py-px font-mono text-[10px] text-muted-foreground"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-9">
        <h2 className="mb-3 border-b border-border pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {cv.labels.experience}
        </h2>
        <div className="space-y-5">
          {cv.jobs.map((job) => (
            <div key={`${job.org}-${job.dates}`} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-sm font-bold">
                  {job.role} <span className="font-normal text-muted-foreground">-- {job.org}</span>
                </h3>
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {job.dates}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed">{job.summary}</p>
              {job.bullets && (
                <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-9">
        <h2 className="mb-3 border-b border-border pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {cv.labels.skills}
        </h2>
        <div className="grid grid-cols-[130px_1fr] gap-x-4 gap-y-2 text-sm">
          {cv.skills.map((s) => (
            <div key={s.category} className="contents">
              <div className="font-bold">{s.category}</div>
              <div className="text-muted-foreground">{s.keywords}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-9">
        <h2 className="mb-3 border-b border-border pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {cv.labels.certifications}
        </h2>
        <div className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {cv.certifications.map((c) => (
            <div key={c.name} className="flex items-baseline justify-between gap-3 text-sm">
              <span>{c.name}</span>
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                {c.issuer}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Education & languages */}
      <section className="mt-9">
        <h2 className="mb-3 border-b border-border pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {cv.labels.educationLanguages}
        </h2>
        <p className="text-sm leading-relaxed">{cv.education}</p>
        <p className="mt-2 text-sm text-muted-foreground">{cv.languagesLine}</p>
      </section>
    </div>
  );
}
