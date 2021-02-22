import styled from "styled-components";
import * as color from "../../utils/colors";
import { H2, Subtext } from "../General/Typography/Typography";

const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  padding: 1rem 1rem 1rem 0;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  min-width: 100px;
  &:hover {
    box-shadow: none;
    border: 1px solid #ff8300;
    & > button,
    div {
      box-shadow: none;
    }
  }

  & > button:hover {
    box-shadow: none;
    border: none;
  }
`;

const Title = styled(H2)`
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 4px 0;
  padding-top: 4px;
`;

const Tag = styled(Subtext)`
  width: fit-content;
  color: ${color.subTitle};
  &:hover {
    cursor: pointer;
    color: ${color.accent};
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  width: 100%;
  border-radius: 12px;
  box-shadow: rgb(209, 217, 230) 12px 12px 20px,
    rgb(255, 255, 255) -12px -12px 16px;
  transition: all 0.2s ease;
  margin: 0 2rem;
  padding: 0.2rem 0;
  & > * {
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    width: 100%;
  }
`;

const ReadMore = styled.div`
  padding: 2px;
  span {
    text-shadow: 1px 1px 10px orange, 1px -2px 3px white;
    opacity: 0;
  }
`;
const ReadTime = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  min-width: 100px;
  color: ${color.subTitle};
  span:first-child {
    color: ${color.accent};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { CardItem, Main, ReadMore, ReadTime, Tag, Title };
