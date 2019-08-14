import React, {FC, ReactNode} from 'react'

import {Flex, FlexItem, Lnk, Card, LinkControl, LinkControlProps, RenderChild} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'
import {Paragraph} from '../typography'

export interface MenuItemProps {
  text: string
  notes: string
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
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
  }>
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
        <Flex align="center" minHeight={14}>
          {props.icon ? (
            <FlexItem shrink={0} width={6} height={6} mr={3}>
              {props.icon}
            </FlexItem>
          ) : (
            null
          )}
          <FlexItem grow={1}>
            <Flex direction="column">
              <Paragraph bold>{props.text}</Paragraph>
              {props.notes ? (
                <Paragraph size="s" color="support">
                  {props.notes}
                </Paragraph>
              ) : (
                null
              )}
            </Flex>
          </FlexItem>
          {props.submenu ? (
            <FlexItem shrink={0} width={6} height={6} ml={3}>
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
