import React from "react"
import Layout from "../components/Layout/Layout"
import PostItem from "../components/Post/PostItem"
import { BlogHeader, Item, ListTags, Title } from "./pagesStyled/BlogStyled"

const Blog = ({ location }) => {
  return (
    <Layout>
      <BlogHeader>
        <Item>
          <Title>Blog</Title>
        </Item>
        <ListTags dark={location.state.dark}>List Tags</ListTags>
      </BlogHeader>
      <PostItem
        label="Post"
        title="This is a much longer new Post Title with way more text"
        date="10.11.2021"
        tags={["Description", "Tutorial"]}
      />
      <PostItem
        label="Post"
        title="This is a new short Post Title"
        date="21.05.2020"
        tags={["Description", "Tutorial"]}
      />
      <PostItem
        label="Post"
        title="This is a new Post Title but with less text"
        date="01.12.2019"
        tags={["Description", "Tutorial"]}
      />
    </Layout>
  )
}

export default Blog
