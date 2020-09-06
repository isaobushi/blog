import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  CardItem,
  Footer,
  TextFooter,
  Title,
  TagFooter,
} from "./PostItemStyled"

/**
 * Primary UI component for user interaction
 */
const PostItem = ({ size, title, date, tags, slug, ...props }) => {
  const tagsItems = tags.map(tag => (
    <TagFooter key={tag + Math.random()} to="/">
      {tag} •&nbsp;{" "}
    </TagFooter>
  ))
  console.log(slug)
  return (
    <CardItem>
      <div>
        <Title>
          <Link href={`${slug}`}>{title}</Link>
        </Title>
      </div>
      <Footer>
        <TextFooter>
          {date} {" • "} {tagsItems}
        </TextFooter>
      </Footer>
    </CardItem>
  )
}

PostItem.propTypes = {
  /**
   * How large should the Card be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Card Title content
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
}

PostItem.defaultProps = {
  size: "medium",
  onClick: undefined,
}

export default PostItem
