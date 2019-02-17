import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Speaking from './speaking';

class Main extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/speaking' component={Speaking}/>
      </Switch>
    )
  }
}

export default Main;