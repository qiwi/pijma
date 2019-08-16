import React, {FC} from 'react'

import {themes, reset, fonts, injectGlobal, ThemeProvider, applyDefaultClickHandler} from '@qiwi/pijma-core'

injectGlobal(fonts, reset, {
  '#rsg-root': {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
  html: {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  },
  body: {
    width: '100%',
    minWidth: '360px !important',
    height: '100%',
    minHeight: '100%',
  },
})

applyDefaultClickHandler((href, target, download) => {
  if (download && href) {
    const a = document.createElement('a')
    a.download = typeof download === 'string' ? download : ''
    a.href = href
    a.target = target || '_blank'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  else {
    window.open(href, target || '_self')
  }
})

const Wrapper: FC = (props) => (
  <ThemeProvider theme={themes.orange}>
    {props.children}
  </ThemeProvider>
)

export default Wrapper
