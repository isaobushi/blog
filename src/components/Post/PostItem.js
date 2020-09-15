import React from "react";
import {
  CardItem,
  DateButton,
  Main,
  ReadTime,
  Tags,
  Title,
} from "./PostItemStyled";
import { Subtext } from "../General/Typography/Typography";
import { Link } from "gatsby";
/**
 * Primary UI component for user interaction
 */
const PostItem = ({ title, date, tags, slug, dark, post, ...props }) => {
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
        <Title as={Link} to={`${slug}`} dark={dark}>
          {title}
        </Title>
        <Tags>
          {tags.map((tag, i) => (
            <Subtext key={tag + i} variant="default">
              {tag}
            </Subtext>
          ))}
        </Tags>
      </Main>
      <ReadTime variant="default">
        <span>{minutes}</span> min. read
      </ReadTime>
    </CardItem>
  );
};

PostItem.defaultProps = {
  size: "medium",
  onClick: undefined,
};

export default PostItem;
