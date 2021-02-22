import React, { useContext } from "react";
import { Container, Global } from "./LayoutStyled";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import { Footer } from "../Footer/Footer";
import SEO from "../SEO/SEO";
import { DarkContext } from "../../context/DarkContext";
import { ThemeProvider } from "styled-components";

const Layout = ({ children, path }) => {
  const { dark } = useContext(DarkContext);
  const mode = dark ? { mode: "dark" } : { mode: "light" };
  return (
    <>
      <SEO />
      <ThemeProvider theme={mode}>
        <Global dark={false}>
          <Container>
            <Header path={path}></Header>
            <Nav variant="primary" dark={false} />
            <div style={{ flex: "1 0 auto" }}>{children}</div>
            <Footer />
          </Container>
        </Global>
      </ThemeProvider>
    </>
  );
};

export default Layout;
