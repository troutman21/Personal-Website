import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
  body{
    --primary-color: #ffbe01;
    --secondary-color: #2a2b2e;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    font-family: 'Space Mono', monospace;
    color: #ffffff;
  }
`;

export default GlobalStyle;
