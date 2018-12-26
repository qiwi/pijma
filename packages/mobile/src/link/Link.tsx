import React, {FC} from 'react'

import {LinkControl, Typo} from '@qiwi/pijma-core'

export interface LinkProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  compact?: boolean
  href?: string
  target?: string
  download?: boolean
  size?: 's' | 'm' | 'l'
}

const LinkSize: { [size in NonNullable<LinkProps['size']>]: number } = {
  s: 3.5,
  m: 4,
  l: 5,
}

const LinkHeight: { [size in NonNullable<LinkProps['size']>]: number } = {
  s: 5,
  m: 6,
  l: 8,
}

const LinkHeightCompact: { [size in NonNullable<LinkProps['size']>]: number } = {
  s: 4,
  m: 5,
  l: 7,
}

const TypoLink = Typo.withComponent('a')

export const Link: FC<LinkProps> = (props) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <TypoLink
        tabIndex={props.tabIndex}
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onFocus}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        color={renderProps.hover ? '#FF8C00' : '#0055BB'}
        transition="color 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        target={props.target}
        download={props.download}
        size={props.size === undefined ? undefined : props.compact ? LinkHeightCompact[props.size] : LinkSize[props.size]}
        height={props.size === undefined ? undefined : LinkHeight[props.size]}
        children={props.children}
      />
    )}
  />
)
