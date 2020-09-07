import styled from "styled-components"

const Global = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.dark ? "#2d3748" : "snow")};
  color: ${props => (props.dark ? "snow" : "#2d3748")};
  transition: all 0.2s ease-in-out;
`
const Container = styled.div`
  min-height: calc(100vh - 199px);

  width: 100%;
  max-width: 1024px;
  padding-top: 10px;
`
export { Container, Global }
