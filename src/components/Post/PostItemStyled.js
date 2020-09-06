import styled from "styled-components"

const CardItem = styled.div`
  padding-bottom: 2rem;
`

const Title = styled.div`
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0;
`
const Footer = styled.div``
const TextFooter = styled.div`
  font-size: 1.5rem;
  padding: 2px 0;
  margin: 0;
  transition: all 0.2s ease-in-out;
  font-family: "Montserrat", sans-serif;
`
const TagFooter = styled.div`
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #d56c2d;
    transform: scale(1.03);
  }
`

export { CardItem, Footer, TagFooter, TextFooter, Title }
