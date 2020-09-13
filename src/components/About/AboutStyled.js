import styled from 'styled-components'


const Container = styled.div`
  max-width: 1024px;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 30px;
  padding: 2vh;
  margin-top: 2vh;
  background-color: #f1f3f6;
  transition: box-shadow 1s ease-in;
  flex-direction: column;
  &:hover {
    box-shadow: none !important;
  }
`;

const Text = styled.p`
  color: #5e6572;
  font-size: 2rem;
  line-height: 3rem;
  padding: 0;
`;

export { Container, Text };