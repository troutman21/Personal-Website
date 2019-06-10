import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import { AppStyleWrapper } from './style';

class App extends Component {
  render() {
    return (
      <>
        <AppStyleWrapper>
          <Header />
          <Main />
        </AppStyleWrapper>
      </>
    );
  }
}

export default App;
