import React from "react";
import { Container, ScreenContainer, Title } from "./PostContentTableStyled";
import { ScreenSVG } from "../../SVG/Screen";

export const PostContentTable = () => (
  <Container>
    <ScreenContainer>
      <Title>Content Table</Title>
      <ScreenSVG style={{ width: "100%" }} />
    </ScreenContainer>
  </Container>
);
