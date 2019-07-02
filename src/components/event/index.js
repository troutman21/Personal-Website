import React, { Component } from 'react';
import { EventWrapper, Img, Iframe, IframeContainer } from './style';

class Event extends Component {
  render() {
    // if there is a video provided render an iframe that plays the video
    if (this.props.hasVideo) {
      return (
        <EventWrapper>
          <div className="video-description">{this.props.description}</div>
          <div className="video-location">
            <i>{this.props.location}</i>
          </div>
          <IframeContainer>
            <Iframe
              className="media"
              title="Phillip gives talk on context"
              src={this.props.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IframeContainer>
        </EventWrapper>
      );
    }

    return (
      <EventWrapper>
        <div className="video-description">{this.props.description}</div>
        <div className="video-location">
          <i>{this.props.location}</i>
        </div>
        <Img
          src={`./images/${this.props.url}`}
          alt="Phillip at speaking event"
        />
      </EventWrapper>
    );
  }
}

export default Event;
