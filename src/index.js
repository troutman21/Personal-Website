import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/globalStyles';
import App from './components/App';

// inject or app into our html root element
reactDOM.render(
  <BrowserRouter>
    <>
      <GlobalStyle />
      <App />
    </>
  </BrowserRouter>,
  document.querySelector('#root')
);

// used for HMR in development
// first checks if the interface is available to us (it wont be available in production build)
if (module.hot) {
  module.hot.accept();
}
