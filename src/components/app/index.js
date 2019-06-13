import React, { Component } from './node_modules/react';
import Header from '../Header';
import Main from '../Main';
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
