import React, { Component } from 'react';
import Header from '../Header';
import Main from '../Main';
import { AppStyleWrapper } from './style';

class App extends Component {
  render() {
    return (
      <AppStyleWrapper>
        <Header />
        <Main />
      </AppStyleWrapper>
    );
  }
}

export default App;
