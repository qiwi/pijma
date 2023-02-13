import React, { FC, ReactNode } from 'react'

import { ThemeProvider, themes } from '@qiwi/pijma-core'

interface WrapperProps {
  children?: ReactNode
}

const Wrapper: FC<WrapperProps> = (props) => (
  <ThemeProvider theme={themes.orange}>{props.children}</ThemeProvider>
)

export default Wrapper
