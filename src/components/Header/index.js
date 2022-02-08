import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";
import Button from "../Button/index";
import { MainTitle } from "./styles";

function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <MainTitle>{props.title}</MainTitle>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
