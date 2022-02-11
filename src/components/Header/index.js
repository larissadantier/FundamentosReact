import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";

function Header() {
  const { theme, onToggleTheme, selectedTheme } = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <h1>JStack's Blog</h1>
      <button type='button' onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌞" : "🌑"}
      </button>
    </Container>
  );
}

export default Header;
