import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
`;
const PostTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  padding-left: 0.25rem;
  width: 100%;
  background-color: #ffa50047;
`;
const PostArticle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  line-height: 2.5rem;
  width: 100%;
  max-width: 675px;
  align-self: center;
`;
export { PostArticle, PostContainer, PostTitle };
