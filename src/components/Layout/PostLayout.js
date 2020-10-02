import React, { useContext } from "react";
import { Global } from "./PostLayoutStyled";
import SEO from "../SEO/SEO";
import { DarkContext } from "../../context/DarkContext";
import { ThemeProvider } from "styled-components";

const PostLayout = ({ path, children, ...props }) => {
  const { dark } = useContext(DarkContext);
  const mode = dark ? { mode: "dark" } : { mode: "light" };
  return (
    <>
      <SEO />
      <ThemeProvider theme={mode}>
        <Global dark={false}>
          {/* <Header path={path}></Header>
          <Nav variant="primary" dark={false} /> */}
          {children}
          {/* <Footer /> */}
        </Global>
      </ThemeProvider>
    </>
  );
};

export default PostLayout;
