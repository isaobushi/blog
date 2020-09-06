import React, { useState, useEffect } from "react"
import { Container, Global } from "./LayoutStyled"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const Layout = ({ children }) => {
  const [dark, setDark] = useState(getInitialMode())

  useEffect(() => {
    localStorage.setItem("dark", dark)
  }, [dark])

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage
    const savedMode = JSON.parse(localStorage.getItem("dark"))
    const userPrefersDark = getPrefColorMode()
    if (isReturningUser) {
      return savedMode
    } else if (userPrefersDark) {
      return true
    } else return false
  }

  function getPrefColorMode() {
    if (window.matchMedia) return
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  return (
    <Global dark={dark}>
      <Container>
        <Header title="Isao Bushi" cb={setDark} value={dark}></Header>
        <Nav dark={dark} />
        <hr />
        {children}
        <Footer />
      </Container>
    </Global>
  )
}

export default Layout
