import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, Icon, Box} from '@qiwi/pijma-core'

import {MenuLink, MenuLinkProps} from './MenuLink'

import {Paragraph} from '../typography'

export interface MenuItemProps extends MenuLinkProps {
  text: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
}

export const MenuItem: FC<MenuItemProps> = (props) => (
  <MenuLink
    tabIndex={props.tabIndex}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    title={props.title}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
  >
    <Flex py={2} minHeight={14}>
      {props.icon ? (
        <FlexItem align={props.notes ? undefined : 'center'} shrink={0} mr={4}>
          {props.icon}
        </FlexItem>
      ) : (
        null
      )}
      <FlexItem align="center" grow={1}>
        <Flex justify="center" direction="column">
          <Paragraph clamp={props.icon && !props.notes ? 2 : undefined} bold>{props.text}</Paragraph>
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
  </MenuLink>
)
