import styled from "styled-components";
import * as theme from "../../../utils/Theme";

const PageTitle = styled.h1`
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 10rem;
  margin: 0;
  color: ${theme.textColor};
  text-shadow: 6px 6px 12px rgba(151, 156, 164, 0.25),
    -12px -12px 16px rgba(255, 255, 255, 0.25);
  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;
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
    font-size: 1rem;
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
    font-size: 0.8em;
  }
`;

export { H1, H2, H3, P, PageTitle, Subtext };
