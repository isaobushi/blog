import React, {useState}  from "react"
import { Container, Global } from "./LayoutStyled"
import Header from "../Header/Header"
import Nav from '../Nav/Nav'

const Layout = ({ children }) => {
  const [dark, setDark] = useState(false)
  return (
    <Global dark={dark}>
      <Container>
        <Header title="Isao Bushi" cb={setDark} value={dark}></Header>
        <Nav dark={dark} />
        <hr />
        {children}
      </Container>
    </Global>
 )
}


export default Layout
