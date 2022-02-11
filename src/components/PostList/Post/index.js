import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Container } from "./styles";

export default function Post({ title, description }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Container theme={theme}>
      <h2>{title}</h2>
      <small>{description}</small>
    </Container>
  );
}
