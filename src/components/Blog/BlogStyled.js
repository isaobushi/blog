import styled from "styled-components";
import * as color from "../../utils";

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 5vh 0;
`;
const Item = styled.div`
  height: 30vh;
`;

const Title = styled.h1`
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 10rem;
  margin: 0;
  color: ${color.neutral200};
  text-shadow: 6px 6px 12px rgba(151, 156, 164, 0.25),
    -12px -12px 16px rgba(255, 255, 255, 0.25);
`;

const ListTags = styled.a`
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 1rem;
  border-bottom: 1px solid #2d3748;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #d56c2d;
    border-bottom: 1px solid #d56c2d;
    transform: scale(1.1);
  }
`;

export { BlogHeader, Item, ListTags, Title };
