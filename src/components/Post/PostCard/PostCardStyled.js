import styled from "styled-components";
import * as theme from "../../../utils/Theme";
import { Subtext } from "../../General/Typography/Typography";
import * as color from "../../../utils";

const PostCardContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  background-color: ${theme.postCardBgColor};
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: ${theme.postCardBoxShadow};
  padding: 1rem 3rem;
  line-height: 1.5rem;
  opacity: 0;
  margin: 1.5rem 0;
  z-index: 2;

  p,
  h1,
  h2,
  h3,
  h4 {
    font-family: "Roboto", sans-serif;
    color: #5e6572;
  }
  h2 {
    font-weight: lighter;
  }
`;

const Slider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ isDark }) =>
    isDark ? color.neutral500 : color.neutral200};
  top: 0;
  left: 0;
  transition: all 0.8s ease-in-out;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const HiddenCard = styled.div`
  width: 95%;
  height: 0%;
  position: absolute;
  top: 0;
  left: 2.5%;
  opacity: 1;
  background-color: #000;
  border-radius: 5px;
  z-index: 1;
  color: white;
  margin: 0 auto;
`;

const ToogleCode = styled(Subtext)`
  text-align: right;
  align-content: center;
  display: flex;
  justify-content: flex-end;
  font-family: "Robot0", sans-serif;
  line-height: 2rem;
  font-weight: 500;
  font-size: 0.6rem;
  svg {
    cursor: pointer;
    margin-left: 0.6rem;
    height: 2rem;
    width: 2rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export { HiddenCard, PostCardContainer, Slider, ToogleCode };
