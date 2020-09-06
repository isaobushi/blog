import styled from "styled-components"

const BlogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10vh 0;
`
const Item = styled.div``

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
`

const ListTags = styled.a`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  border-bottom: 1px solid #2d3748;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${props => (props.dark ? "#d56c2d" : "#6b46c1")};
    border-bottom: ${props =>
      props.dark ? "1px solid #d56c2d" : "1px solid #6b46c1"};
    transform: scale(1.1);
  }
`

export { BlogHeader, Item, ListTags, Title }
