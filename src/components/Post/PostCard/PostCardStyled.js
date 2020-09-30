import styled from "styled-components";
import * as theme from "../../../utils/Theme";
// import * as color from "../../../utils";

const PostCardContainer = styled.div`
  width: 100%;
  min-height: 3rem;
  position: relative;
  background-color: ${theme.postCardBgColor};
  border-radius: 5px;
  transition: all 0.7s ease-in-out;
  box-shadow: rgb(209, 217, 230) inset 12px 12px 10px,
    rgb(255, 255, 255) inset -12px -12px 16px;
  padding: 1rem 3rem;
  line-height: 1.5rem;
  margin: 1.5rem 0;
  z-index: 2;

  p,
  h1,
  h2,
  h3,
  h4 {
    font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  }
  h2 {
    font-weight: 500;
  }
`;

const Slider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f1f3f6;
  top: 0;
  left: 0;
  transition: all 0.8s ease-in-out;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  top: -20px;
  left: -20px;
  background-color: #f1f3f6;
  border: 7px solid #f1f3f6;
  display: none;
  svg {
    fill: #7979ec;
  }
`;

const HiddenCard = styled.div`
  width: 95%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 20px;
  opacity: 1;
  background-color: #31417b;
  border-radius: 5px;
  z-index: 1;
  padding: 1rem;
  padding-top: 1rem;
  color: white;
  margin: 0 auto;
`;
export { Circle, PostCardContainer, Slider, HiddenCard };
