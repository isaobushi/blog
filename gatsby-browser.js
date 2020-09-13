import React from 'react'
import "./src/global.css"
import DarkProvider from "./src/context/DarkContext";

export const wrapRootElement = ({ element }) => (
  <DarkProvider >{element}</DarkProvider>
)
