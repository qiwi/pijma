module.exports = {
  wait: 200,
  threshold: 0.5,
  viewports: {
    desktop: {
      width: 1200,
      height: 900,
    },
  },
  deleteScreenshotsWhenAccepted: true,
  launchOptions: {
    args: [
      '--font-render-hinting=none',
      '--force-color-profile=srgb',
    ],
  },
}
