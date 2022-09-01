module.exports = {
  url: 'http://host.docker.internal:6060/',
  dir: 'src/main/resources/screenshots',
  wait: 50,
  threshold: 0.01,
  viewports: {
    desktop: {
      width: 1200,
      height: 900,
    },
  },
  deleteScreenshotsWhenAccepted: true,
  connectOptions: {
    browserWSEndpoint: 'ws://localhost:6161',
  },
  navigateOptions: {
    timeout: 0,
    waitUntil: ['load', 'networkidle0'],
  },
}
