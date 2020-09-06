import React, { useState } from "react"
import { graphql } from "gatsby"
import { Container, Global } from "./LayoutStyled"
import Header from "../Header/Header"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"

const BlogPostLayout = ({ data }) => {
  const post = data.markdownRemark;
  return (
    // <Global dark={dark}>
    //   <Container>
    //     <Header title="Isao Bushi" cb={setDark} value={dark}></Header>
    //     <Nav dark={dark} />
    //     <hr />
    //   </Container>
    //   <Footer />
    // </Global>
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}}></div>
    </>
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
