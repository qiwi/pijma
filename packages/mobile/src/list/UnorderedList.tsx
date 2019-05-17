import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Flex, Card} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface UnorderedListProps<I> {
  items: I[]
}

const BoxUl = Flex.withComponent('ul')
const FlexLi = Box.withComponent('li')

export const UnorderedList: FunctionComponent<
  UnorderedListProps<ReactNode>
> = props => (
  <BoxUl>
    {props.items.map((item, index) => (
      <FlexLi key={index} mb={index + 1 === props.items.length ? undefined : 4} display="flex">
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
      </FlexLi>
    ))}
  </BoxUl>
)
