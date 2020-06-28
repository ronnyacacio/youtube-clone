import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: #f9f9f9;
  }

  body, input, select, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', Arial, sans-serif;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    }
`;
