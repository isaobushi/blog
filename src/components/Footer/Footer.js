import React from "react";
import { FooterContainer, TextFooter } from "./FooterStyled";

export const Footer = () => (
  <>
    <FooterContainer>
      <hr />
      <div style={{ width: "100%" }}></div>
      <TextFooter>
        {" "}
        &copy; 2020 by <a href="https://github.com/isaobushi">Isao</a>. All
        rights reserved.
      </TextFooter>
    </FooterContainer>
  </>
);
