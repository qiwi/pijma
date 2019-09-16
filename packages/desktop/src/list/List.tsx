import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Card, Flex, FlexItem} from '@qiwi/pijma-core'
import {Paragraph, Text} from '../typography'

export interface ListProps {
  children: ReactNode[]
  type: 'step' | 'number' | 'bullet'
  size?: 's' | 'm' | 'l'
}
const ListType: {
  [type in NonNullable<ListProps['type']>]: keyof JSX.IntrinsicElements
} = {
  step: 'ol',
  number: 'ol',
  bullet: 'ul',
}

const ListItemYMargin: {[type in NonNullable<ListProps['type']>]: number} = {
  step: 2,
  number: 0,
  bullet: 0,
}

const ItemIndent: {[type in NonNullable<ListProps['type']>]: number} = {
  step: 3,
  number: 4,
  bullet: 4,
}

const SpaceSize: {[size in NonNullable<ListProps['size']>]: number} = {
  s: 2,
  m: 3,
  l: 4,
}

const LetterSize: {[size in NonNullable<ListProps['size']>]: number} = {
  s: 2,
  m: 2.5,
  l: 3,
}

export const List: FunctionComponent<ListProps> = ({type, size = 'm', children}) => (
  <Box as={ListType[type]} role="list">
    {children.map((item, index) => (
      <Flex key={index} as="li" mt={index > 0 ? ItemIndent[type] : 0}>
        {type === 'number' ? (
          <FlexItem width={String(children.length).length * LetterSize[size] + SpaceSize[size]} shrink={0}>
            <Text size={size} bold={false}>{index + 1}.</Text>
          </FlexItem>
        ) : type === 'bullet' ? (
          <FlexItem width={5} shrink={0}>
            <Text size={size} bold={false}>&#8226;</Text>
          </FlexItem>
        ) : type === 'step' ? (
          <Flex direction="column" height="auto" mr={5}>
            <FlexItem shrink={0}>
              <Card bg="#F5F5F5" r="50%" height={10} width={10}>
                <Flex align="center" justify="center" height={1} width={1}>
                  <Text size={size} bold>
                    {index + 1}
                  </Text>
                </Flex>
              </Card>
            </FlexItem>
            {index + 1 === children.length ? (
              null
            ) : (
              <FlexItem height={1} minHeight={3} align="center" justify="center" mt={3}>
                <Card bg="#F5F5F5" height={1} width="4px"/>
              </FlexItem>
            )}
          </Flex>
        ) : (
          null
        )}
        <Box my={ListItemYMargin[type]}>
          {typeof item === 'string' ? (
            <Paragraph size={size}>{item}</Paragraph>
          ) : (
            item
          )}
        </Box>
      </Flex>
    ))}
  </Box>
)
