import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import { BlogHeader, ListTags, Title } from "../components/Blog/BlogStyled";
import PostItem from "../components/Post/PostItem";
import { DarkContext } from "../context/DarkContext";
import { ListCategories } from "../components/Blog/ListCategories/ListCategories";
const Blog = ({ location, data }) => {
  const { dark } = useContext(DarkContext);
  const path = location.pathname ? location.pathname : "";

  return (
    <Layout>
      <BlogHeader>
        <Title variant="inverted" dark={dark}>
          BLOG
        </Title>
        <ListTags>List Tags</ListTags>
      </BlogHeader>
      <ListCategories data={data.allMdx.nodes} />
      {data.allMdx.nodes.map(node => (
        <PostItem
          duration
          post={node.body}
          key={node.frontmatter.title + node.frontmatter.date}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          tag={node.frontmatter.topic}
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
