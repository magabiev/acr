import styled, { createGlobalStyle } from "styled-components";

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
export const Container = styled.div`
  margin: auto;
  width: 1170px;
  max-width: 100%;
`;
