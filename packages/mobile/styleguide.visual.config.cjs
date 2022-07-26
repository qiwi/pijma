module.exports = {
  wait: 100,
  threshold: 0.5,
  viewports: {
    mobile: {
      width: 400,
      height: 800,
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
