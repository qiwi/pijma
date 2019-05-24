// const FooterLink = styled(Anchor)(({theme}) => ({
//   fontWeight: 300,
//   display: 'inline-block',
// }))

import React, {FC} from 'react'

import {LinkControl, Lnk, Typo} from '@qiwi/pijma-core'

export interface FooterLinkProps {
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
}

const NavLink = Typo.withComponent(Lnk)

export const FooterLink: FC<FooterLinkProps> = (props) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={(renderProps) => (
      <NavLink
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
        color={renderProps.hover || renderProps.focus ? '#333' : '#666'}
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        cursor="pointer"
        decoration="none"
        target={props.target}
        download={props.download}
        rel={props.rel}
        title={props.title}
        size={3.5}
        height={4}
        children={props.children}
      />
    )}
  />
)
