import React, { Component } from './node_modules/react';
import { Route, Switch } from './node_modules/react-router-dom';
import Home from '../Home';
import SpeakingEvents from '../SpeakingEvents';

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
