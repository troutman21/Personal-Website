import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: green;
`;

class ExampleButton extends Component {
  render() {
    return (
      <Wrapper>
        <p>Im the example button</p>
        <button>Click Me</button>
      </Wrapper>
    );
  }
}

export default ExampleButton;
