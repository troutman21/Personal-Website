import React, { Component } from 'react';

class Event extends Component{
  render(){
    return(
      <div className='Event'>
        <div className='video-description'>{this.props.description}</div>
        <div className='video-location'><i>{this.props.location}</i></div>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src={this.props.url}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          >
          </iframe>
        </div>
      </div>
    );
  }
}

export default Event;