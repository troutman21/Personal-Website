import React, { Component } from 'react';
import Selfie from '../Selfie';
import Bio from '../Bio';
import { HomeStyleWrapper } from './style';

class Home extends Component {
  render() {
    return (
      <HomeStyleWrapper>
        <Selfie />
        <Bio />
      </HomeStyleWrapper>
    );
  }
}

export default Home;
