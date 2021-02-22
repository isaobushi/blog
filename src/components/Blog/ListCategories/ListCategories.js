import React, { useState } from "react";
import { Container } from "./ListCategoriesStyled";
const ListCategories = ({ data }) => {
  const listOfTopics = data => {
    let list = [];
    data.map(node => list.push(node.frontmatter.topic));
    return (list = new Set(list));
  };
  const list = listOfTopics(data);
  console.log(
    "🚀 ~ file: ListCategories.js ~ line 10 ~ ListCategories ~ list",
    list
  );
  return (
    <>
      <Container />
    </>
  );
};

export { ListCategories };
