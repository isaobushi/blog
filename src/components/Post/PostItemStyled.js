import styled from "styled-components";
import { Button } from "../General/Button/Button";
import * as color from "../../utils/colors";
import { H2, Subtext } from "../General/Typography/Typography";

const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Title = styled(H2)`
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 4px 0;
  &:hover {
    border-bottom: 1px solid ${color.accent};
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const Main = styled.div`
  width: 80%;
  padding: 0.5rem 1.5rem;
  & p {
    &:hover {
      cursor: pointer;
      color: ${color.accent};
    }
    &::after {
      content: ",";
    }
    &:last-child::after {
      content: "";
    }
  }
`;

const ReadTime = styled(Subtext)`
  width: 33%;
  text-align: right;
  &::first-letter {
    color: ${color.accent};
  }
`;

const DateButton = styled(Button)`
  cursor: pointer;
  height: 5rem;
  width: 5rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    height: 1.5rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: ${({ dark }) => (dark ? color.neutral200 : color.neutral500)};
    &:last-child {
      opacity: 0.5;
      text-transform: capitalize;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      height: 90%;
      font-size: 14px;
    }
  }
  &:hover > span:last-child {
    font-weight: 100;
    opacity: 1;
    color: ${({ dark }) => (dark ? color.neutral200 : color.neutral500)};
  }
  @media (max-width: 768px) {
    width: 4rem;
    height: 3.5rem;
    font-size: 14px;
  }
`;

export { CardItem, DateButton, Main, ReadTime, Tags, Title };
