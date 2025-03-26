const videoContainer = document.getElementById('video-container');

const callFrame = window.DailyIframe.createFrame({
  url: 'https://web-thu4-chieu.daily.co/test', 
  iframeStyle: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});

videoContainer.appendChild(callFrame.iframe());
callFrame.join();