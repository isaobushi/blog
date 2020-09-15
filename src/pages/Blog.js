import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import PostItem from "../components/Post/PostItem";
import {
  BlogHeader,
  ListTags,
  Title,
  Item,
} from "../components/Blog/BlogStyled";
import { DarkContext } from "../context/DarkContext";

const Blog = ({ location, data }) => {
  console.log("Blog -> data", data);
  const { dark } = useContext(DarkContext);
  const path = location.pathname ? location.pathname : "";

  return (
    <Layout url={path}>
      <BlogHeader>
        <Title>BLOG</Title>
        <ListTags>List Tags</ListTags>
      </BlogHeader>
      <Item></Item>
    </Layout>
  );
};

export default Blog;

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
`;
