import React, {forwardRef, Ref} from 'react'

import {LinkControl, Lnk, Flex, Pos, Card, LinkControlProps} from '@qiwi/pijma-core'

import {Text} from '../typography'

export interface HeaderMenuItemProps {
  tabIndex?: number
  href?: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['target']
  rel?: LinkControlProps['rel']
  title?: string
  active?: boolean
  ref?: Ref<HTMLAnchorElement>
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

const PosLink = Pos.withComponent(Lnk)

export const HeaderMenuItem = forwardRef<HTMLAnchorElement, HeaderMenuItemProps>((props, ref) => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={renderProps => (
      <PosLink
        as={props.href ? 'a' : undefined}
        ref={ref}
        height={1}
        type="relative"
        display="block"
        cursor="pointer"
        tabIndex={props.tabIndex}
        href={props.href}
        target={props.href ? props.target : undefined}
        download={props.href ? props.download : undefined}
        rel={props.href ? props.rel : undefined}
        title={props.href ? props.title : undefined}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
      >
        <Flex height={1} direction="column" align="middle" justify="center">
          <Text
            bold
            color={renderProps.hover || renderProps.focus ? 'warning' : 'default'}
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            decoration="none"
          >
            {props.title}
          </Text>
        </Flex>
        {props.active ? (
          <Pos type="absolute" height="4px" bottom={0} right={0} left={0}>
            <Card bg="#ff8c00" height={1} width={1} rtr={4} rtl={4}/>
          </Pos>
        ) : null}
      </PosLink>
    )}
  />
))

HeaderMenuItem.defaultProps = {
  active: false,
}
