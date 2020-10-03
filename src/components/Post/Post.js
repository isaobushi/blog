import React from "react";
import {
  DateText,
  PostArticle,
  PostContainer,
  PostSubTitle,
  PostTitle,
  TimeToRead,
} from "./PostStyled";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({ data }) => {
  const {
    mdx: {
      timeToRead,
      frontmatter: { title, sub, date },
    },
  } = data;

  return (
    <PostContainer>
      <PostTitle id="top" variant="secondary">
        {title}
      </PostTitle>
      <PostSubTitle>{sub}</PostSubTitle>
      <div>
        <DateText variant="secondary">{date}</DateText>
        {" - "}
        <TimeToRead variant="accent">{timeToRead}</TimeToRead>
        <TimeToRead variant="secondary">{" min. read"}</TimeToRead>
      </div>
      <PostArticle>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </PostArticle>
    </PostContainer>
  );
};

export { Post };
