import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body{
    --primary-color: #ffbe01;
    background-color: #2a2b2e;
    display: flex;
    justify-content: center;
    font-family: 'Space Mono', monospace;
  }
`;

export default GlobalStyle;
