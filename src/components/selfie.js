import React, { Component } from 'react';
import selfieSrc from '../assets/teaching1.jpg';

class Selfie extends Component {
  render() {
    return (
      <>
        <img id="selfie" src={selfieSrc} alt="Phillip Troutman" />
        <hr />
      </>
    );
  }
}

export default Selfie;
