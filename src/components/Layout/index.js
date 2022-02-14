import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import Header from "../Header";
import Footer from "../Footer";
import GlobalStyle from "../../styles/global";

import Routes from "../../Routes";
import { Nav } from "./styles";

export default function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <Header />
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/posts/id'>Post</Link>
      </Nav>
      <Routes />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
