import React, {FC} from 'react'

import {themes, ThemeProvider} from '@qiwi/pijma-core'

import {Link, LinkProps} from '@qiwi/pijma-mobile'

const LinkRenderer: FC<LinkProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Link href={props.href}>
      {props.children}
    </Link>
  </ThemeProvider>
)

export default LinkRenderer
