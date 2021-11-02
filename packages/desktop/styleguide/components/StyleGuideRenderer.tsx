import React, {FC, ReactNode} from 'react'

import {themes, ThemeProvider, Flex, FlexItem, Card, Box, Icon, injectGlobal, reset, applyDefaultClickHandler} from '@qiwi/pijma-core'

import '@qiwi/pijma-fonts'

injectGlobal(reset, {
  '#rsg-root': {
    height: '100%',
    minHeight: '100%',
  },
  html: {
    height: '100%',
    minHeight: '100%',
  },
  body: {
    minWidth: '1024px !important',
    overflowY: 'scroll',
    height: '100%',
    minHeight: '100%',
  },
})

applyDefaultClickHandler()

interface StyleGuideRendererProps {
  title: ReactNode
  toc: ReactNode
  hasSidebar: boolean
}

const StyleGuideRenderer: FC<StyleGuideRendererProps> = (props) => (
  <ThemeProvider theme={themes.orange}>
    {props.hasSidebar ? (
      <Flex minWidth={305} minHeight={1}>
        <FlexItem width="calc(320px + (100% - 1180px) / 2)">
          <Card width={1} height={1} bg="#fff">
            <Box width={80} ml="auto" py={15} pr={15}>
              <Box width={13} height={13} mb={10}>
                <Icon name="qiwi" color="#ff8c00" size={1}/>
              </Box>
              {props.toc}
            </Box>
          </Card>
        </FlexItem>
        <FlexItem width="calc(860px + (100% - 1180px) / 2)">
          <Card width={1} height={1} bg="#f5f5f5">
            <Box width={215} mr="auto" py={15} pl={15}>
              {props.children}
            </Box>
          </Card>
        </FlexItem>
      </Flex>
    ) : (
      <Card minHeight={1} bg="#f5f5f5">
        <Box width={305} mx="auto" px={5} py={15}>
          {props.children}
        </Box>
      </Card>
    )}
  </ThemeProvider>
)

export default StyleGuideRenderer
