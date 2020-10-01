import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container } from "./HeaderStyled";
import { SVGLogo } from "../Logo";
// import { DarkModeSVG } from "../SVG/DarkModeSVG";
import { DarkContext } from "../../context/DarkContext";

export default ({ path }) => {
  let { dark } = useContext(DarkContext);
  return (
    <Container>
      <Link to="/">
        <SVGLogo path={path} dark={dark} />
      </Link>
      {/* <DarkModeSVG dark={dark} cb={setDark} /> */}
    </Container>
  );
};
