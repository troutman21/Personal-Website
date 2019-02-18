import React, { Component } from 'react';

class Event extends Component{
  render(){
    return(
      <>
      <div>{this.props.description}</div>
      <iframe
        width="560"
        height="315"
        src={this.props.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
       >
       </iframe>
      </>
    );
  }
}

export default Event;