import React, { Component } from 'react';
import { EventWrapper, Img, Iframe, MediaContainer } from './style';

class Event extends Component {
  render() {
    // if there is a video provided render an iframe that plays the video
    if (this.props.hasVideo) {
      return (
        <EventWrapper>
          {/* <div className="video-description">{this.props.description}</div>
          <div className="video-location">
            <i>{this.props.location}</i>
          </div> */}
          <MediaContainer>
            <Iframe
              className="media"
              title="Phillip gives talk on context"
              width="100%"
              height="100%"
              src={this.props.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </MediaContainer>
        </EventWrapper>
      );
    }

    return (
      <EventWrapper>
        {/*<div className="video-description">{this.props.description}</div>
        <div className="video-location">
          <i>{this.props.location}</i>
    </div>*/}
        <MediaContainer>
          <Img
            className="media"
            src={`./images/${this.props.url}`}
            alt="Phillip at speaking event"
          />
        </MediaContainer>
      </EventWrapper>
    );
  }
}

export default Event;
