import React, { Component } from 'react';
import {
  IframeStyleWrapper,
  EventStyleWrapper,
  InfoStyleWrapper,
  Iframe,
  Img,
  Hr,
} from './style';

class Event extends Component {
  render() {
    // if there is a video provided render an iframe that plays the video
    if (this.props.hasVideo) {
      return (
        <EventStyleWrapper>
          <InfoStyleWrapper>
            <p className="video-description">{this.props.description}</p>
            <p className="video-location">
              <i>{this.props.location}</i>
            </p>
          </InfoStyleWrapper>
          <IframeStyleWrapper>
            <Iframe
              className="media"
              title="Phillip gives talk on context"
              src={this.props.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IframeStyleWrapper>
          <Hr />
        </EventStyleWrapper>
      );
    }

    return (
      <EventStyleWrapper>
        <InfoStyleWrapper>
          <div className="video-description">{this.props.description}</div>
          <div className="video-location">
            <i>{this.props.location}</i>
          </div>
        </InfoStyleWrapper>
        <Img
          src={`./images/${this.props.url}`}
          alt="Phillip at speaking event"
        />
        <Hr />
      </EventStyleWrapper>
    );
  }
}

export default Event;
