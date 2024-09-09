import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #1a1a1d;
    color: #f1f1f1;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
