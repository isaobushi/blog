import React from "react";
import { CardItem, DateButton, Main, Tags, Title } from "./PostItemStyled";
import { Subtext } from "../General/Typography/Typography";
/**
 * Primary UI component for user interaction
 */
const PostItem = ({ title, date, tags, slug, dark, post, ...props }) => {
  console.log("PostItem -> post", post);
  const extimateDurationRead = text => {
    let lengthText = text.split(" ").length;
    let minutes = Math.floor(lengthText / 200);
    return minutes;
  };
  let minutes = extimateDurationRead(post);
  return (
    <CardItem>
      <DateButton variant="default" dark={dark}>
        <span>24</span>
        <span>NOV</span>
      </DateButton>
      <Main>
        <Title dark={dark}>{title}</Title>
        <Tags>
          {tags.map((tag, i) => (
            <Subtext key={tag + i} variant="default">
              {tag}
            </Subtext>
          ))}
        </Tags>
      </Main>
      <Subtext variant="accent">{minutes}</Subtext>{" "}
      <Subtext variant="default">min. read</Subtext>
    </CardItem>
  );
};

PostItem.defaultProps = {
  size: "medium",
  onClick: undefined,
};

export default PostItem;
