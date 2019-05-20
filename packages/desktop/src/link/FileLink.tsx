import React, {FC} from 'react'

import {LinkControl, Lnk, Typo, FlexItem, Flex} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'

export interface FileLinkProps {
  onClick?: (
    href?: string,
    target?: string,
    download?: string | boolean,
    rel?: string,
  ) => void
  onFocus?: () => void
  onBlur?: () => void
  tabIndex?: number
  href?: string
  target?: string
  download?: string | boolean
  rel?: string
  title?: string
  color?: 'default' | 'support'
  size?: 's' | 'm' | 'l'
}

const LinkColor: {[color in NonNullable<FileLinkProps['color']>]: string} = {
  default: '#000',
  support: '#666',
}

const LinkSize: {[size in NonNullable<FileLinkProps['size']>]: number} = {
  s: 3.5,
  m: 4,
  l: 5,
}

const LinkHeight: {[size in NonNullable<FileLinkProps['size']>]: number} = {
  s: 5,
  m: 6,
  l: 8,
}

const FlexLink = Flex.withComponent(Lnk)

export const FileLink: FC<FileLinkProps> = props => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={renderProps => (
      <FlexLink
        href={props.href}
        target={props.target}
        download={props.download}
        rel={props.rel}
        title={props.title}
        display="flex"
      >
        <FlexItem
          tabIndex={props.tabIndex}
          onClick={renderProps.onClick}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
          onMouseUp={renderProps.onMouseUp}
          onMouseDown={renderProps.onMouseDown}
          cursor="pointer"
          display="inline-block"
          width={props.size === undefined ? undefined : LinkHeight[props.size]}
          height={props.size === undefined ? undefined : LinkHeight[props.size]}
          mr={2}
          shrink={0}
          css={{
            fill:
              renderProps.hover || renderProps.focus
                ? '#FF8C00'
                : props.color === undefined
                ? LinkColor.default
                : LinkColor[props.color],
          }}
        >
          <Icon name="file" />
        </FlexItem>
        <Typo
          tabIndex={props.tabIndex}
          onClick={renderProps.onClick}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onMouseEnter={renderProps.onMouseEnter}
          onMouseLeave={renderProps.onMouseLeave}
          onMouseUp={renderProps.onMouseUp}
          onMouseDown={renderProps.onMouseDown}
          color={
            renderProps.hover || renderProps.focus
              ? '#FF8C00'
              : props.color === undefined
              ? LinkColor.default
              : LinkColor[props.color]
          }
          cursor="pointer"
          decoration="none"
          size={props.size === undefined ? undefined : LinkSize[props.size]}
          height={props.size === undefined ? undefined : LinkHeight[props.size]}
          children={props.children}
        />
      </FlexLink>
    )}
  />
)
