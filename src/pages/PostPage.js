import React from "react";
import { graphql } from "gatsby";
import Post from "../components/Post/Post";
import Layout from "../components/Layout/Layout";

const PostPage = ({ data }) => {
  return (
    <Layout>
      <Post data={data} />
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query MyQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        date
        sub
        tags
        title
      }
      body
      tableOfContents
      timeToRead
    }
  }
`;
