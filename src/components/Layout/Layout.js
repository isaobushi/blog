import React, { useEffect, useRef, useContext } from "react";
import { Container, Global, Button } from "./LayoutStyled";
import gsap from 'gsap'
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SEO from "../SEO/SEO";
import {DarkContext} from "../../context/DarkContext"

const Layout = ({ children, path }) => {
  const {dark} = useContext(DarkContext)
  let rule = useRef(null)

  useEffect(() => {    
    if (path === "/") {
      const tl = gsap.timeline();
      tl.fromTo(rule,  {duration: 1.5, width: "0%", opacity:0 }, { width: "100%", opacity: 1 })
    }
  }, [dark, path]);

  return (
    <>
      <SEO />
      <Global dark={dark}>
        <Container>
          <Header path={path}></Header>
          <Nav variant="primary" dark={dark} />
          <hr
            ref={el => {
              rule = el;
            }}
            style={{ borderColor: "#5e6572" }}
          />
          <Button />
          {children}
        </Container>
        <Footer />
      </Global>
    </>
  );
};

export default Layout;
