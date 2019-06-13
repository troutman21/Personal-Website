import React, { Component } from './node_modules/react';
import styled from './node_modules/styled-components';

const Image = styled.img`
  width: 100%;
`;
class Selfie extends Component {
  render() {
    return (
      <>
        <Image src="./images/teaching1.jpg" alt="Phillip Troutman Teaching" />
        <hr />
      </>
    );
  }
}

export default Selfie;
