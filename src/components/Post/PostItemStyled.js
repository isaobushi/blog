import styled from "styled-components";
import { Button } from "../General/Button/Button";
import * as color from "../../utils/colors";

const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
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
  }
  &:hover > span:last-child {
    font-weight: 100;
    opacity: 1;
    color: ${({ dark }) => (dark ? color.neutral200 : color.neutral500)};
  }
`;

export { CardItem, DateButton, Main, Tags, Title };
