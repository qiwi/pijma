import { Box, Card, Flex, FlexItem, getDataProps, Stub } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

import { Paragraph, Text } from '../typography'

export interface ListProps {
  children: ReactNode[]
  type: 'step' | 'number' | 'bullet'
  size?: 's' | 'm' | 'l'
  stub?: boolean
}

const ListType: Record<NonNullable<ListProps['type']>, 'ol' | 'ul'> = {
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
  step: 3,
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

const StubNumberWidth: Record<NonNullable<ListProps['size']>, number> = {
  s: 2,
  m: 3,
  l: 3,
}

const StubNumberHeight: Record<NonNullable<ListProps['size']>, number> = {
  s: 2,
  m: 3,
  l: 3,
}

const StubNumberIndent: Record<NonNullable<ListProps['size']>, number> = {
  s: 1.5,
  m: 1.5,
  l: 2.5,
}

const StubBulletIndent: Record<NonNullable<ListProps['size']>, number> = {
  s: 1.5,
  m: 2,
  l: 3,
}

export const List: FC<ListProps> = ({
  stub = false,
  type,
  size = 'm',
  children,
  ...rest
}) => (
  <Box {...(stub ? {} : getDataProps(rest).data)} as={ListType[type]}>
    {(stub ? [0, 0] : children).map((item, index, array) => (
      <Flex key={index} as="li" mt={index > 0 ? ItemIndent[type] : 0}>
        {type === 'number' ? (
          <FlexItem
            width={
              String(children.length).length * LetterSize[size] +
              SpaceSize[size]
            }
            shrink={0}
          >
            {stub ? (
              <Stub
                height={StubNumberWidth[size]}
                width={StubNumberHeight[size]}
                top={StubNumberIndent[size]}
                bottom={StubNumberIndent[size]}
              />
            ) : (
              <Text size={size} bold={false}>
                {index + 1}.
              </Text>
            )}
          </FlexItem>
        ) : type === 'bullet' ? (
          <FlexItem width={5} shrink={0}>
            {stub ? (
              <Stub
                height={2}
                width={2}
                top={StubBulletIndent[size]}
                bottom={StubNumberIndent[size]}
              />
            ) : (
              <Text size={size} bold={false}>
                &#8226;
              </Text>
            )}
          </FlexItem>
        ) : type === 'step' ? (
          <Flex direction="column" height="auto" mr={5}>
            <FlexItem shrink={0}>
              {stub ? (
                <Stub height={10} width={10} r={20} />
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
            {index + 1 === array.length ? null : (
              <FlexItem
                height={1}
                minHeight={3}
                align="center"
                justify="center"
                mt={3}
              >
                {stub ? (
                  <Stub height={1} width="4px" />
                ) : (
                  <Card bg="#F5F5F5" height={1} width="4px" />
                )}
              </FlexItem>
            )}
          </Flex>
        ) : null}
        <FlexItem my={ListItemYMargin[type]} width={1}>
          {stub ? (
            type === 'step' ? (
              <Paragraph size={size} stub />
            ) : (
              <Box width={1} maxWidth={33}>
                <Text display="block" size={size} stub />
              </Box>
            )
          ) : typeof item === 'string' ? (
            <Paragraph size={size}>{item}</Paragraph>
          ) : (
            item
          )}
        </FlexItem>
      </Flex>
    ))}
  </Box>
)

List.displayName = 'List'
