import React from "react";
import { PostArticle, PostContainer, PostTitle } from "./PostStyled";
import { MDXRenderer } from "gatsby-plugin-mdx";
// import Img from "gatsby-image";

const Post = ({ data, img }) => {
  return (
    <PostContainer>
      <PostTitle>{data.mdx.frontmatter.title}</PostTitle>
      <div>{data.mdx.frontmatter.sub}</div>
      <PostArticle>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </PostArticle>
    </PostContainer>
  );
};

export default Post;
