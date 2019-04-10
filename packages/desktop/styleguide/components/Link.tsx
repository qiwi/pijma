import React, {FC} from 'react'

import {themes, ThemeProvider} from '@qiwi/pijma-core'

import {Link, LinkProps} from '@qiwi/pijma-desktop'

const LinkRenderer: FC<LinkProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Link {...props}/>
  </ThemeProvider>
)

export default LinkRenderer
