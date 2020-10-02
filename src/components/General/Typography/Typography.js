import styled from "styled-components";
import * as theme from "../../../utils/Theme";

const PageTitle = styled.h1`
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 10rem;
  margin: 0;
  color: ${theme.textColor};
  text-shadow: ${({ dark }) =>
    dark
      ? ` 6px 6px 12px rgba(151,156,164,0.25), -12px -12px 16px rgba(0, 0, 0, 0.25)`
      : `6px 6px 12px rgba(88, 99, 117, 0.25), -12px -12px 16px rgba(255,255,255,0.25)`};
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
  font-size: 1.5rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  margin-bottom: 4px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const H3 = styled.h3`
  font-size: 1rem;
  color: ${theme.textColor};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const P = styled.p`
  font-size: 1rem;
  color: ${theme.textColor};
  font-family: "Montserrat", sans-serif;
  padding-bottom: 1rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtext = styled.p`
  font-size: 0.8rem;
  color: ${theme.textColor};
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export { H1, H2, H3, P, PageTitle, Subtext };
