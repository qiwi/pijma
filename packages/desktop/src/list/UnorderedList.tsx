import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex, Card} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface UnorderedListProps {
  children: ReactNode[]
}

export const UnorderedList: FunctionComponent<UnorderedListProps> = props => (
  <Box as="ul">
    {props.children.map((item, index) => (
      <Flex
        key={index}
        mt={index > 0 ? 4 : undefined}
        as="li"
      >
        <Card
          mr={3}
          my="9px"
          width="6px"
          minWidth="6px"
          height="6px"
          bg="#000"
          r="50%"
        />
        {typeof item === 'string' ? (
          <Paragraph size="m">{item}</Paragraph>
        ) : (
          item
        )}
      </Flex>
    ))}
  </Box>
)
