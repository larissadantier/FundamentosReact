import React, { useContext } from "react";
import Layout from "./components/Layout";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
