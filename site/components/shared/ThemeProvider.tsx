"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";

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

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "editorial";
  const t = localStorage.getItem("site-theme");
  return t === "editorial" || t === "terminal" ? t : "editorial";
}

function getInitialMode(): Mode {
  if (typeof window === "undefined") return "dark";
  const m = localStorage.getItem("site-mode");
  return m === "light" || m === "dark" ? m : "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeRaw] = useState<Theme>(getInitialTheme);
  const [mode, setModeRaw] = useState<Mode>(getInitialMode);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("theme-editorial", "theme-terminal");
    html.classList.add(`theme-${theme}`);
    html.classList.toggle("dark", mode === "dark");
    localStorage.setItem("site-theme", theme);
    localStorage.setItem("site-mode", mode);
  }, [theme, mode]);

  const setTheme = useCallback((t: Theme) => setThemeRaw(t), []);
  const toggleMode = useCallback(() => {
    const switchFn = () => {
      flushSync(() => {
        setModeRaw((prev) => (prev === "dark" ? "light" : "dark"));
      });
    };
    if (!document.startViewTransition) {
      switchFn();
      return;
    }
    document.startViewTransition(switchFn);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
