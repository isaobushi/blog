import styled from "styled-components";
import { H2, Subtext } from "../General/Typography/Typography";
const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  padding-top: 24px;
`;
const PostTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  padding: 0.5rem 0;
  border-radius: 5px;
  padding-left: 0.25rem;
  width: 100%;
  background-color: #ffa50047;
  margin-bottom: 0;
  color: #4f4d4d;
`;
const PostSubTitle = styled(H2)`
  padding: 1rem 0 0.5rem 0;
`;
const DateText = styled(Subtext)`
  display: inline;
  width: fit-content;
`;
const TimeToRead = styled(Subtext)`
  display: inline;
  width: fit-content;
`;
const PostArticle = styled.article`
  font-family: "Montserrat", sans-serif;
  line-height: 2rem;
  width: 100%;
  max-width: 675px;
  align-self: center;
  padding-top: 1rem;
`;
export {
  DateText,
  PostArticle,
  PostContainer,
  PostSubTitle,
  PostTitle,
  TimeToRead,
};
