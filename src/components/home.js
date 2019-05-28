import React, { Component } from 'react';
import Selfie from './selfie';
import Bio from './bio';

import ExampleButton from './exampleButton';

class Home extends Component {
  render() {
    return (
      <>
        <Selfie />
        <Bio />
        <ExampleButton />
      </>
    );
  }
}

export default Home;
