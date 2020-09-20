import styled from "styled-components";
import * as theme from "../../../utils/Theme";
import * as color from "../../../utils";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 50px;
  box-shadow: ${theme.buttonBoxShadow};
  font-family: "ヒラギノ丸ゴ Pro W4", sans-serif;
  font-size: 1rem;
  line-height: 50px;
  text-align: center;
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

const ButtonSquarred = styled(Button)`
  cursor: pointer;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: ${({ dark }) => (dark ? color.neutral200 : color.neutral500)};
    &:last-child {
      opacity: 0.5;
      text-transform: capitalize;
      font-weight: 500;
    }
    @media (max-width: 768px) {
      height: 90%;
      font-size: 14px;
    }
  }
  &:hover > span:last-child {
    font-weight: 100;
    opacity: 1;
    color: ${({ dark }) => (dark ? color.neutral200 : color.neutral500)};
  }
  @media (max-width: 768px) {
    width: 3rem;
    span {
      font-size: 12px;
    }
  }
`;

const ButtonOnlyIcon = styled(Button)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  &:hover {
    box-shadow: none;
    color: ${theme.buttonColorHover};
  }
`;

export { Button, ButtonSquarred, ButtonOnlyIcon };
