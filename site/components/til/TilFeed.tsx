"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { TilEntry, TilTagSets } from "@/lib/content";

type ActiveFilter = { type: "category" | "project"; value: string };

type Props = {
  tils: TilEntry[];
  tagSets: TilTagSets;
  activeFilter?: ActiveFilter;
};

export function TilFeed({ tils, tagSets, activeFilter }: Props) {
  const [activeCategories, setActiveCategories] = useState<Set<string>>(
    new Set()
  );
  const [activeProjects, setActiveProjects] = useState<Set<string>>(
    new Set()
  );

  const filtered = useMemo(() => {
    return tils.filter((t) => {
      const catMatch =
        activeCategories.size === 0 || activeCategories.has(t.category);
      const projMatch =
        activeProjects.size === 0 ||
        (t.project != null && activeProjects.has(t.project));
      return catMatch && projMatch;
    });
  }, [tils, activeCategories, activeProjects]);

  const hasFilters = activeCategories.size > 0 || activeProjects.size > 0;

  function toggleCategory(cat: string) {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  function toggleProject(proj: string) {
    setActiveProjects((prev) => {
      const next = new Set(prev);
      if (next.has(proj)) next.delete(proj);
      else next.add(proj);
      return next;
    });
  }

  function clearFilters() {
    setActiveCategories(new Set());
    setActiveProjects(new Set());
  }

  /* Renders a category tag — either a <Link> (in filter pages) or a <button> (in /til) */
  function renderCategoryTag(cat: string, isTerminal: boolean) {
    const isActive =
      activeFilter?.type === "category" && activeFilter.value === cat;
    const isLinkMode = activeFilter?.type === "category";

    const baseClass = isTerminal
      ? "rounded px-2 py-0.5 font-mono text-[11px] transition-colors"
      : "rounded-full px-3 py-1 text-xs font-medium transition-colors";

    const activeClass =
      "bg-primary/15 text-primary border border-primary/30";
    const inactiveClass =
      "bg-secondary text-secondary-foreground border border-transparent";

    if (isLinkMode) {
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

    return (
      <button
        key={cat}
        onClick={() => toggleCategory(cat)}
        className={`${baseClass} ${activeCategories.has(cat) ? activeClass : inactiveClass}`}
      >
        {cat}
      </button>
    );
  }

  /* Renders a project tag — either a <Link> (in filter pages) or a <button> (in /til) */
  function renderProjectTag(proj: string, isTerminal: boolean) {
    const isActive =
      activeFilter?.type === "project" && activeFilter.value === proj;
    const isLinkMode = activeFilter?.type === "project";

    const baseClass = isTerminal
      ? "rounded px-2 py-0.5 font-mono text-[11px] transition-colors border"
      : "rounded-full px-3 py-1 text-xs font-medium transition-colors border";

    const activeClass =
      "border-border text-foreground ring-1 ring-primary/30";
    const inactiveClass = "border-border text-muted-foreground";

    if (isLinkMode) {
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
      <button
        key={proj}
        onClick={() => toggleProject(proj)}
        className={`${baseClass} ${activeProjects.has(proj) ? activeClass : inactiveClass}`}
      >
        {proj}
      </button>
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
          {activeFilter && (
            <Link
              href="/til"
              className="rounded-full px-3 py-1 text-xs font-medium transition-colors bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary"
            >
              Todos
            </Link>
          )}
          {tagSets.categories.map((cat) => renderCategoryTag(cat, false))}
        </div>
        {tagSets.projects.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
              Proyecto
            </span>
            {activeFilter && (
              <Link
                href="/til"
                className="rounded-full px-3 py-1 text-xs font-medium transition-colors border border-border text-muted-foreground hover:text-foreground"
              >
                Todos
              </Link>
            )}
            {tagSets.projects.map((proj) => renderProjectTag(proj, false))}
          </div>
        )}
        {hasFilters && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>
              {filtered.length} de {tils.length}
            </span>
            <button
              onClick={clearFilters}
              className="underline underline-offset-2 transition-colors hover:text-primary"
            >
              Limpiar
            </button>
          </div>
        )}
      </div>

      {/* ── Terminal tag bar ── */}
      <div className="hidden terminal:block mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
            cat:
          </span>
          {activeFilter && (
            <Link
              href="/til"
              className="rounded px-2 py-0.5 font-mono text-[11px] transition-colors bg-secondary text-secondary-foreground border border-transparent hover:bg-primary/10 hover:text-primary"
            >
              *
            </Link>
          )}
          {tagSets.categories.map((cat) => renderCategoryTag(cat, true))}
        </div>
        {tagSets.projects.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)] mr-1">
              proj:
            </span>
            {activeFilter && (
              <Link
                href="/til"
                className="rounded px-2 py-0.5 font-mono text-[11px] transition-colors border border-border text-muted-foreground hover:text-foreground"
              >
                *
              </Link>
            )}
            {tagSets.projects.map((proj) => renderProjectTag(proj, true))}
          </div>
        )}
        {hasFilters && (
          <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground">
            <span>
              {filtered.length}/{tils.length}
            </span>
            <button
              onClick={clearFilters}
              className="underline underline-offset-2 transition-colors hover:text-primary"
            >
              --clear
            </button>
          </div>
        )}
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          <span className="hidden editorial:inline">
            Ningun TIL coincide con los filtros seleccionados.
          </span>
          <span className="hidden terminal:inline font-mono text-sm">
            0 results. Try --clear to reset filters.
          </span>
        </p>
      )}

      {/* ── Editorial feed ── */}
      {filtered.length > 0 && (
        <ul className="hidden editorial:block">
          {filtered.map((til) => (
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
      {filtered.length > 0 && (
        <ul className="hidden terminal:block">
          {filtered.map((til) => (
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
