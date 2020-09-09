import React from "react"
import { graphql } from "gatsby"
import Post from "../components/Post/Post"
import Layout from "../components/Layout/Layout"

const PostPage = ({ data }) => {
  const post = data.markdownRemark
  const featuredImgFluid = post.frontmatter.featuredImage !== null && post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <Post data={post} img={featuredImgFluid} />
    </Layout>
  );
}

export default PostPage

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
