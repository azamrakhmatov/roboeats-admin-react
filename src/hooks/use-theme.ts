import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("gaemi-theme") as Theme | null;
    return stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("gaemi-theme", theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((p) => (p === "dark" ? "light" : "dark")),
  };
};