import React, {forwardRef, ReactNode} from 'react'

import {Flex, FlexItem, Icon, Box, Section, Stub} from '@qiwi/pijma-core'

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
  stub?: boolean
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(({
  text,
  notes,
  icon,
  stub,
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
        stub ? (
          <Box mr={4}>
            <Stub r={12} width={6} height={6}/>
          </Box>
        ) : (
          <FlexItem align={notes ? undefined : 'center'} shrink={0} mr={4}>
            {icon}
          </FlexItem>
        )
      ) : (
        null
      )}
      <FlexItem align="center" grow={1}>
        <Flex justify="center" direction="column">
          {stub ? (
            <Box width={80} maxWidth={1}>
              <Paragraph stub clamp={icon ? 1 : undefined}/>
            </Box>
          ) : (
            <Paragraph clamp={icon && !notes ? 2 : undefined} bold>{text}</Paragraph>
          )}
          {notes ? (
            stub ? (
              <Box mt={1} width={100} maxWidth={1}>
                <Paragraph size="s" stub clamp={1}/>
              </Box>
            ) : (
              <Box mt={1}>
                <Paragraph size="s" color="support">
                  {notes}
                </Paragraph>
              </Box>
            )
          ) : (
            null
          )}
        </Flex>
      </FlexItem>
      {submenu ? (
        stub ? (
          <FlexItem align="center" shrink={0} width={6} height={6} ml={3}>
            <Stub width={6} height={6}/>
          </FlexItem>
        ) : (
          <FlexItem align="center" shrink={0} width={6} height={6} ml={3}>
            <Icon name="angle-right"/>
          </FlexItem>
        )
      ) : (
        null
      )}
    </Flex>
  </Section>
))
