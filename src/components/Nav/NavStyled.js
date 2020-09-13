import styled from "styled-components"
import * as theme from '../../styles/Theme'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const Text = styled.div`
  display: flex;
  width: 4vw;
  justify-content: space-around;
  align-content: center ;
  font-family: "Roboto", sans-serif;
  box-shadow: 6px 6px 16px #d1d9e6, -6px -6px 16px #ffffff;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 8px;
  margin-right: 8px;
  color: #5e6572;
  transition: all .3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #ff8300;
    font-size: ${theme.fontSize};
    box-shadow: none;
  }
`;

const List = styled.div`
  display: flex;
  width: 50%;
`
export { Container, List, Text }
