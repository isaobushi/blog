import React from "react";
import Layout from "../components/Layout/Layout";
import { Container } from "../components/About/AboutStyled";
import Image from "gatsby-image";
import { graphql } from "gatsby";

const About = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Image fluid={data.manImage.childImageSharp.fluid} />
      </Container>
    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    manImage: file(relativePath: { eq: "stock-man-hat.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
