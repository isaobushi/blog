import React, { useState, useEffect, useRef } from "react";
import { Container, Global } from "./LayoutStyled";
import gsap from 'gsap'
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { getInitialMode } from "../../helpers/darkMode";
import SEO from "../SEO/SEO";

const Layout = ({ children, path }) => {
  const [dark, setDark] = useState(getInitialMode());
  let rule = useRef(null)
  useEffect(() => {
    typeof window !== "undefined" && window.localStorage.setItem("dark", dark);
    if (path === "/") {
      const tl = gsap.timeline();
      tl.fromTo(rule, 1.5, { width: "0%", opacity:0 }, { width: "100%", opacity: 1 })
    }
  }, [dark, path]);

  return (
    <>
      <SEO />
      <Global dark={dark}>
        <Container>
          <Header cb={setDark} value={dark} path={path}></Header>
          <Nav dark={dark} />
          <hr
            ref={el => {
              rule = el;
            }}
          />
          {children}
        </Container>
        <Footer />
      </Global>
    </>
  );
};

export default Layout;
