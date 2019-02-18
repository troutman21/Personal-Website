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
        'Ex esse nostrud consectetur sunt ullamco occaecat. Id do occaecat duis deserunt tempor qui adipisicing aliquip enim est. Adipisicing amet ipsum sint labore nisi nisi ad esse non ut laborum nisi enim laboris. Nostrud laborum irure minim eiusmod aliqua et cupidatat est id ut.',
      ],
    }
  }
  render(){
    const events = [];
    for(let i = 0; i < this.state.eventUrls.length; i++){
      events.push(
        <Event
          url={this.state.eventUrls[i]}
          description={this.state.eventDescriptions[i]}
          key={`events-${i}`}
        />
      );
    }

    return (
      <div id='speakingEvents'>
        <div></div>
        <hr/>
        {events}
      </div>
    );
  }
}

export default SpeakingEvents;