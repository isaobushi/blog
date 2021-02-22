import React from "react";
import Layout from "../components/Layout/Layout";
import { Container } from "../components/About/AboutStyled";
import Image from "gatsby-image";
import { graphql } from "gatsby";

const About = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Image
          fluid={data.manImage.childImageSharp.fluid}
          style={{ borderRadius: 10 }}
        />
      </Container>
    </Layout>
  );
};

export default About;

export const query = graphql`
  {
    manImage: file(relativePath: { eq: "landscapeOceanRoad.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
