import React, { useState, useMemo, useEffect, createContext } from "react";
import themes from "../styles/themes";

export const ThemeContext = createContext("");

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        onToggleTheme: handleToggleTheme,
        selectedTheme: theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
