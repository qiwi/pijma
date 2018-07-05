import {injectGlobal} from 'emotion'

import {theme, reset, fonts} from '@qiwi/pijma-core'

injectGlobal(fonts, reset, {
  'html, body, #app': {
    height: '100%',
    position: 'relative',
  },
  body: {
    backgroundColor: theme.orange.color.gray.lightest,
    fontFamily: theme.orange.font.family,
    fontWeight: 300,
    lineHeight: 1,
    overflowY: 'scroll',
  },
})
