import React, {FC, ReactNode} from 'react'

import {LinkControl, LinkControlProps, Lnk, styled} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'

export interface MenuLinkProps {
  text: string
  notes?: string
  hover?: boolean
  icon?: ReactNode
  submenu?: boolean
  round?: boolean
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

const MenuItemLink = styled(Lnk)().withComponent(MenuItem)

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
      <MenuItemLink
        text={props.text}
        notes={props.notes}
        icon={props.icon}
        submenu={props.submenu}
        round={props.round}
        active={renderProps.active}
        hover={renderProps.hover}
        focus={renderProps.focus}
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        target={props.target}
        download={props.download}
      />
    )}
  />
)
