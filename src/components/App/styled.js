import styled, { createGlobalStyle, keyframes } from "styled-components";

/**
 * Создание глобальных стилей по методу из данного источника:
 * https://styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v4
 */
export const GlobalStyles = createGlobalStyle`
 body{
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #e5e5e5;
  ::-webkit-scrollbar{
    width: 0;
  }
 }
`;
/**
 * Общие компоненты
 */
export const Container = styled.div`
  margin: auto;
  width: 1170px;
  max-width: 100%;
`;
export const LinkButton = styled.div`
  color: #5d54a4;
  cursor: pointer;
  font-size: ${(props) => props.fontSize};
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    border-bottom: 1px solid #9d65c9;
  }
  @media (max-width: 499px) {
    border-bottom: 1px solid #fff;
  }
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  position: absolute;
  left: calc(50% - 12px);
  z-index: 10;
  border-top: 3px solid white;
  border-right: 3px solid white;
  border-bottom: 3px solid white;
  border-left: 3px solid #9d65c9;
  background: transparent;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export const Button = styled.button`
  margin: ${(props) => props.margin};
  position: relative;
  display: flex;
  background-color: #9d65c9;
  color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  cursor: pointer;
  font-size: 20px;
  transition: 0.2s;
  outline: none;
  border: none;
  &:active {
    border: none;
    outline: none;
    background-color: #7640a2;
  }
  &:hover {
    box-shadow: 0 0 4px #9d65c9;
  }
  &:disabled {
    cursor: auto;
    box-shadow: 0 0;
    opacity: 50%;
  }
`;
export const BlackBlock = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: ${(props) => (props.show && "flex") || "none"};
  > div {
    z-index: 101;
  }
`;
export const PopUp = styled.div`
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  background-color: #fff;
  max-width: 90%;
`;
