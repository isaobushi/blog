import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import {
  BlogHeader,
  ListTags,
  Title,
  Item,
} from "../components/Blog/BlogStyled";
import PostItem from "../components/Post/PostItem";
import { DarkContext } from "../context/DarkContext";

const Blog = ({ location, data }) => {
  const { dark } = useContext(DarkContext);
  const path = location.pathname ? location.pathname : "";

  return (
    <Layout url={path}>
      <BlogHeader>
        <Title variant="inverted" dark={dark}>
          BLOG
        </Title>
        <ListTags>List Tags</ListTags>
      </BlogHeader>
      {data.allMdx.nodes.map(node => (
        <PostItem
          duration
          post={node.body}
          key={node.frontmatter.title + node.frontmatter.date}
          label="Post"
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tag={"React"}
          slug={node.slug}
          dark={dark}
        />
      ))}
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          topic
          sub
          date
        }
        body
        slug
        timeToRead
        tableOfContents
      }
    }
  }
`;
