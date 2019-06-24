import React, {FC} from 'react'

import {LinkControl, Lnk, Typo, Flex, Value, Pos, Card} from '@qiwi/pijma-core'

export interface HeaderMenuItemProps {
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
  ml?: Value
  active: boolean
}

const TypoLink = Typo.withComponent(Lnk)

export const HeaderMenuItem: FC<HeaderMenuItemProps> = props => (
  <LinkControl
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    children={renderProps => (
      <Pos height={1} type="relative" ml={props.ml}>
        <Flex height={1} direction="column" align="middle" justify="center">
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
            color={renderProps.hover || renderProps.focus ? '#FF8C00' : '#000'}
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            cursor="pointer"
            decoration="none"
            target={props.target}
            download={props.download}
            rel={props.rel}
            title={props.title}
            size={4}
            weight={500}
            children={props.children}
          />
        </Flex>
        {props.active ? (
          <Pos type="absolute" height="4px" bottom={0} right={0} left={0}>
            <Card bg="#ff8c00" height={1} width={1} rtr="4px" rtl="4px" />
          </Pos>
        ) : null}
      </Pos>
    )}
  />
)
