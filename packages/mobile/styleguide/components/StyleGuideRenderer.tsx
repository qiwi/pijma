import React, {FC, ReactNode} from 'react'

import {cache, themes, fonts, reset, applyDefaultClickHandler, CacheProvider, ThemeProvider, Global, Card} from '@qiwi/pijma-mobile'

import '@qiwi/pijma-fonts'

applyDefaultClickHandler()

if (screen.width < 360) {
  document.querySelector<HTMLMetaElement>('meta[name=viewport]')!.content = 'width=360, shrink-to-fit=no'
}

interface StyleGuideRendererProps {
  title: ReactNode
  toc: ReactNode
  hasSidebar: boolean
}

const StyleGuideRenderer: FC<StyleGuideRendererProps> = (props) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={themes.orange}>
      <Global styles={[reset, fonts, {
        body: {
          minWidth: '360px !important',
        },
      }]}/>
      <Card bg="#f5f5f5" height={1}>
        <Card key="toc">
          {props.toc}
        </Card>
        <Card bg="#f5f5f5" px={4} py={6}>
          {props.children}
        </Card>
      </Card>
    </ThemeProvider>
  </CacheProvider>
)

export default StyleGuideRenderer
