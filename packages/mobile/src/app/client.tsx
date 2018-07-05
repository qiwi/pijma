import React from 'react'
import {render} from 'react-dom'
import {ThemeProvider} from 'emotion-theming'

import {theme} from '@qiwi/pijma-core'

import App from './App'

const client = () => render(
  <ThemeProvider theme={theme.orange}>
    <App/>
  </ThemeProvider>,
  document.getElementById('app'),
)

export default client
