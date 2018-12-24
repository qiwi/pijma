import React, {FC} from 'react'

import LinkControl from './LinkControl'
import {Link} from "@qiwi/pijma-core"

export interface ContentLinkProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
}

export const ContentLink: FC<ContentLinkProps> = (props) => (
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
        color={renderProps.hover ? '#FF8C00' : '#0055BB'}
        transition="color 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        target={props.target}
        children={props.children}
      />
    )}
  />
)

ContentLink.defaultProps = {
  target: '_blank'
}
