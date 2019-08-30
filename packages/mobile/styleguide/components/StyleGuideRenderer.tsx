import React, {FC, ReactNode} from 'react'

import {themes, ThemeProvider, Card, fonts, reset, injectGlobal, applyDefaultClickHandler} from '@qiwi/pijma-core'

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

if (screen.width < 360) {
  document.querySelector<HTMLMetaElement>('meta[name=viewport]')!.content = 'width=360, shrink-to-fit=no'
}

interface StyleGuideRendererProps {
  title: ReactNode
  toc: ReactNode
  hasSidebar: boolean
}

const StyleGuideRenderer: FC<StyleGuideRendererProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    <Card bg="#f5f5f5" height={1}>
      <Card key="toc">
        {props.toc}
      </Card>
      <Card bg="#f5f5f5" px={4} py={6}>
        {props.children}
      </Card>
    </Card>
  </ThemeProvider>
)

export default StyleGuideRenderer
