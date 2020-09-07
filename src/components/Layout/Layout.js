import React, { useState, useEffect } from "react"
import { Container, Global } from "./LayoutStyled"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { getInitialMode } from "../../helpers/darkMode"
import SEO from "../SEO/SEO"

const Layout = ({ children }) => {
  const [dark, setDark] = useState(getInitialMode())

  useEffect(() => {
    typeof window !== "undefined" && window.localStorage.setItem("dark", dark)
  }, [dark])

  return (
    <>
      <SEO />
      <Global dark={dark}>
        <Container>
          <Header title="Isao Bushi" cb={setDark} value={dark}></Header>
          <Nav dark={dark} />
          <hr />
          {children}
        </Container>
        <Footer />
      </Global>
    </>
  )
}

export default Layout
