"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="fixed top-3 left-1/2 -translate-x-1/2 md:top-5 z-50 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase link-hover text-lightMuted dark:text-darkMuted hover:text-lightMain dark:hover:text-darkMain transition-colors">
        Toggle Theme
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-3 left-1/2 -translate-x-1/2 md:top-5 z-50 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase link-hover text-lightMuted dark:text-darkMuted hover:text-lightMain dark:hover:text-darkMain transition-colors"
    >
      Toggle Theme
    </button>
  );
}
