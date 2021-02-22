import React from "react";
import { graphql } from "gatsby";
import { Post } from "../components/Post/Post";
import { PostContentTable } from "../components/Post/PostContentTable/PostContentTable";
import PostLayout from "../components/Layout/PostLayout";
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";
import { PostContainerMain } from "../components/Layout/PostLayoutStyled";

const PostPage = ({ data }) => {
  return (
    <>
      <PostLayout>
        <PostContainerMain>
          <Header />
          <Nav />
          <div style={{ flex: "1 0 auto" }}>
            <Post data={data} />
          </div>
          <Footer />
        </PostContainerMain>
        {data.mdx.tableOfContents.items && <PostContentTable data={data} />}
      </PostLayout>
    </>
  );
};

export default PostPage;

export const query = graphql`
  query MyQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        date
        sub
        topic
        title
      }
      body
      tableOfContents
      timeToRead
    }
  }
`;
