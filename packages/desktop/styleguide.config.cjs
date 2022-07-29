module.exports = require('../infra/styleguide.config')({
  components: ['@qiwi/pijma-core', '@qiwi/pijma-desktop'],
  cwd: __dirname,
  extra: {
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
  },
})
