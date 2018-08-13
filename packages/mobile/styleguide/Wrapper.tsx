import React, {SFC} from 'react'
import {injectGlobal} from 'emotion'
import {ThemeProvider} from 'emotion-theming'

import {themes, reset, fonts} from '@qiwi/pijma-core'

injectGlobal(fonts, reset, {
  body: {
    fontFamily: themes.orange.font.family,
    fontWeight: 300,
    lineHeight: 1,
  },
})

const Wrapper: SFC = (props) => (
  <ThemeProvider theme={themes.orange}>
    {props.children}
  </ThemeProvider>
)

export default Wrapper
