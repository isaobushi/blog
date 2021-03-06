import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5vh 0;
`;

const Text404 = styled.h1`
  color: #f1f3f6;
  font-size: 20rem;
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  text-align: center;
  transition: all 1s ease-in;
  margin: 0;
`;

const Card = styled.div`
  max-width: 1024px;
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
  line-height: 3rem;
  padding: 0;
  text-shadow: 12px 12px 20px #d1d9e6, -12px -12px 20px #fff;
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
    padding-bottom: 1rem;
    border-bottom: 1px solid orange;
    transform: scale(1.01);
  }
`;
export { Card, Container, LinkGoBack, Text, Text404 };
