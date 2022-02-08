import styled, { css } from "styled-components";

export const Container = styled.article`
  margin-bottom: 24px;

  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? "#F005" : "#FFF"};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;
