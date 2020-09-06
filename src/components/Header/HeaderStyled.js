import styled from "styled-components"

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.h1`
  color: inherit;
  transition: all 0.3s ease-in-out;
  transform: rotate(140deg);
  cursor: pointer;
  &:hover {
    color: #ff8300;
    /* transform: rotate(180deg); */
    /* transform-origin: 50% 50%; */
  }
`

export { Container, Icon, Title }
