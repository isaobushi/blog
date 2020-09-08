import React from "react"
import { Link } from "gatsby"
import { Container, Icon } from "./HeaderStyled"
import { BsBrightnessHigh } from "react-icons/bs"
import { MdBrightness2 } from "react-icons/md"
import { SVGLogo } from "../Logo"

export default ({ cb, value }) => {
  const icon = value ? <BsBrightnessHigh /> : <MdBrightness2 />
  console.log(SVGLogo)
  return (
    <Container>
      <Link to="/">
        <SVGLogo />
      </Link>
      <Icon
        onClick={() => {
          cb(!value)
        }}
      >
        {icon}
      </Icon>
    </Container>
  )
}
