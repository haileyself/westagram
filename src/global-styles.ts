import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 14px;
    color: black;
    word-break: normal;
    word-wrap: break-word;
  }

  body {
    font-family: "Noto Sans KR", Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    margin: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button {
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
  }
  
  input:focus {  
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
