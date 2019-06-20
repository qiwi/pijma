import React, {FC} from 'react'

import {LinkControl, Lnk, Card, Value, RenderChild, Flex} from '@qiwi/pijma-core'

export interface PaginationLinkProps {
  page: number
  disabled?: boolean
  width?: Value
  href?: string
  onClick?: (href?: string, target?: string, download?: string | boolean, rel?: string) => void
  children: RenderChild<{
    disabled: boolean
    hover: boolean
    focus: boolean
  }>
}

const CardLink = Card.withComponent(Lnk)

export const PaginationLink: FC<PaginationLinkProps> = props => (
  <LinkControl
    href={props.href}
    onClick={props.onClick}
    children={renderProps => (
      <CardLink
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        height={12}
        width={props.width}
        display="inline-flex"
        cursor={props.disabled ? 'default' : 'pointer'}
        s="1px 0 0 #e6e6e6"
        href={props.href}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
      >
        <Flex
          align="center"
          justify="center"
          width={1}
          height={1}
          children={props.children({
            disabled: props.disabled || false,
            hover: renderProps.hover,
            focus: renderProps.focus,
          })}
        />
      </CardLink>
    )}
  />
)

PaginationLink.defaultProps = {
  width: 12,
}
