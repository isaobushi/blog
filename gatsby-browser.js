import React from "react";
import "./src/global.css";
import { DarkProvider } from "./src/context/DarkContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./src/utils";

export const wrapRootElement = ({ element }) => (
  <DarkProvider>
    <ThemeProvider theme={{ mode: "light" }}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </DarkProvider>
);
