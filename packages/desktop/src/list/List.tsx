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

const ListItemTopMargin: {[type in NonNullable<ListProps['type']>]: number} = {
  step: 2,
  number: 0,
  bullet: 0,
}

export const List: FunctionComponent<ListProps> = props => (
  <Box as={ListType[props.type]}>
    {props.children.map((item, index) => (
      <Flex key={index} mt={index > 0 ? 4 : undefined} as="li">
        {props.type === 'number' ? (
          <Box mr={3}>
            <Paragraph size="m">{index + 1}.</Paragraph>
          </Box>
        ) : props.type === 'bullet' ? (
          <Box mr={3} width={2}>
            <Paragraph size="m">&#8226;</Paragraph>
          </Box>
        ) : props.type === 'step' ? (
          <FlexItem mr={4} height="auto" width={10} shrink={0}>
            <Card display="flex" bg="#F5F5F5" r="50%" height={10} width={10}>
              <Box m="auto">
                <Paragraph size="m" bold>
                  {index + 1}
                </Paragraph>
              </Box>
            </Card>
            {index + 1 === props.children.length ? null : (
              <Box width="4px" height="calc(100% - 40px)" mx="auto" mt={2}>
                <Card bg="#F5F5F5" width={1} height={1} />
              </Box>
            )}
          </FlexItem>
        ) : null}
        <Box mt={ListItemTopMargin[props.type]}>
          {typeof item === 'string' ? (
            <Paragraph size="m">{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </Flex>
    ))}
  </Box>
)
