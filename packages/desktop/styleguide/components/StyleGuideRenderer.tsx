import React, {FC, ReactNode} from 'react'

import {themes, ThemeProvider, Flex, FlexItem, Card, Box, IconWrapper, Icon} from '@qiwi/pijma-core'

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
                <IconWrapper color="#ff8c00">
                  <Icon name="qiwi"/>
                </IconWrapper>
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
