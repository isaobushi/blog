import styled from "styled-components";

const Global = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ dark }) => (dark ? "#2A2D32" : "#f1f3f6")};
  color: ${({ dark }) => (dark ? "#f1f3f6" : "#5e6572")};
  transition: all 0.2s ease-in-out;
  padding: 0 2rem;
`;
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 675px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  position: relative;
  width: 4vw;
  height: 2vw;
  background: #f1f3f6;
  border-radius: 30px;
  box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
    inset 0 0 20px rgba(255, 255, 255, 0),
    10px 10px 18px rgba(55, 84, 170, 0.15), -10px -10px 22px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.7s ease-in-out;
  outline: none;
  border: none;
  font-size: 0;
  margin-right: 15px;
  &:hover {
    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px white, 0px 0px 4px rgba(255, 255, 255, 0.2);
  }
`;

export { Container, Global, Button };
