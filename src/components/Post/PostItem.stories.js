// import React from "react"
// import Post from "./Post"

// export default {
//   title: "Ui/Post",
//   component: Post,
//   argTypes: {
//     title: { control: "color" },
//   },
// }
import React from "react"

import PostItem from "./PostItem"

export default {
  title: "UI/PostItem",
  component: PostItem,
  argTypes: {
    title: "title",
  },
}

const Template = args => <Post {...args} />

export const Medium = Template.bind({})
Medium.args = {
  title: "Test Title",
  label: "Post",
  size: "large",
}

export const Small = Template.bind({})
Small.args = {
  label: "Post",
  size: "Small",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
  label: "Post",
  size: "large",
}
