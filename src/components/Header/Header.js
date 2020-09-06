import React from "react"
import { Container, Text, Icon } from "./HeaderStyled"
import { AiOutlineBulb } from "react-icons/ai"

export default ({ title }) => (
  <Container>
    <Text>{title}</Text>
    <Icon>
      <AiOutlineBulb />
    </Icon>
  </Container>
)
