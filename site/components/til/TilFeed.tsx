import Link from "next/link";
import type { TilEntry, TilTagSets } from "@/lib/content";

type ActiveFilter = { type: "category" | "project" | "stack"; value: string };

type Props = {
  tils: TilEntry[];
  tagSets: TilTagSets;
  activeFilter?: ActiveFilter;
};

export function TilFeed({ tils, tagSets, activeFilter }: Props) {
  function renderCategoryTag(cat: string, isTerminal: boolean) {
    const isActive =
      activeFilter?.type === "category" && activeFilter.value === cat;

    const baseClass = isTerminal
      ? "rounded px-2 py-0.5 font-mono text-[11px] transition-colors"
      : "rounded-full px-3 py-1 text-xs font-medium transition-colors";

    const activeClass =
      "bg-primary/15 text-primary border border-primary/30";
    const inactiveClass =
      "bg-secondary text-secondary-foreground border border-transparent";

    if (isActive) {
      return (
        <span key={cat} className={`${baseClass} ${activeClass}`}>
          {cat}
        </span>
      );
    }
    return (
      <Link
        key={cat}
        href={`/til/categoria/${cat}`}
        className={`${baseClass} ${inactiveClass} hover:bg-primary/10 hover:text-primary`}
      >
        {cat}
      </Link>
    );
  }

  function renderStackTag(stack: string, isTerminal: boolean) {
    const isActive =
      activeFilter?.type === "stack" && activeFilter.value === stack;

    const baseClass = isTerminal
      ? "rounded px-2 py-0.5 font-mono text-[11px] transition-colors border"
      : "rounded-full px-3 py-1 text-xs font-medium transition-colors border";

    const activeClass =
      "border-primary/30 text-primary bg-primary/10";
    const inactiveClass = "border-border text-muted-foreground";

    if (isActive) {
      return (
        <span key={stack} className={`${baseClass} ${activeClass}`}>
          {stack}
        </span>
      );
    }
    return (
      <Link
        key={stack}
        href={`/til/stack/${stack}`}
        className={`${baseClass} ${inactiveClass} hover:text-primary hover:border-primary/30`}
      >
        {stack}
      </Link>
    );
  }

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
      <div className="hidden editorial:block mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            Categoria
          </span>
          <Link
            href="/til"
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              !activeFilter
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary"
            }`}
          >
            Todos
          </Link>
          {tagSets.categories.map((cat) => renderCategoryTag(cat, false))}
        </div>
        {tagSets.projects.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
              Proyecto
            </span>
            <Link
              href="/til"
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors border ${
                !activeFilter
                  ? "border-border text-foreground ring-1 ring-primary/30"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </Link>
            {tagSets.projects.map((proj) => renderProjectTag(proj, false))}
          </div>
        )}
        {tagSets.stacks.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
              Stack
            </span>
            <Link
              href="/til"
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors border ${
                !activeFilter
                  ? "border-primary/30 text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              Todos
            </Link>
            {tagSets.stacks.map((s) => renderStackTag(s, false))}
          </div>
        )}
      </div>

      {/* ── Terminal tag bar ── */}
      <div className="hidden terminal:block mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            cat:
          </span>
          <Link
            href="/til"
            className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors ${
              !activeFilter
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary"
            }`}
          >
            *
          </Link>
          {tagSets.categories.map((cat) => renderCategoryTag(cat, true))}
        </div>
        {tagSets.projects.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
              proj:
            </span>
            <Link
              href="/til"
              className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors border ${
                !activeFilter
                  ? "border-border text-foreground ring-1 ring-primary/30"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              *
            </Link>
            {tagSets.projects.map((proj) => renderProjectTag(proj, true))}
          </div>
        )}
        {tagSets.stacks.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
              stack:
            </span>
            <Link
              href="/til"
              className={`rounded px-2 py-0.5 font-mono text-[11px] transition-colors border ${
                !activeFilter
                  ? "border-primary/30 text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary/30"
              }`}
            >
              *
            </Link>
            {tagSets.stacks.map((s) => renderStackTag(s, true))}
          </div>
        )}
      </div>

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
