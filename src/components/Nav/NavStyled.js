import styled from "styled-components";
import { Button } from "../General/Button/Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const ListItem = styled(Button)``;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  padding: 0px 4px;
  &:hover {
    svg {
      background-color: #ff8300;
    }
  }
  @media (max-width: 768px) {
    display: none;
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
