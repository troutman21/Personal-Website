import React, { Component } from 'react';
import Event from './event';

class SpeakingEvents extends Component{
  constructor(){
    super();
    this.state = {
      eventUrls: [
        'https://www.youtube.com/embed/70UNvQDPrTA',
      ],
      eventDescriptions: [
        'Will the new React Context API be the Redux killer? ',
      ],
      eventLocation: ['JavascriptLA | Los Angeles, CA']
    }
  }
  render(){
    const events = [];
    for(let i = 0; i < this.state.eventUrls.length; i++){
      events.push(
        <Event
          url={this.state.eventUrls[i]}
          description={this.state.eventDescriptions[i]}
          location={this.state.eventLocation[i]}
          key={`events-${i}`}
        />
      );
    }

    return (
      <div id='speakingEvents'>
        <hr/>
        {events}
      </div>
    );
  }
}

export default SpeakingEvents;