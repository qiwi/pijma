import React, {SFC} from 'react'

import {reset, fonts, injectGlobal, ThemeProvider} from '@qiwi/pijma-core'
import {themes} from '@qiwi/pijma-desktop'

injectGlobal(fonts, reset, {
  body: {
    fontFamily: themes.orange.font.family,
    fontWeight: 300,
    lineHeight: 1,
    minWidth: '1024px !important',
  },
})

const Wrapper: SFC = (props) => (
  <ThemeProvider theme={themes.orange}>
    {props.children}
  </ThemeProvider>
)

export default Wrapper
