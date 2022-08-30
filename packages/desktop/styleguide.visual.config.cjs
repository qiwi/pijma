module.exports = {
  url: 'http://host.docker.internal:6060/',
  dir: 'styleguide/screenshots',
  wait: 50,
  threshold: 0.01,
  viewports: {
    desktop: {
      width: 1200,
      height: 900,
    },
  },
  filter: [
    'Hint',
  ],
  deleteScreenshotsWhenAccepted: true,
  connectOptions: {
    browserWSEndpoint: 'ws://localhost:6161',
  },
  navigateOptions: {
    timeout: 0,
    waitUntil: ['load', 'networkidle0'],
  },
}
