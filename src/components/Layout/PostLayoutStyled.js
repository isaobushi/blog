import styled from "styled-components";

export const Global = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: ${({ dark }) => (dark ? "#2A2D32" : "#f1f3f6")};
  color: ${({ dark }) => (dark ? "#f1f3f6" : "#5e6572")};
  transition: all 0.2s ease-in-out;
  padding: 0 2rem;
  @media (max-width: 720px) {
    padding: 0 0.1rem;
  }
`;

export const PostContainerMain = styled.div`
  height: 100%;
  width: 100%;
  max-width: 675px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    min-width: 5rem;
    padding: 1rem;
  }
`;
