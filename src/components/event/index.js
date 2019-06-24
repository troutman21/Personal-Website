import React, { Component } from 'react';
import { EventWrapper, Img } from './style';

class Event extends Component {
  render() {
    // if there is a video provided render an iframe that plays the video
    if (this.props.hasVideo) {
      return (
        <div className="event">
          <div className="video-description">{this.props.description}</div>
          <div className="video-location">
            <i>{this.props.location}</i>
          </div>
          <div className="media-container">
            <iframe
              className="media"
              title="Phillip gives talk on context"
              width="560"
              height="315"
              src={this.props.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }

    return (
      <EventWrapper>
        <div className="video-description">{this.props.description}</div>
        <div className="video-location">
          <i>{this.props.location}</i>
        </div>
        <div className="media-container">
          <Img
            className="media"
            src={`./images/${this.props.url}`}
            alt="Phillip at speaking event"
          />
        </div>
      </EventWrapper>
    );
  }
}

export default Event;
