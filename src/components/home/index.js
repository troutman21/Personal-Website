import React, { Component } from 'react';
import Selfie from '../Selfie';
import Bio from '../Bio';
import { Section } from './style';

class Home extends Component {
  render() {
    return (
      <Section>
        <Selfie />
        <Bio />
      </Section>
    );
  }
}

export default Home;
