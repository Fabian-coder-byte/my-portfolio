"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {currentTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
