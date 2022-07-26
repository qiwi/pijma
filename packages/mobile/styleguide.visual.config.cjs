module.exports = {
  wait: 50,
  threshold: 0.1,
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
