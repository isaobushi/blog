import React from "react";
import styled from "styled-components";
import * as theme from "../../../utils/Theme";

const Pstyled = styled.p`
  font-size: 1rem;
  color: ${theme.textColor};
  font-family: "Montserrat", sans-serif;
  padding-bottom: 1rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const P = props => {
  const { children, ...rest } = props;

  return <Pstyled {...rest}>{children}</Pstyled>;
};
