import React, { useState } from 'react';
import Event from '../Event';

// Add additional events and event info here
const initialEventsInfo = [
  {
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/70UNvQDPrTA',
    eventImage: null,
    eventDescription: 'Will the new React Context API be the Redux killer?',
    eventLocation: 'JavascriptLA | Los Angeles, CA',
  },
  {
    hasVideo: false,
    videoUrl: null,
    eventImage: 'newYorkTimes.JPG',
    eventDescription: 'React Corporate Training',
    eventLocation: 'New York Times | New York, NY',
  },
];

function SpeakingEvents(props) {
  const [eventsInfo, setEventsInfo] = useState(initialEventsInfo);

  const events = [];

  for (let i = 0; i < eventsInfo.length; i++) {
    events.push(
      <Event
        hasVideo={eventsInfo[i].hasVideo}
        url={eventsInfo[i].eventImage || eventsInfo[i].videoUrl}
        description={eventsInfo[i].eventDescription}
        location={eventsInfo[i].eventLocation}
        key={`event-${i}`}
      />
    );
  }
  return events;
}

export default SpeakingEvents;
