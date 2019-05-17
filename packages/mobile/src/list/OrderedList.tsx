import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface OrderedListProps<I> {
  items: I[]
}

const BoxUl = Flex.withComponent('ol')
const FlexLi = Box.withComponent('li')

export const OrderedList: FunctionComponent<
  OrderedListProps<ReactNode>
> = props => (
  <BoxUl>
    {props.items.map((item, index) => (
      <FlexLi
        key={index}
        mb={index + 1 === props.items.length ? undefined : 3}
        display="flex"
      >
        <Box mr={3}>
          <Paragraph size="s">{index + 1}.</Paragraph>
        </Box>
        {typeof item === 'string' ? (
          <Paragraph size="s">{item}</Paragraph>
        ) : (
          item
        )}
      </FlexLi>
    ))}
  </BoxUl>
)
