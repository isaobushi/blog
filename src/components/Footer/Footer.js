import React from "react"
import { FooterContainer, TextFooter } from "./FooterStyled"

const Footer = () => (
  <>
    <FooterContainer>
      <hr />
      <div style={{ width: "100%" }}></div>
      <TextFooter> &copy; 2020 by Isao. All rights reserved.</TextFooter>
    </FooterContainer>
  </>
)

export default Footer
