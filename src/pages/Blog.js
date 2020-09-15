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
import { H2 } from "../components/General/Typography/Typography";
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
      <H2 variant="default">Latest posts</H2>
      <hr />
      {data.allMarkdownRemark.nodes.map(node => (
        <PostItem
          duration
          post={node.html}
          key={node.frontmatter.title + node.frontmatter.date}
          label="Post"
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tags={["Description", "Tutorial"]}
          slug={node.fields.slug}
          dark={dark}
        />
      ))}
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
