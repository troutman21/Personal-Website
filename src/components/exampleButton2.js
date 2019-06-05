import React, { Component } from 'react';

const divStyle = { 'background-color': 'peru' };

class ExampleButton2 extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p>Im the example button</p>
        <button>Click Me</button>
      </div>
    );
  }
}

export default ExampleButton2;
