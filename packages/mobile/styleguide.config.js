module.exports = require('../infra/styleguide.config')({
  components: ['@qiwi/pijma-core', '@qiwi/pijma-mobile'],
  cwd: __dirname,
  extra: {
    serverPort: 6060,
    theme: {
      borderRadius: '10px',
      fontFamily: {
        base: '\'Museo Sans\', \'Helvetica Neue\', \'Helvetica\', \'Arial\', sans-serif',
        monospace: 'monospace',
      },
      mq: {
        small: '@media (min-width: 0px)',
      },
      color: {
        codeBackground: '#fff',
      },
    },
  }
})
