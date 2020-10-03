import React from "react";
import styled from "styled-components";
import * as theme from "../../../utils/Theme";
import { AutoLink } from "./AutoLink";

const H2styled = styled.h2`
  font-size: 1.5rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  margin-bottom: 4px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    font-weight: 600;
  }
  ${AutoLink}
`;

export const H2 = props => {
  const { children, ...rest } = props;

  return <H2styled {...rest}>{children}</H2styled>;
};
