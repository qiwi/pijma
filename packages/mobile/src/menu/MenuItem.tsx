import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, Lnk, Card, LinkControl, LinkControlProps, Icon, Box} from '@qiwi/pijma-core'

import {Paragraph} from '../typography'

export interface MenuItemProps {
  text: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

const CardLink = Card.withComponent(Lnk)

export const MenuItem: FC<MenuItemProps> = (props) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <CardLink
        bg={renderProps.hover || renderProps.focus || renderProps.active ? '#f5f5f5' : undefined}
        cursor="pointer"
        display="block"
        r={10}
        px={4}
        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        tabIndex={props.tabIndex}
        href={props.href}
        title={props.title}
        target={props.target}
        download={props.download}
        rel={props.rel}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
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
      </CardLink>
    )}
  />
)
