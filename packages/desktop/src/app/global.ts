import {injectGlobal} from 'emotion'

import {themes, reset, fonts} from '@qiwi/pijma-core'

injectGlobal(fonts, reset, {
  'html, body, #app': {
    height: '100%',
    position: 'relative',
  },
  body: {
    backgroundColor: themes.orange.color.gray.lightest,
    fontFamily: themes.orange.font.family,
    fontWeight: 300,
    lineHeight: 1,
    overflowY: 'scroll',
  },
})
