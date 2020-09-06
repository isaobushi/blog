import React from "react"
import { Container } from "./LayoutStyled"
import Header from "../Header/Header"

const Layout = ({ children }) => (
  <div style={{display: "flex", justifyContent: 'center'}}>
    <Container>
      <Header title="Isao Bushi"></Header>
      {children}
    </Container>
  </div>
)

export default Layout
