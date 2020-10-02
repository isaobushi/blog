import styled from "styled-components";
import { P } from "../../General/Typography/Typography";
export const Container = styled.div`
  display: flex;
  padding: 11rem;
  align-items: flex-start;
  position: relative;
  @media (max-width: 1025px) {
    display: none;
  }
`;

export const ScreenContainer = styled.div`
  max-width: 250px;
  text-align: center;
  padding-top: 1rem;
  border: 1px solid rgba(240, 216, 170, 0.5);
  border-radius: 35px;
  background-color: rgba(240, 216, 170, 0.35);
  position: fixed;
  min-height: 30vh;
  transition: all 0.3s ease-in-out;
  & svg {
    width: 100%;
    transform: scaleY(0.5);
    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled(P)`
  font-family: "Roboto Mono", sans-serif;
  padding: 0;
`;
