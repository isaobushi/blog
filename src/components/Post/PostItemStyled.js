import styled from "styled-components"

const CardItem = styled.div`
  padding-bottom: 2rem;
`

const Title = styled.div`
  width: min-content;
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0;
  &:hover {
    text-shadow: 1px 1px 5px orangered;
  }
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
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    text-shadow: 1px 1px 5px orangered;
  }
`

export { CardItem, Footer, TagFooter, TextFooter, Title }
