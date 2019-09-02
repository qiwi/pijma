import React, {FC, ReactNode} from 'react'

import {Spacer, Flex, FlexItem, Box} from '@qiwi/pijma-core'

interface PlaygroundRendererProps {
  name: string
  preview: ReactNode
  tabButtons: ReactNode
  tabBody: ReactNode
  toolbar: ReactNode
}

const PlaygroundRenderer: FC<PlaygroundRendererProps> = (props) => (
  <Box mt={5} mb={12}>
    <Spacer size="m">
      {props.preview}
      <Flex>
        <FlexItem>
          {props.tabButtons}
        </FlexItem>
        <FlexItem ml="auto">
          {props.toolbar}
        </FlexItem>
      </Flex>
      {props.tabBody}
    </Spacer>
  </Box>
)

export default PlaygroundRenderer
