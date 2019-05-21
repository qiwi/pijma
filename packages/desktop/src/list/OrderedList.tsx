import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface OrderedListProps {
  children: ReactNode[]
}
export const OrderedList: FunctionComponent<OrderedListProps> = props => (
  <Box as="ol">
    {props.children.map((item, index) => (
      <Flex
        key={index}
        mt={index > 0 ? 4 : undefined}
        as="li"
      >
        <Box mr={3}>
          <Paragraph size="m">{index + 1}.</Paragraph>
        </Box>
        {typeof item === 'string' ? (
          <Paragraph size="m">{item}</Paragraph>
        ) : (
          item
        )}
      </Flex>
    ))}
  </Box>
)
