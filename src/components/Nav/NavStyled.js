import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const ListItem = styled.div`
  display: flex;
  width: 155px;
  height: 50px;
  justify-content: space-around;
  align-content: center;
  font-family: "Roboto", sans-serif;
  box-shadow: ${props =>
    props.dark
      ? `18px 18px 20px #24262B, -8px -8px 20px #30343A`
      : `6px 6px 12px rgba(209, 217, 230, 0.25), -12px -12px 16px rgba(255, 255, 255, 0.25)`};
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 8px;
  color: #5e6572;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-right: 12px;
  &:hover {
    color: #ff8300;
    box-shadow: none;
  }
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0px 4px;
  &:hover {
    svg {
      background-color: #ff8300;
    }
  }
`;
const List = styled.div`
  display: flex;
  width: 50%;
  & a:last-child {
    margin-right: 0px;
  }
`;
export { Avatar, Container, List, ListItem };
