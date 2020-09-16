import React, { useEffect, useRef, useContext } from "react";
import { Container, Global } from "./LayoutStyled";
import gsap from "gsap";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SEO from "../SEO/SEO";
import { DarkContext } from "../../context/DarkContext";
import { ThemeProvider } from "styled-components";
import * as colors from "../../utils/colors";

const Layout = ({ children, path }) => {
  const { dark } = useContext(DarkContext);
  let rule = useRef(null);

  useEffect(() => {
    if (path === "/") {
      const tl = gsap.timeline();
      tl.fromTo(
        rule,
        { duration: 1.5, width: "0%", opacity: 0 },
        { width: "100%", opacity: 1 }
      );
    }
  }, [dark, path]);
  const mode = dark ? { mode: "dark" } : { mode: "light" };
  return (
    <>
      <SEO />
      <ThemeProvider theme={mode}>
        <Global dark={dark}>
          <Container>
            <Header path={path}></Header>
            <Nav variant="primary" dark={dark} />
            <hr
              ref={el => {
                rule = el;
              }}
              style={{ borderColor: dark ? colors.accent : colors.neutral100 }}
            />
            {children}
          </Container>
          <Footer />
        </Global>
      </ThemeProvider>
    </>
  );
};

export default Layout;
