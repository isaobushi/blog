import React from "react"
import { Link } from "gatsby"
import { Container, Icon } from "./HeaderStyled"
import { BsBrightnessHigh } from "react-icons/bs"
import { MdBrightness2 } from "react-icons/md"
import { SVGLogo } from "../Logo"

export default ({ cb, value, path}) => {
  const icon = value ? <BsBrightnessHigh /> : <MdBrightness2 />
  return (
    <Container>
      <Link to="/">
        <SVGLogo path={path} />
      </Link>
      <Icon
        onClick={() => {
          cb(!value);
        }}
      >
        {icon}
      </Icon>
    </Container>
  );
}
