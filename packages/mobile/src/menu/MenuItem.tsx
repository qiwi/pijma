import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, Icon, Box, Section} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

export interface MenuItemProps {
  title: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  round?: boolean
  hover?: boolean
  active?: boolean
  focus?: boolean
}

export const MenuItem: FC<MenuItemProps> = (props) => (
  <Section
    active={props.active}
    focus={props.focus}
    hover={props.hover}
    flat={!props.round}
    {...props}
  >
    <Flex px={6} py={2} minHeight={14}>
      {props.icon ? (
        <FlexItem align={props.notes ? undefined : 'center'} shrink={0} mr={4}>
          {props.icon}
        </FlexItem>
      ) : (
        null
      )}
      <FlexItem align="center" grow={1}>
        <Flex justify="center" direction="column">
          <Paragraph clamp={props.icon && !props.notes ? 2 : undefined} bold>{props.title}</Paragraph>
          {props.notes ? (
            <Box mt={1}>
              <Paragraph size="s" color="support">
                {props.notes}
              </Paragraph>
            </Box>
          ) : (
            null
          )}
        </Flex>
      </FlexItem>
      {props.submenu ? (
        <FlexItem align="center" shrink={0} width={6} height={6} ml={3}>
          <Icon name="angle-right"/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
  </Section>
)
