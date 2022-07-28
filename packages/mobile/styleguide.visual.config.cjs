module.exports = {
  url: 'http://host.docker.internal:7070/',
  dir: 'styleguide/screenshots',
  wait: 50,
  threshold: 0.01,
  viewports: {
    mobile: {
      width: 400,
      height: 800,
    },
  },
  deleteScreenshotsWhenAccepted: true,
  connectOptions: {
    browserWSEndpoint: 'ws://localhost:7171',
  },
  navigateOptions: {
    timeout: 0,
    waitUntil: 'load',
  },
}
