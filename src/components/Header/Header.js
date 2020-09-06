import React from "react"
import { Container, Title, Icon } from "./HeaderStyled"
import { BsBrightnessHigh } from "react-icons/bs"
import { MdBrightness2 } from "react-icons/md"

export default ({ title, cb, value }) => {
  const icon = value ? <BsBrightnessHigh /> : <MdBrightness2 />
  return (
    <Container>
      <Title>{title}</Title>
      <Icon onClick={() => cb(!value)}>{icon}</Icon>
    </Container>
  )
}
