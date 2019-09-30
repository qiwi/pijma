import React, {FC} from 'react'

import {Lnk, Card, LinkControl, LinkControlProps} from '@qiwi/pijma-core'

export interface MenuLinkProps {
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

export const MenuLink: FC<MenuLinkProps> = (props) => (
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
        bg={renderProps.active ? '#e6e6e6' : renderProps.hover || renderProps.focus ? '#f5f5f5' : undefined}
        cursor="pointer"
        display="block"
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
        children={props.children}
      />
    )}
  />
)
