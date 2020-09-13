import React from "react"
import { Container, List, Text } from "./NavStyled"
import { Link } from "gatsby"
import SvgTwitter from '../../assets/img/twitter.svg'
import SvgGitHub from "../../assets/img/github.svg";


const Nav = ({ dark }) => (
  <>
    <Container>
      <List>
        <Link to="/Blog/" state={{ dark }}>
          <Text dark={dark}>Blog</Text>
        </Link>
        <Link to="/About">
          <Text dark={dark}>About</Text>
        </Link>
      </List>
      <List style={{ justifyContent: "flex-end" }}>
        <a href="https://twitter.com/MrMele" target="blank">
          <Text dark={dark}>
            <img src={SvgTwitter} alt="twitter logo"/>
            <div style={{ padding: 5 }}>Twitter</div>
          </Text>
        </a>
        <a href="https://github.com/isaobushi" target="blank">
          <Text dark={dark}>
            {" "}
            <img src={SvgGitHub} alt="GitHub Logo"/>
            <div style={{ padding: 5 }}>GitHub</div>
          </Text>
        </a>
      </List>
    </Container>
  </>
);

export default Nav
