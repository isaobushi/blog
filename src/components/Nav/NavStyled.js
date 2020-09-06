import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`
const Text = styled.div`
  display: inline-block;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  padding-right: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${props => (props.dark ? "#d56c2d" : "#6b46c1")};
    transform: scale(1.1);
  }
`

const List = styled.div`
  display: flex;
  width: 50%;
`
export { Container, List, Text }
