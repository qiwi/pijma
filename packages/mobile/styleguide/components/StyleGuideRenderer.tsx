import React, {FC, ReactNode} from 'react'

import {themes, ThemeProvider, Card} from '@qiwi/pijma-core'

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
