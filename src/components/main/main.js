import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import SpeakingEvents from '../speakingEvents/speakingEvents';

class Main extends Component {
  render() {
    return (
      <main id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/speaking" component={SpeakingEvents} />
        </Switch>
      </main>
    );
  }
}

export default Main;
