import React from "react"
import { PostArticle, PostContainer, PostTitle } from './PostStyled'
// import Img from "gatsby-image";

const Post = ({ data, img }) => {
  
  return (
    <PostContainer>
      <PostTitle>{data.frontmatter.title}</PostTitle>
      <PostArticle dangerouslySetInnerHTML={{ __html: data.html }} />
    </PostContainer>
  )
}

export default Post
