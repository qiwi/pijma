import React, {FC} from 'react'

import {LinkControl, RenderChild, Lnk} from '@qiwi/pijma-core'

export interface BlockLinkProps {
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  accent?: boolean
  bg?: string
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
  }>
}

export const BlockLink: FC<BlockLinkProps> = (props) => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={(renderProps) => (
      <Lnk
        r={10}
        s={renderProps.hover || renderProps.focus || renderProps.active ? '0 10px 24px 0 rgba(0,0,0,0.08)' : '0 1px 2px 0 rgba(0,0,0,0.12)'}
        transition="all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        transform={renderProps.hover && props.accent ? 'translateY(-4px)' : undefined}
        bg={props.bg}
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
        display="inline-block"
        children={props.children({
          active: renderProps.active,
          focus: renderProps.focus,
          hover: renderProps.hover,
        })}
      />
    )}
  />
)
