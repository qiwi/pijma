import { ThemeProvider, themes } from '@qiwi/pijma-core'
import React, { FC } from 'react'

const Wrapper: FC = (props) => (
  <ThemeProvider theme={themes.orange}>{props.children}</ThemeProvider>
)

export default Wrapper
