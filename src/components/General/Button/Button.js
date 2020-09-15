import styled from "styled-components";
import * as theme from "../../../utils/Theme";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 50px;
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  box-shadow: ${theme.buttonBoxShadow};
  border-radius: 12px;
  border: 1px solid transparent;
  background-color: ${theme.buttonBackground};
  color: ${theme.textColor};
  transition: all 0.2s ease-in;
  margin-right: 8px;
  &:hover {
    box-shadow: none;
    border: 1px solid ${theme.buttonColorHover};
    color: ${theme.buttonColorHover};
  }
  @media (max-width: 768px) {
    width: 40%;
    height: 90%;
    font-size: 14px;
  }
`;

export { Button };
