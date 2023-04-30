import React, { forwardRef, ReactNode } from 'react'

import {
  Box,
  Flex,
  FlexItem,
  getDataProps,
  Icon,
  Image,
  omitDataProps,
  Section,
  Stub,
} from '@qiwi/pijma-core'

import { Paragraph, Text } from '../typography'

export interface MenuItemProps {
  tag?: keyof JSX.IntrinsicElements
  text: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  round?: boolean
  hover?: boolean
  active?: boolean
  focus?: boolean
  size?: 's' | 'm'
  stub?: boolean
}

const IconSize: Record<NonNullable<MenuItemProps['size']>, number> = {
  s: 6,
  m: 12,
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      tag = 'div',
      text,
      notes,
      icon,
      submenu = false,
      round = false,
      hover = false,
      active = false,
      focus = false,
      size = 's',
      stub = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <Section
        tag={tag}
        ref={ref}
        active={active}
        focus={focus}
        hover={hover}
        flat={!round}
        {...(stub ? {} : getDataProps(rest))}
        {...omitDataProps(rest)}
      >
        <Flex px={6} py={2} minHeight={14}>
          {icon ? (
            stub ? (
              <FlexItem align={notes ? undefined : 'center'} shrink={0} mr={4}>
                <Stub
                  r={IconSize[size] * 2}
                  width={IconSize[size]}
                  height={IconSize[size]}
                />
              </FlexItem>
            ) : (
              <FlexItem align={notes ? undefined : 'center'} shrink={0} mr={4}>
                {typeof icon === 'string' ? (
                  <Image
                    src={icon}
                    width={IconSize[size]}
                    height={IconSize[size]}
                  />
                ) : (
                  icon
                )}
              </FlexItem>
            )
          ) : null}
          <FlexItem align="center" grow={1}>
            <Flex justify="center" direction="column">
              {stub ? (
                <Box maxWidth={38} width={1}>
                  <Text display="block" size="m" stub />
                </Box>
              ) : (
                <Paragraph clamp={icon && !notes ? 2 : undefined} bold>
                  {text}
                </Paragraph>
              )}
              {notes ? (
                stub ? (
                  <Box mt={1} width={1} maxWidth={18}>
                    <Text display="block" size="s" stub />
                  </Box>
                ) : (
                  <Box mt={1}>
                    <Paragraph size="s" color="support">
                      {notes}
                    </Paragraph>
                  </Box>
                )
              ) : null}
            </Flex>
          </FlexItem>
          {submenu ? (
            <FlexItem align="center" shrink={0} width={6} height={6} ml={3}>
              <Icon name="angle-right" />
            </FlexItem>
          ) : null}
        </Flex>
      </Section>
    )
  },
)

MenuItem.displayName = 'MenuItem'
