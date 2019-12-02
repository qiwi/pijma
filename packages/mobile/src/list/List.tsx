import React, {FunctionComponent, ReactNode} from 'react'

import {Box, Card, Flex, FlexItem, Stub} from '@qiwi/pijma-core'
import {Paragraph, Text} from '../typography'

export interface ListProps {
  children: ReactNode[]
  type: 'step' | 'number' | 'bullet'
  size?: 's' | 'm' | 'l'
  stub?: boolean
}

const ListType: Record<NonNullable<ListProps['type']>, keyof JSX.IntrinsicElements> = {
  step: 'ol',
  number: 'ol',
  bullet: 'ul',
}

const ListItemYMargin: Record<NonNullable<ListProps['type']>, number> = {
  step: 2,
  number: 0,
  bullet: 0,
}

const ItemIndent: Record<NonNullable<ListProps['type']>, number> = {
  step: 2,
  number: 4,
  bullet: 4,
}

const SpaceSize: Record<NonNullable<ListProps['size']>, number> = {
  s: 2,
  m: 3,
  l: 4,
}

const LetterSize: Record<NonNullable<ListProps['size']>, number> = {
  s: 2,
  m: 2.5,
  l: 3,
}

const StubItemIndent: Record<NonNullable<ListProps['size']>, number> = {
  s: 1.5,
  m: 1.75,
  l: 2.5,
}

export const List: FunctionComponent<ListProps> = ({stub = false, type, size = 'm', children}) => (
  <Box as={ListType[type]}>
    {(stub ? [0, 0] : (children)).map((item, index, array) => (
      <Flex key={index} as="li" mt={index > 0 ? ItemIndent[type] : 0}>
        {type === 'number' ? (
          <FlexItem width={String(children.length).length * LetterSize[size] + SpaceSize[size]} shrink={0}>
            {stub ? (
              <Stub
                height={LetterSize[size]}
                width={LetterSize[size]}
                r={LetterSize[size] * 2}
                top={StubItemIndent[size]}
                bottom={StubItemIndent[size]}
              />
            ) : (
              <Text size={size} bold={false}>{index + 1}.</Text>
            )}
          </FlexItem>
        ) : type === 'bullet' ? (
          <FlexItem width={5} shrink={0}>
            {stub ? (
              <Stub
                height={LetterSize[size]}
                width={LetterSize[size]}
                r={LetterSize[size] * 2}
                top={StubItemIndent[size]}
                bottom={StubItemIndent[size]}
              />
            ) : (
              <Text size={size} bold={false}>&#8226;</Text>
            )}
          </FlexItem>
        ) : type === 'step' ? (
          <Flex direction="column" height="auto" mr={4}>
            <FlexItem shrink={0}>
              {stub ? (
                <Stub height={10} width={10} r={20}/>
              ) : (
                <Card bg="#F5F5F5" r="50%" height={10} width={10}>
                  <Flex align="center" justify="center" height={1} width={1}>
                    <Text size={size} bold>
                      {index + 1}
                    </Text>
                  </Flex>
                </Card>
              )}
            </FlexItem>
            {index + 1 === array.length ? (
              null
            ) : (
              <FlexItem height={1} minHeight={2} align="center" justify="center" mt={2}>
                {stub ? (
                  <Stub height={1} width="4px"/>
                ) : (
                  <Card bg="#F5F5F5" height={1} width="4px"/>
                )}
              </FlexItem>
            )}
          </Flex>
        ) : (
          null
        )}
        <FlexItem mt={ListItemYMargin[type]} width={1}>
          {stub ? (
            type === 'step' ? (
              <Paragraph size={size} stub/>
            ) : (
              <Box width={1} maxWidth={33}>
                <Text display="block" size={size} stub/>
              </Box>
            )
          ) : (
            typeof item === 'string' ? (
              <Paragraph size={size}>{item}</Paragraph>
            ) : (
              item
            )
          )}
        </FlexItem>
      </Flex>
    ))}
  </Box>
)
