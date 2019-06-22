import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      --primary-color: #ffbe01;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
    }
`;

export default GlobalStyle;
