import React, { useContext } from "react";
import { Container, Global } from "./LayoutStyled";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SEO from "../SEO/SEO";
import { DarkContext } from "../../context/DarkContext";
import { ThemeProvider } from "styled-components";

const Layout = ({ children, path }) => {
  const { dark } = useContext(DarkContext);
  console.log(
    "%cHey stranger, what's up ? :)",
    "background: red; font-size: 48px; color:white;"
  );
  return (
    <>
      <SEO />
      <ThemeProvider theme={mode}>
        <Global dark={dark}>
          <Container>
            <Header path={path}></Header>
            <Nav variant="primary" dark={dark} />
            {children}
          </Container>
          <Footer />
        </Global>
      </ThemeProvider>
    </>
  );
};

export default Layout;
