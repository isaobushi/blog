import React from "react"
import { FooterContainer, TextFooter } from "./FooterStyled"

const Footer = () => (
  <>
    <FooterContainer>
      <div style={{ width: "100%" }}>
        <hr />
      </div>
      <TextFooter> &copy; by Isao. All rights reserved.</TextFooter>
    </FooterContainer>
  </>
)

export default Footer
