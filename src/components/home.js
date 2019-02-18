import React, { Component } from 'react';
import Selfie from './selfie';
import Bio from './bio';

class Home extends Component{
  render(){
    return(
      <>
        <Selfie/>
        <Bio/>
      </>
    );
  }
}

export default Home;