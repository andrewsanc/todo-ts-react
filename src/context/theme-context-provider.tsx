import { createContext, useEffect, useState } from "react";
import { ThemeType } from "../types/types";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export default function ThemeContextProvider(props: ThemeContextProviderProps) {
  const { children } = props;
  const [theme, setTheme] = useState<ThemeType>("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as ThemeType | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("prefers-colors-scheme: dark")) {
      setTheme("dark");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
