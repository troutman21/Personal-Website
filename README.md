# Personal-Website
This is your personal site used to highlight what you do and your accomplishments.
# How to develop on your site
Run `npm run build:dev` this will start up the webpack-dev-server and open the home page on PORT 9000. Since you are not using HMR fully (for some reason it is only working on CSS right now) you need to refresh from the '/' route and navigate to your changed pages
# How to add update your site with new Events
1. Go to ./src/speakingEvents/index.js
2. Add an object to the initialEventsInfo array. This object will look like this:
    * {hasVideo: Boolean, videoUrl: String || null, eventImage: String || null, eventDescription: String, eventLocation: String}
        * If the event has a video you can add the embed YouTube url there.
        * If it is just an image (no video) add an image to the ./src/assets/ folder and add the name of the image as the "eventImage" property.
