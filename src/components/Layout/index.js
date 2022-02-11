import React, { useContext } from "react";
import Header from "../Header";
import PostList from "../PostList";
import Footer from "../Footer";
import GlobalStyle from "../../styles/global";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <GlobalStyle theme={theme} />
      <Header />
      <PostList />
      <Footer />
    </>
  );
}
