import React, { useContext } from "react"
import { Link } from "gatsby"
import { Container, Icon } from "./HeaderStyled"
import { SVGLogo } from "../Logo"
import { DarkModeSVG } from "../SVG/DarkModeSVG"
import {DarkContext} from '../../context/DarkContext'

export default ({ cb, value, path }) => {
  let { dark, setDark } = useContext(DarkContext)
  console.log(dark)
  return (
    <Container>
      <Link to="/">
        <SVGLogo path={path} dark={dark} />
      </Link>
      <Icon
        onClick={()=> setDark(!dark)}
      >
        <DarkModeSVG dark={dark} />
      </Icon>
    </Container>
  );
}
