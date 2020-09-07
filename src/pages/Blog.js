import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import PostItem from "../components/Post/PostItem"
import {
  BlogHeader,
  Item,
  ListTags,
  Title,
} from "../components/pagesStyled/BlogStyled"

const Blog = ({ location, data }) => {
  return (
    <Layout>
      <BlogHeader>
        <Item>
          <Title>Blog</Title>
        </Item>
        <ListTags>List Tags</ListTags>
      </BlogHeader>
      {data.allMarkdownRemark.nodes.map(node => (
        <PostItem
          key={node.frontmatter.title + node.frontmatter.date}
          label="Post"
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={["Description", "Tutorial"]}
          slug={node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          tags
        }
        excerpt
        html
        fields {
          slug
        }
      }
    }
  }
`
