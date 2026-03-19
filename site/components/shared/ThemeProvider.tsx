"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Theme = "editorial" | "terminal";
export type Mode = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  mode: Mode;
  setTheme: (t: Theme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeRaw] = useState<Theme>("editorial");
  const [mode, setModeRaw] = useState<Mode>("dark");

  useEffect(() => {
    const t = localStorage.getItem("site-theme");
    const m = localStorage.getItem("site-mode");
    if (t === "editorial" || t === "terminal") setThemeRaw(t);
    if (m === "light" || m === "dark") setModeRaw(m);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("theme-editorial", "theme-terminal");
    html.classList.add(`theme-${theme}`);
    html.classList.toggle("dark", mode === "dark");
    localStorage.setItem("site-theme", theme);
    localStorage.setItem("site-mode", mode);
  }, [theme, mode]);

  const setTheme = useCallback((t: Theme) => setThemeRaw(t), []);
  const toggleMode = useCallback(
    () => setModeRaw((prev) => (prev === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
