import React, {FC} from 'react'

import {LinkControl, Lnk, Card, Value, RenderChild, Flex} from '@qiwi/pijma-core'

export interface BlockPaginationLinkProps {
  pageNumber: number
  disabled?: boolean
  height?: Value
  width?: Value
  s?: string
  sHover?: string
  ml?: Value
  href?: (page: number) => string
  onClick?: (index: number, disabled: boolean) => void
  children: RenderChild<{
    disabled: boolean
    hover: boolean
    focus: boolean
  }>
}

const CardLink = Card.withComponent(Lnk)

export const BlockPaginationLink: FC<BlockPaginationLinkProps> = props => (
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
        bg={
          (renderProps.hover || renderProps.focus) && !props.disabled
            ? '#f5f5f5'
            : undefined
        }
        s={
          (renderProps.hover || renderProps.focus) && !props.disabled
            ? props.sHover
            : props.s
        }
        ml={props.ml}
        mt={
          (renderProps.hover || renderProps.focus) && !props.disabled
            ? '1px'
            : undefined
        }
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

BlockPaginationLink.defaultProps = {
  width: 12,
  height: 12,
  s: '1px 0 0 #e6e6e6',
  sHover: '0px -1px 0 1px #e6e6e6',
  ml: '1px',
}
