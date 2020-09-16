import styled from "styled-components";
import { PageTitle } from "../General/Typography/Typography";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #f1f3f6;
  flex-direction: column;
  padding: 2rem 1rem 0;
`;

const Text404 = styled(PageTitle)`
  color: #f1f3f6;
  font-size: 20rem;
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  text-align: center;
  text-shadow: none;
  transition: all 1s ease-in;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 12rem;
  }
`;

const Card = styled.div`
  max-width: 1404px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 30px;
  padding: 2vh;
  margin-top: 2vh;
  background-color: #f1f3f6;
  transition: all 1s ease-in;
`;

const Text = styled.p`
  color: #5e6572;
  font-size: 2rem;
  line-height: 2rem;
  padding: 0;
  text-shadow: 12px 12px 20px #d1d9e6, -12px -12px 20px #fff;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const LinkGoBack = styled.div`
  text-align: center;
  padding: 2vh;
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  color: #f9bb49;
  text-shadow: 12px 12px 20px #95a0b3, -12px -12px 20px #d7be91;
  font-size: 2rem;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover a {
    transition: all 0.3s ease-in;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid orange;
    transform: scale(1.01);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export { Card, Container, LinkGoBack, Text, Text404 };
