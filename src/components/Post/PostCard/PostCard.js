import React from "react";
import { Circle, PostCardContainer } from "./PostCardStyled";
import { InfoSVG } from "../../SVG/InfoSVG";
const PostCard = ({ children }) => (
  <PostCardContainer>
    {children}
    <Circle>
      <InfoSVG />
    </Circle>
  </PostCardContainer>
);

export { PostCard };
