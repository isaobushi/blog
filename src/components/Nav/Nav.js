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
        <Link to="/">
          <Text dark={dark}>About</Text>
        </Link>
      </List>
      <List style={{ justifyContent: "flex-end" }}>
        <Link to="/">
          <Text dark={dark}>Twitter</Text>
        </Link>
        <Link to="/">
          <Text dark={dark}>GitHub</Text>
        </Link>
      </List>
    </Container>
  </>
)

export default Nav
