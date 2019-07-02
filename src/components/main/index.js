import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import SpeakingEvents from '../SpeakingEvents';
import { MainStyleWrapper } from './style';

class Main extends Component {
  render() {
    return (
      <MainStyleWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/speaking" component={SpeakingEvents} />
        </Switch>
      </MainStyleWrapper>
    );
  }
}

export default Main;
