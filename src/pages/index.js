import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout.js";
import { HexSVG } from "../components/SVG/HexSVG.js";
import { DarkContext } from "../context/DarkContext.js";
import PostItem from "../components/Post/PostItem";
import { H2 } from "../components/General/Typography/Typography";
import * as color from "../utils";
import { Item } from "../components/Blog/BlogStyled.js";

export default ({ location, data }) => {
  const { dark } = useContext(DarkContext);

  const path = location.pathname ? location.pathname : "";
  return (
    <Layout path={path}>
      {/* <HexSVG /> */}
      <Item />
      <H2 variant="default">Latest posts</H2>
      <hr style={{ borderColor: dark ? color.accent : color.neutral100 }} />
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
