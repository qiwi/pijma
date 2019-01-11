import React, {FC} from 'react'

import {themes, ThemeProvider, applyDefaultClickHandler} from '@qiwi/pijma-core'

import {Link, LinkProps} from '@qiwi/pijma-desktop'

applyDefaultClickHandler((href, target) => window.open(href, target || '_self'))

const LinkRenderer: FC<LinkProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Link href={props.href}>
      {props.children}
    </Link>
  </ThemeProvider>
)

export default LinkRenderer
