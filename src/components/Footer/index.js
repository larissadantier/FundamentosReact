import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";

export default function Footer() {
  const { theme, onToggleTheme, selectedTheme } = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type='button' onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌞" : "🌑"}
      </button>
    </Container>
  );
}
