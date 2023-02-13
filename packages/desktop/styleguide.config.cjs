module.exports = require('../../styleguide.config')({
  cwd: __dirname,
  dirs: [
    '../core',
    '../desktop',
  ],
  title: 'QIWI Wallet Web Desktop Guide',
  serverPort: 6060,
  theme: {
    borderRadius: '10px',
    fontFamily: {
      base: '"Museo Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      monospace: 'monospace',
    },
    mq: {
      small: '@media (max-width: 0px)',
    },
    color: {
      codeBackground: '#fff',
    },
  },
})
