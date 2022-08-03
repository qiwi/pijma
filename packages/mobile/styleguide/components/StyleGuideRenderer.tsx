import {
  applyDefaultClickHandler,
  cache,
  CacheProvider,
  Card,
  Flex,
  FlexItem,
  fonts,
  Global,
  Header,
  Icon,
  reset,
  ThemeProvider,
  themes,
} from '@qiwi/pijma-mobile'
import React, { FC, ReactNode } from 'react'

applyDefaultClickHandler()

if (screen.width < 360) {
  document.querySelector<HTMLMetaElement>('meta[name=viewport]')!.content =
    'width=360, shrink-to-fit=no'
}

interface StyleGuideRendererProps {
  title: ReactNode
  toc: ReactNode
  hasSidebar: boolean
  children?: ReactNode
}

const StyleGuideRenderer: FC<StyleGuideRendererProps> = (props) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={themes.orange}>
      <Global
        styles={[
          reset,
          fonts,
          {
            body: {
              minWidth: '360px !important',
            },
          },
        ]}
      />
      <Card bg="#f5f5f5" height={1}>
        <Header>
          <Flex height={1} px={4} align="center" justify="center">
            <FlexItem width={8} height={8} shrink={0} align="center">
              <Icon name="qiwi" color="#ff8c00" size={1} />
            </FlexItem>
          </Flex>
        </Header>
        <Card bg="#f5f5f5" px={4} py={6}>
          {props.children}
        </Card>
        <Card as="footer" px={4} py={6}>
          {props.toc}
        </Card>
      </Card>
    </ThemeProvider>
  </CacheProvider>
)

export default StyleGuideRenderer
