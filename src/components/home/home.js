import React, { Component } from 'react';
import Selfie from '../selfie/selfie';
import Bio from '../bio/bio';

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
