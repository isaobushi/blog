import React from "react";
import { Avatar, Container, List } from "./NavStyled";
import { Button } from "../General/Button/Button";
import { Link } from "gatsby";
import SvgTwitter from "../../assets/img/twitter.svg";
import SvgGitHub from "../../assets/img/github.svg";

const Nav = ({ dark }) => (
  <>
    <Container>
      <List>
        <Button variant="default" as={Link} to="/Blog/" dark={dark}>
          Blog
        </Button>
        <Button variant="default" as={Link} to="/About" dark={dark}>
          About
        </Button>
      </List>
      <List style={{ justifyContent: "flex-end" }}>
        <Button
          variant="default"
          as="a"
          href="https://twitter.com/MrMele"
          target="blank"
          dark={dark}
        >
          <Avatar src={SvgTwitter} alt="twitter logo" />
          Twitter
        </Button>
        <Button
          variant="default"
          as="a"
          href="https://github.com/isaobushi"
          target="blank"
          dark={dark}
        >
          {" "}
          <Avatar src={SvgGitHub} alt="GitHub Logo" />
          GitHub
        </Button>
      </List>
    </Container>
  </>
);

export default Nav;
