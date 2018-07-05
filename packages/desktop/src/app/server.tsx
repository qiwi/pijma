import React from 'react'
import {ThemeProvider} from 'emotion-theming'

import {themes} from '@qiwi/pijma-core'

import App from './App'
import Html from './Html'
import HtmlProps from './HtmlProps'

const server = (props: HtmlProps) => (
  <ThemeProvider theme={themes.orange}>
    <Html {...props}>
    <App/>
    </Html>
  </ThemeProvider>
)

export default server
