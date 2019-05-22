import React, {FC} from 'react'

import {LinkControl, Lnk, Typo, Flex, Value, Box} from '@qiwi/pijma-core'
import {Icon} from '@qiwi/pijma-media'

export interface HeaderLinkProps {
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
  mt?: Value
  topLevel?: boolean
}

const FlexLink = Flex.withComponent(Lnk)

export const HeaderLink: FC<HeaderLinkProps> = props => (
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
        mt={props.mt}
        display="flex"
        justify="space-between"
        cursor="pointer"
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
        rel={props.rel}
        title={props.title}
      >
        <Typo
          color={renderProps.hover || renderProps.focus ? '#FF8C00' : '#000'}
          transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
          cursor="pointer"
          decoration="none"
          size={4}
          height={6}
          weight={500}
          children={props.children}
        />
        {props.topLevel ? (
          <Box width={6} height={6}>
            <Icon name="angle-small-right" />
          </Box>
        ) : null}
      </FlexLink>
    )}
  />
)
