import styled from "styled-components"

const Global = styled.div`
  display: fles;
  justify-content: center;
  height: 100vh;
  background-color: ${props => (props.dark ? "#2d3748" : "snow")};
  color: ${props => (props.dark ? "snow" : "#2d3748")};
  transition: all 0.5s ease-in-out;
`
const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding-top: 10px;
`
export { Container, Global }
