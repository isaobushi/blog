import styled from "styled-components";
import * as color from "../../utils/colors";
import { H2, Subtext } from "../General/Typography/Typography";

const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  padding: 1rem 0;
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
  & > * {
    margin: 0 1rem;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 100%;
  }
`;

const ReadMore = styled.div`
  span {
    text-shadow: 1px 1px 10px orange, 1px -2px 3px white;
    opacity: 0;
  }
`;
const ReadTime = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  span:first-child {
    color: ${color.accent};
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { CardItem, Main, ReadMore, ReadTime, Tag, Title };
