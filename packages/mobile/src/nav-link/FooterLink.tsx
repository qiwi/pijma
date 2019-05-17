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
  compact?: boolean
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  size?: 's' | 'm' | 'l'
}

const LinkSize: { [size in NonNullable<FooterLinkProps['size']>]: number } = {
  s: 3.5,
  m: 4,
  l: 5,
}

const LinkHeight: { [size in NonNullable<FooterLinkProps['size']>]: number } = {
  s: 5,
  m: 6,
  l: 8,
}

const LinkHeightCompact: { [size in NonNullable<FooterLinkProps['size']>]: number } = {
  s: 4,
  m: 5,
  l: 7,
}

const TypoLink = Typo.withComponent(Lnk)

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
      <TypoLink
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
        size={props.size === undefined ? undefined : props.compact ? LinkHeightCompact[props.size] : LinkSize[props.size]}
        height={props.size === undefined ? undefined : LinkHeight[props.size]}
        children={props.children}
      />
    )}
  />
)
