import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Paragraph} from '../typography'

export interface ListProps {
  children: ReactNode[]
  type: 'step' | 'number' | 'bullet'
}
const ListType: {
  [type in NonNullable<ListProps['type']>]: keyof JSX.IntrinsicElements
} = {
  step: 'ol',
  number: 'ol',
  bullet: 'ul',
}

const ListItemTopMargin: {
  [type in NonNullable<ListProps['type']>]: number
} = {
  step: 2,
  number: 0,
  bullet: 0,
}

const CardFlexItem = Card.withComponent(FlexItem)

const getBullet = (
  type: 'step' | 'number' | 'bullet',
  index: number,
  length: number,
) => {
  switch (type) {
    case 'number':
      return (
        <Box mr={3}>
          <Paragraph size="s">{index + 1}.</Paragraph>
        </Box>
      )
    case 'bullet':
      return (
        <CardFlexItem
          mr={3}
          my="7px"
          width="6px"
          height="6px"
          bg="#000"
          r="50%"
          shrink={0}
        />
      )
    case 'step':
      return (
        <FlexItem mr={3} height="auto" width={10} shrink={0}>
          <Card display="flex" bg="#F5F5F5" r="50%" height={10} width={10}>
            <Box m="auto">
              <Paragraph size="s" bold>
                {index + 1}
              </Paragraph>
            </Box>
          </Card>
          {index + 1 === length ? null : (
            <Box width="2px" height="calc(100% - 32px)" mx="auto" mt={1}>
              <Card bg="#F5F5F5" width={1} height={1} />
            </Box>
          )}
        </FlexItem>
      )
    default:
      return null
  }
}

export const List: FunctionComponent<ListProps> = props => (
  <Box as={ListType[props.type]}>
    {props.children.map((item, index) => (
      <Flex key={index} mt={index > 0 ? 4 : undefined} as="li">
        {getBullet(props.type, index, props.children.length)}
        <Box mt={ListItemTopMargin[props.type]}>
          {typeof item === 'string' ? (
            <Paragraph size="s">{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </Flex>
    ))}
  </Box>
)
