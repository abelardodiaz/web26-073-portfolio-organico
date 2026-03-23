import Link from "next/link";
import type { TilEntry, TilTagSets } from "@/lib/content";

type ActiveFilter = { type: "project"; value: string };

type Props = {
  tils: TilEntry[];
  tagSets: TilTagSets;
  activeFilter?: ActiveFilter;
};

export function TilFeed({ tils, tagSets, activeFilter }: Props) {
  function renderProjectTag(proj: string, isTerminal: boolean) {
    const isActive =
      activeFilter?.type === "project" && activeFilter.value === proj;

    const baseClass = isTerminal
      ? "rounded px-2 py-0.5 font-mono text-[11px] transition-colors border"
      : "rounded-full px-3 py-1 text-xs font-medium transition-colors border";

    const activeClass =
      "border-border text-foreground ring-1 ring-primary/30";
    const inactiveClass = "border-border text-muted-foreground";

    if (isActive) {
      return (
        <span key={proj} className={`${baseClass} ${activeClass}`}>
          {proj}
        </span>
      );
    }
    return (
      <Link
        key={proj}
        href={`/til/proyecto/${proj}`}
        className={`${baseClass} ${inactiveClass} hover:text-foreground`}
      >
        {proj}
      </Link>
    );
  }

  return (
    <>
      {/* ── Editorial tag bar ── */}
      {tagSets.projects.length > 0 && (
        <div className="hidden editorial:flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            Proyecto
          </span>
          <Link
            href="/til"
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors border ${
              !activeFilter
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-secondary text-secondary-foreground border-transparent hover:bg-primary/10 hover:text-primary"
            }`}
          >
            Todos
          </Link>
          {tagSets.projects.map((proj) => renderProjectTag(proj, false))}
        </div>
      )}

      {/* ── Terminal tag bar ── */}
      {tagSets.projects.length > 0 && (
        <div className="hidden terminal:flex flex-wrap items-center gap-2 mb-8">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            proj:
          </span>
          <Link
            href="/til"
            className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors border ${
              !activeFilter
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-secondary text-secondary-foreground border-transparent hover:bg-primary/10 hover:text-primary"
            }`}
          >
            *
          </Link>
          {tagSets.projects.map((proj) => renderProjectTag(proj, true))}
        </div>
      )}

      {/* ── Editorial feed ── */}
      {tils.length > 0 && (
        <ul className="hidden editorial:block">
          {tils.map((til) => (
            <li
              key={til.slug}
              className="border-b border-border last:border-b-0"
            >
              <Link
                href={`/til/${til.slug}`}
                className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
              >
                <span className="text-[15px] font-medium transition-colors group-hover:text-primary">
                  {til.title}
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs uppercase text-primary">
                    {til.category}
                  </span>
                  {til.project && (
                    <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {til.project}
                    </span>
                  )}
                  <span className="font-mono text-xs text-[var(--fg-subtle)]">
                    {til.date}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* ── Terminal feed ── */}
      {tils.length > 0 && (
        <ul className="hidden terminal:block">
          {tils.map((til) => (
            <li
              key={til.slug}
              className="group border-t border-border first:border-t-0"
            >
              <Link
                href={`/til/${til.slug}`}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2.5"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-border transition-colors group-hover:bg-primary" />
                <span className="flex-1 text-sm font-medium transition-colors group-hover:text-primary">
                  {til.title}
                </span>
                <span className="flex shrink-0 items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs uppercase text-primary">
                    {til.category}
                  </span>
                  {til.project && (
                    <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {til.project}
                    </span>
                  )}
                  <span className="font-mono text-[11px] text-[var(--fg-subtle)]">
                    {til.date}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
