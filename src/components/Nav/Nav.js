import React from "react";
import { Avatar, Container, List } from "./NavStyled";
import { ButtonOnlyIcon } from "../General/Button/Button";
import { Link } from "gatsby";
import SvgTwitter from "../../assets/img/twitter.svg";
import SvgGitHub from "../../assets/img/github.svg";
import { H3 } from "../General/Typography/Typography";

const Nav = ({ dark }) => (
  <>
    <Container>
      <List>
        <H3 variant="default" as={Link} to="/Blog/" dark={dark}>
          Blog
        </H3>
        <H3 variant="default" as={Link} to="/About" dark={dark}>
          About
        </H3>
      </List>
      <List style={{ justifyContent: "flex-end" }}>
        <ButtonOnlyIcon
          variant="default"
          as="a"
          href="https://twitter.com/MrMele"
          target="blank"
          dark={dark}
        >
          <Avatar src={SvgTwitter} alt="twitter logo" />
        </ButtonOnlyIcon>
        <ButtonOnlyIcon
          variant="default"
          as="a"
          href="https://github.com/isaobushi"
          target="blank"
          dark={dark}
        >
          {" "}
          <Avatar src={SvgGitHub} alt="GitHub Logo" />
        </ButtonOnlyIcon>
      </List>
    </Container>
  </>
);

export default Nav;
