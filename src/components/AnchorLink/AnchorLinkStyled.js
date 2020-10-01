import styled from "styled-components";
import { H2 } from "../General/Typography/Typography";

const ContainerAnchor = styled.div`
  display: flex;
  width: max-content;
  transition: all 0.3s ease-in-out;
  transform: translateX(-2rem);
  padding-top: 3rem;
  &:hover {
    a {
      opacity: 1;
      fill: orangered;
    }
  }
  @media (max-width: 768px) {
    transform: translateX(-1.3rem);
  }
`;

const LinkTitle = styled(H2)`
  font-weight: 500;
  margin-left: 0.5rem;
`;

const CopySvg = styled.div`
  transition: all 0.5s ease-in-out;
  opacity: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  position: relative;
  span {
    opacity: 0;
  }
  &:hover span {
    opacity: 1;
    top: -50px;
    left: -50px;
    border: 1px solid #ff8300;
    padding: 1px 4px;
    text-align: center;
    color: #ff8300;
    border-radius: 5px;
    position: absolute;
    font-size: 0.8rem;
    &:visited {
      color: orange;
    }
  }
  @media (max-width: 768px) {
    opacity: 1;
    width: 1rem;
    height: 1rem;
  }
`;
export { ContainerAnchor, CopySvg, LinkTitle };
