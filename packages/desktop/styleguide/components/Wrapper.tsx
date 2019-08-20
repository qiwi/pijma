import React, {FC} from 'react'

import {themes, ThemeProvider} from '@qiwi/pijma-core'

const Wrapper: FC = (props) => (
  <ThemeProvider theme={themes.orange}>
    {props.children}
  </ThemeProvider>
)

export default Wrapper
