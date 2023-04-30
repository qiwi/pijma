module.exports = require('../../styleguide.config')({
  cwd: __dirname,
  dirs: [
    '../core',
    '../mobile',
  ],
  title: 'QIWI Wallet Web Mobile Guide',
  serverPort: 7070,
  theme: {
    borderRadius: '10px',
    fontFamily: {
      base: '"Museo Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
      monospace: 'monospace',
    },
    mq: {
      small: '@media (min-width: 0px)',
    },
    color: {
      codeBackground: '#fff',
    },
  },
})
