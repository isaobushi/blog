import React from "react"
import { Container, List, Text } from "./NavStyled"
import { Link } from "gatsby"

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
          <Text dark={dark}>Twitter</Text>
        </a>
        <a href="https://github.com/isaobushi" target="blank">
          <Text dark={dark}>GitHub</Text>
        </a>
      </List>
    </Container>
  </>
)

export default Nav
