import React from 'react'
import "./src/global.css"
import DarkProvider from "./src/context/DarkContext";
import {ThemeProvider} from 'styled-components'

export const wrapRootElement = ({ element }) => (
  <DarkProvider >
    <ThemeProvider theme={{ mode: 'dark' }}>
      {element}
    </ThemeProvider>
  </DarkProvider>
)
