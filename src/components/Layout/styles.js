import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;

    & + a {
      margin-left: 1rem;
    }
  }
`;
