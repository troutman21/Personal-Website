import React, { useState } from 'react';
import Event from './event';

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
  {
    hasVideo: false,
    eventImage: 'closures.jpeg',
    link: 'https://closures.codesmith.io/',
    eventDescription: 'Learn JavaScript Closures',
    eventLocation: 'Codesmith | New York, NY',
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
        link={eventsInfo[i].link}
        description={eventsInfo[i].eventDescription}
        location={eventsInfo[i].eventLocation}
        key={`events-${i}`}
      />
    );
  }
  return events;
}

export default SpeakingEvents;
