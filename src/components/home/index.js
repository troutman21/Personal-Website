import React, { Component } from './node_modules/react';
import Selfie from '../Selfie';
import Bio from '../Bio';

class Home extends Component {
  render() {
    return (
      <>
        <Selfie />
        <Bio />
      </>
    );
  }
}

export default Home;
