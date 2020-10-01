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
  padding: 6px;
  &:hover {
    svg {
      background-color: #ff8300;
    }
  }
`;

const List = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-between;
  a {
    margin-right: 10px;
  }
  a:hover {
    border-bottom: 1px solid orange;
  }
  & a:last-child {
    margin-right: 0px;
  }
`;
export { Avatar, Container, List, ListItem };
