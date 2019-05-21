import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface OrderedListProps {
  children: ReactNode[]
}

const BoxUl = Flex.withComponent('ol')
const FlexLi = Box.withComponent('li')

export const OrderedList: FunctionComponent<OrderedListProps> = props => (
  <BoxUl>
    {props.children.map((item, index) => (
      <FlexLi
        key={index}
        mb={index + 1 === props.children.length ? undefined : 4}
        display="flex"
      >
        <Box mr={3}>
          <Paragraph size="m">{index + 1}.</Paragraph>
        </Box>
        {typeof item === 'string' ? (
          <Paragraph size="m">{item}</Paragraph>
        ) : (
          item
        )}
      </FlexLi>
    ))}
  </BoxUl>
)
