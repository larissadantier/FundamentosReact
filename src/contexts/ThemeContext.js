import React, { useState, createContext } from "react";

export const ThemeContext = createContext("dark");
export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  function handleRemove(postId) {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
        onRemove: handleRemove,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
