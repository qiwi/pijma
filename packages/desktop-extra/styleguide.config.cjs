module.exports = require('../infra/styleguide.config')({
  components: ['@qiwi/pijma-core', '@qiwi/pijma-desktop-extra', '@qiwi/pijma-desktop'],
  cwd: __dirname,
  extra: {
    title: 'QIWI b2b Web Desktop Guide',
    serverPort: 5055,
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
