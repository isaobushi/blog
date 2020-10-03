import styled from "styled-components";
import { P } from "../../General/Typography/Typography";

export const Container = styled.div`
  display: flex;
  padding: 11rem 0;
  margin-left: 6rem;
  align-items: flex-start;
  position: relative;

  @media (max-width: 1205px) {
    display: none;
  }
`;

export const ScreenContainer = styled.aside`
  max-width: 250px;
  text-align: center;
  padding: 1rem 0;
  border: 1px solid #7f93a01a;
  border-radius: 35px;
  background-color: #7f93a000;
  position: fixed;
  min-height: 0vh;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 0;

  & svg {
    width: 100%;
    transform: scaleY(0.4);
    transition: all 0.3s ease-in-out;
  }
`;

export const Title = styled(P)`
  font-family: "Roboto Mono", sans-serif;
  padding: 0;
  padding: 0 2rem;
  text-align: center;
  color: ${({ isActive }) => (isActive ? "#5e6572" : "#ffa500d9")};
  cursor: pointer;
  font-weight: 600;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 20vh;
  scrollbar-color: rgba(240, 216, 170, 0.5) transparent;
  &::-webkit-scrollbar-track {
    background: red;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  & > li {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    &a {
      cursor: pointer;
    }
    text-transform: capitalize;
    &:hover {
      color: orange;
    }
  }
`;

export const A = styled.a`
  color: ${({ isActive }) => (isActive ? "#ffa500d9" : "#5e6572")};
`;
