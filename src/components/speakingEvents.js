import React, { useState } from 'react';
import Event from './event';

// Add anditional events and event info here
const initialEventsInfo = {
  eventUrls: ['https://www.youtube.com/embed/70UNvQDPrTA'],
  eventDescriptions: ['Will the new React Context API be the Redux killer? '],
  eventLocation: ['JavascriptLA | Los Angeles, CA'],
};

function SpeakingEvents(props) {
  const [eventsInfo, setEventsInfo] = useState(initialEventsInfo);

  const events = [];

  for (let i = 0; i < eventsInfo.eventUrls.length; i++) {
    events.push(
      <Event
        url={eventsInfo.eventUrls[i]}
        description={eventsInfo.eventDescriptions[i]}
        location={eventsInfo.eventLocation[i]}
        key={`events-${i}`}
      />
    );
  }
  return events;
}

export default SpeakingEvents;
