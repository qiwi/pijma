import React, {FC} from 'react'

import {themes, reset, fonts, injectGlobal, ThemeProvider, applyDefaultClickHandler} from '@qiwi/pijma-core'

injectGlobal(fonts, reset, {
  '#rsg-root': {
    height: '100%',
    minHeight: '100%',
  },
  html: {
    height: '100%',
    minHeight: '100%',
  },
  body: {
    // fontFamily: themes.orange.font.family,
    // fontWeight: 300,
    // lineHeight: 1,
    minWidth: '1024px !important',
    overflowY: 'scroll',
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
