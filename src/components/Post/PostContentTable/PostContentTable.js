import React from "react";
import { Container, ScreenContainer } from "./PostContentTableStyled";
import { ScreenSVG } from "../../SVG/Screen";

export const PostContentTable = () => (
  <Container>
    <ScreenContainer>
      <ScreenSVG style={{ width: "100% !important" }} />
    </ScreenContainer>
  </Container>
);
