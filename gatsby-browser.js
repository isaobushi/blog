import React from "react";
import "./src/global.css";
import { MDXProvider } from "@mdx-js/react";
import { DarkProvider } from "./src/context/DarkContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./src/utils";
import { H2 } from "./src/components/General/PageComponents/H2";

const components = {
  // h1: props => <H1 {...props} />,

  h2: props => <H2 {...props} />,

  // p: props => <P {...props} />,
};
export const wrapRootElement = ({ element }) => (
  <DarkProvider>
    <ThemeProvider theme={{ mode: "light" }}>
      <GlobalStyle />
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  </DarkProvider>
);
