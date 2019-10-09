import React, {forwardRef, ReactNode} from 'react'

import {Flex, FlexItem, Icon, Box, Section} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

export interface MenuItemProps {
  text: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  round?: boolean
  hover?: boolean
  active?: boolean
  focus?: boolean
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(({
  notes,
  icon,
  submenu = false,
  round = false,
  hover = false,
  active = false,
  focus = false,
  ...props
}, ref) => (
  <Section
    ref={ref}
    active={active}
    focus={focus}
    hover={hover}
    flat={!round}
    {...props}
  >
    <Flex px={6} py={2} minHeight={14}>
      {icon ? (
        <FlexItem align={notes ? undefined : 'center'} shrink={0} mr={4}>
          {icon}
        </FlexItem>
      ) : (
        null
      )}
      <FlexItem align="center" grow={1}>
        <Flex justify="center" direction="column">
          <Paragraph clamp={icon && !notes ? 2 : undefined} bold>{props.text}</Paragraph>
          {notes ? (
            <Box mt={1}>
              <Paragraph size="s" color="support">
                {notes}
              </Paragraph>
            </Box>
          ) : (
            null
          )}
        </Flex>
      </FlexItem>
      {submenu ? (
        <FlexItem align="center" shrink={0} width={6} height={6} ml={3}>
          <Icon name="angle-right"/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
  </Section>
))
