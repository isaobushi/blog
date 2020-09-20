import styled from "styled-components";
// import * as theme from "../../../utils/Theme";
// import * as color from "../../../utils";

const PostCardContainer = styled.div`
  width: 100%;
  min-height: 3rem;
  position: relative;
  background-color: #dfebf6;
  border-radius: 5px;
  border-left: 3px solid #7979ec;
  box-shadow: rgb(209, 217, 230) 12px 12px 20px,
    rgb(255, 255, 255) -12px -12px 16px;
  padding: 1rem 3rem;
  line-height: 1.5rem;
  transition: all 0.3s ease-in-out;
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
  &:hover {
    box-shadow: none;
  }
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
  svg {
    fill: #7979ec;
  }
`;
export { Circle, PostCardContainer };
