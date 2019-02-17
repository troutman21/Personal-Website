import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CSS from './index.css';
import App from './components/app';

//inject or app into our html root element
reactDOM.render((
<BrowserRouter>
  <App/>
</BrowserRouter>
), document.querySelector('#root'));