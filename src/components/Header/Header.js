import React from "react"
import { Link } from "gatsby"
import { Container, Icon } from "./HeaderStyled"
import { SVGLogo } from "../Logo"
import {DarkModeSVG} from "../SVG/DarkModeSVG"

export default ({ cb, value, path}) => {
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
        <DarkModeSVG dark={value} />
      </Icon>
    </Container>
  );
}
