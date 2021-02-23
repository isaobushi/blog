import React, { useContext } from "react";
import { Link } from "gatsby";
import { Container } from "./HeaderStyled";
import { SVGLogo } from "../Logo";
// import { DarkModeSVG } from "../SVG/DarkModeSVG";
import { DarkContext } from "../../context/DarkContext";

export const Header = ({ path }) => {
  let { dark } = useContext(DarkContext);
  return (
    <Container>
      <Link to="/">
        <SVGLogo path={path} dark={dark} />
        <p style={{ color: "transparent" }}>a</p>
      </Link>
      {/* <DarkModeSVG dark={dark} cb={setDark} /> */}
    </Container>
  );
};
