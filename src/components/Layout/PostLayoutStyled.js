import styled from "styled-components";

export const PostContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 90%;
  }
`;
export const Global = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  background-color: ${({ dark }) => (dark ? "#2A2D32" : "#f1f3f6")};
  color: ${({ dark }) => (dark ? "#f1f3f6" : "#5e6572")};
  transition: all 0.2s ease-in-out;
  padding: 0 2rem;
  align-self: center;
  @media (max-width: 720px) {
    padding: 0 0.1rem;
  }
`;
