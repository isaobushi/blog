import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Global } from "./LayoutStyled"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { getInitialMode } from "../../helpers/darkMode"
import Post from "../Post/Post"

const BlogPostLayout = ({ data }) => {
  const post = data.markdownRemark
  const [dark, setDark] = useState(getInitialMode())

  return (
    <Global dark={dark}>
      <Container>
        <Header title="Isao Bushi" cb={setDark} value={dark}></Header>
        <Nav dark={dark} />
        <Post data={post} />
        <Footer />
      </Container>
    </Global>
  )
}

export default BlogPostLayout

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
