import React from "react"
import { PostArticle, PostContainer, PostTitle } from './PostStyled'

const Post = ({ data }) => {
  
  return (
    <PostContainer>
      <PostTitle>{data.frontmatter.title}</PostTitle>
      <PostArticle dangerouslySetInnerHTML={{ __html: data.html }} />
      <hr />
      <PostArticle dangerouslySetInnerHTML={{ __html: data.html }} />
      <hr />
      <PostArticle dangerouslySetInnerHTML={{ __html: data.html }}/>
    </PostContainer>
  )
}

export default Post
