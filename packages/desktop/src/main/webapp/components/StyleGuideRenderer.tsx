import React, { FC, ReactNode } from 'react'

import {
  applyDefaultClickHandler,
  Box,
  cache,
  CacheProvider,
  Card,
  Flex,
  FlexItem,
  fonts,
  Global,
  Icon,
  reset,
  ThemeProvider,
  themes,
} from '../../ts'

applyDefaultClickHandler()

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
              minWidth: '1024px !important',
            },
          },
        ]}
      />
      {props.hasSidebar ? (
        <Flex minWidth={305} minHeight={1}>
          <FlexItem width="calc(320px + (100% - 1180px) / 2)">
            <Card width={1} height={1} bg="#fff">
              <Box width={80} ml="auto" py={15} pr={15}>
                <Box width={13} height={13} mb={10}>
                  <Icon name="qiwi" color="#ff8c00" size={1} />
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
  </CacheProvider>
)

export default StyleGuideRenderer
