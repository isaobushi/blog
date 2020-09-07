import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post/Post"
import Layout from "../components/Layout/Layout"

const PostPage = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Layout>
      <Post data={post} />
    </Layout>
  )
}

export default PostPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
