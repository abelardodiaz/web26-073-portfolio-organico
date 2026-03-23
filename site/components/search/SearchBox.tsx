"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { SearchItem } from "@/lib/search";

type Props = {
  items: SearchItem[];
  popularStacks?: string[];
};

function matchesQuery(item: SearchItem, q: string): boolean {
  const lower = q.toLowerCase();
  return (
    item.title.toLowerCase().includes(lower) ||
    item.category.toLowerCase().includes(lower) ||
    item.stack.some((s) => s.toLowerCase().includes(lower)) ||
    item.excerpt.toLowerCase().includes(lower)
  );
}

export function SearchBox({ items, popularStacks = [] }: Props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];
    return items.filter((item) => matchesQuery(item, q));
  }, [query, items]);

  const projects = results.filter((r) => r.type === "project");
  const tils = results.filter((r) => r.type === "til");
  const hasResults = results.length > 0;
  const hasQuery = query.trim().length > 0;

  return (
    <div>
      {/* ── Editorial input ── */}
      <div className="hidden editorial:block">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por titulo, stack, categoria..."
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
          autoFocus
        />
      </div>

      {/* ── Terminal input ── */}
      <div className="hidden terminal:block">
        <div className="flex items-center gap-2 rounded border border-border bg-background px-3 py-2.5">
          <span className="shrink-0 font-mono text-xs text-primary">grep</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="patron..."
            className="w-full bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none"
            autoFocus
          />
        </div>
      </div>

      {/* ── Stack suggestions (when idle) ── */}
      {!hasQuery && popularStacks.length > 0 && (
        <div className="mt-6">
          <div className="hidden editorial:block">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
              Filtrar por stack
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {popularStacks.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden terminal:block">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)]">
              stack:
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {popularStacks.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setQuery(s)}
                  className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Results ── */}
      {hasQuery && (
        <div className="mt-6">
          {!hasResults && (
            <>
              <p className="hidden editorial:block text-sm text-muted-foreground">
                Sin resultados para &quot;{query.trim()}&quot;
              </p>
              <p className="hidden terminal:block font-mono text-xs text-muted-foreground">
                0 matches for &quot;{query.trim()}&quot;
              </p>
            </>
          )}

          {/* Projects group */}
          {projects.length > 0 && (
            <ResultGroup
              label="Proyectos"
              terminalLabel="projects"
              items={projects}
            />
          )}

          {/* TILs group */}
          {tils.length > 0 && (
            <ResultGroup
              label="TIL"
              terminalLabel="til"
              items={tils}
              className={projects.length > 0 ? "mt-6" : undefined}
            />
          )}

          {hasResults && (
            <>
              <p className="hidden editorial:block mt-4 text-xs text-muted-foreground">
                {results.length} resultado{results.length !== 1 && "s"}
              </p>
              <p className="hidden terminal:block mt-4 font-mono text-[11px] text-muted-foreground">
                -- {results.length} match{results.length !== 1 && "es"} --
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ResultGroup({
  label,
  terminalLabel,
  items,
  className,
}: {
  label: string;
  terminalLabel: string;
  items: SearchItem[];
  className?: string;
}) {
  return (
    <div className={className}>
      {/* Editorial group header */}
      <h2 className="hidden editorial:block mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--fg-subtle)]">
        {label}
      </h2>
      {/* Terminal group header */}
      <div className="hidden terminal:flex items-center gap-3 mb-3">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--fg-subtle)]">
          // {terminalLabel}
        </span>
        <span className="flex-1 h-px bg-border" />
      </div>

      {/* Editorial results */}
      <ul className="hidden editorial:block">
        {items.map((item) => (
          <li
            key={`${item.type}-${item.slug}`}
            className="border-b border-border last:border-b-0"
          >
            <Link
              href={item.href}
              className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
            >
              <span className="text-[15px] font-medium transition-colors group-hover:text-primary">
                {item.title}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs uppercase text-primary">
                  {item.category}
                </span>
                {item.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Terminal results */}
      <ul className="hidden terminal:block">
        {items.map((item) => (
          <li
            key={`${item.type}-${item.slug}`}
            className="group border-t border-border first:border-t-0"
          >
            <Link
              href={item.href}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2.5"
            >
              <span className="size-1.5 shrink-0 rounded-full bg-border transition-colors group-hover:bg-primary" />
              <span className="flex-1 text-sm font-medium transition-colors group-hover:text-primary">
                {item.title}
              </span>
              <span className="flex shrink-0 items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs uppercase text-primary">
                  {item.category}
                </span>
                {item.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
