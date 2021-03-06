import styled from "styled-components";
import { H1, H2, Subtext } from "../General/Typography/Typography";
import { textColor } from "../../utils/Theme";

const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  padding-top: 24px;
`;

const PostTitle = styled(H1)`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  padding: 0.5rem 0;
  border-radius: 5px;
  padding-left: 0.25rem;
  width: 100%;
  background-color: ${textColor};
  margin-bottom: 2rem;
  color: white;
`;

const PostSubTitle = styled(H2)`
  padding: 1rem 0 0.5rem 0;
`;

const DateText = styled(Subtext)`
  display: inline;
`;

const TimeToRead = styled(Subtext)`
  display: inline;
  width: fit-content;
`;

const PostArticle = styled.article`
  font-family: "Montserrat", sans-serif;
  line-height: 2rem;
  width: 100%;
  /* max-width: 675px; */
  align-self: center;
  padding-top: 3rem;
  & > img {
    width: 100%;
  }
`;

export {
  DateText,
  PostArticle,
  PostContainer,
  PostSubTitle,
  PostTitle,
  TimeToRead,
};
