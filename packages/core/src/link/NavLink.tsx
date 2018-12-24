import React, {FC} from 'react'

import LinkControl from './LinkControl'
import {Link} from "@qiwi/pijma-core"

export interface NavLinkProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  color: 'default' | 'support'
}

const linkColor: { [color in NavLinkProps['color']]: string } = {
  default: '#000',
  support: '#666',
}

const linkColorHover: { [color in NavLinkProps['color']]: string } = {
  default: '#FF8C00',
  support: '#000',
}


export const NavLink: FC<NavLinkProps> = (props) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <Link
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onFocus}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        color={renderProps.hover ? linkColorHover[props.color] : linkColor[props.color]}
        transition="color 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        target={props.target}
        children={props.children}
      />
    )}
  />
)

NavLink.defaultProps = {
  color: 'default'
}
