import styled from "styled-components";
import * as theme from "../../../utils/Theme";

const H1 = styled.h1`
  font-size: 3rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const H2 = styled.h2`
  font-size: 2rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const H3 = styled.h3`
  font-size: 1rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const P = styled.p`
  font-size: 1.5rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtext = styled.p`
  font-size: 1rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export { H1, H2, H3, P, Subtext };
