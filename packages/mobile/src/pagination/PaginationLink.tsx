import React, {FC} from 'react'

import {LinkControl, Lnk, Card, Value, RenderChild, Flex} from '@qiwi/pijma-core'

export interface PaginationLinkProps {
  pageNumber: number
  disabled?: boolean
  height?: Value
  width?: Value
  s?: string
  href?: (page: number) => string
  onClick?: (index: number, disabled: boolean) => void
  children: RenderChild<{
    disabled: boolean
    hover: boolean
    focus: boolean
  }>
}

const CardLink = Card.withComponent(Lnk)

export const PaginationLink: FC<PaginationLinkProps> = props => (
  <LinkControl
    href={props.href && props.href(props.pageNumber)}
    onClick={() => props.onClick && props.onClick(props.pageNumber, !!props.disabled)}
    children={renderProps => (
      <CardLink
        transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
        height={props.height}
        width={props.width}
        display="inline-flex"
        cursor={props.disabled ? 'default' : 'pointer'}
        s={props.s}
        href={props.href && props.href(props.pageNumber)}
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
  height: 12,
  s: '1px 0 0 #e6e6e6',
}
