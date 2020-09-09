import styled from "styled-components"

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 0;
`
const Item = styled.div``

const Title = styled.h1`
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 3rem;
  margin: 0;
  color: orange;
  text-shadow: 1px 1px 2px orangered;
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

export { BlogHeader, Item, ListTags, Title }
