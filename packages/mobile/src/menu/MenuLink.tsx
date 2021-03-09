import React, {FC, ReactNode} from 'react'

import {styled, LinkControl, LinkControlProps, Lnk} from '@qiwi/pijma-core'

import {MenuItem} from '../menu'

export interface MenuLinkProps {
  title: string
  notes?: string
  icon?: ReactNode
  submenu?: boolean
  active?: boolean
  tabIndex?: number
  href?: LinkControlProps['href']
  target?: LinkControlProps['target']
  download?: LinkControlProps['download']
  rel?: LinkControlProps['rel']
  size?: 's' | 'm'
  attention?: boolean
  stub?: boolean
  onClick?: LinkControlProps['onClick']
  onFocus?: LinkControlProps['onFocus']
  onBlur?: LinkControlProps['onBlur']
}

const MenuItemLnk = styled(Lnk)().withComponent(MenuItem)

export const MenuLink: FC<MenuLinkProps> = (props) => (
  props.stub ? (
    <MenuItem
      stub
      text={props.title}
      notes={props.notes}
      icon={props.icon}
      submenu={props.submenu}
      size={props.size}
    />
  ) : (
    <LinkControl
      href={props.href}
      target={props.target}
      download={props.download}
      rel={props.rel}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      children={(renderProps) => (
        <MenuItemLnk
          as={props.href ? 'a' : undefined}
          notes={props.notes}
          text={props.title}
          icon={props.icon}
          submenu={props.submenu}
          active={props.active ? props.active : renderProps.active}
          hover={renderProps.hover}
          focus={renderProps.focus}
          tabIndex={props.tabIndex}
          href={props.href}
          title={props.href ? props.title : undefined}
          target={props.href ? props.target : undefined}
          download={props.href ? props.download : undefined}
          rel={props.href ? props.rel : undefined}
          size={props.size}
          attention={props.attention}
          onClick={renderProps.onClick}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
          onMouseUp={renderProps.onMouseUp}
          onMouseDown={renderProps.onMouseDown}
        />
      )}
    />
  )
)
