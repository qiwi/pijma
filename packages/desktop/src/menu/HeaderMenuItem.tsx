import React, {FC} from 'react'

import {LinkControl, Lnk, Flex, Pos, Card} from '@qiwi/pijma-core'
import {Text} from '@qiwi/pijma-desktop'

import {HeaderMenuItemProps} from './HeaderMenuItemProps'

const PosLink = Pos.withComponent(Lnk)

export const HeaderMenuItem: FC<HeaderMenuItemProps> = props => (
  <LinkControl
    href={props.href}
    target={props.target}
    download={props.download}
    rel={props.rel}
    onClick={props.onClick}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={renderProps => (
      <PosLink
        height={1}
        type="relative"
        display="block"
        cursor="pointer"
        tabIndex={props.tabIndex}
        href={props.href}
        target={props.target}
        download={props.download}
        rel={props.rel}
        onClick={renderProps.onClick}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
        onMouseUp={renderProps.onMouseUp}
        onMouseDown={renderProps.onMouseDown}
      >
        <Flex height={1} direction="column" align="middle" justify="center">
          <Text
            color={renderProps.hover || renderProps.focus ? 'warning' : 'default'}
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            decoration="none"
          >
            {props.title}
          </Text>
        </Flex>
        {props.active ? (
          <Pos type="absolute" height="4px" bottom={0} right={0} left={0}>
            <Card bg="#ff8c00" height={1} width={1} rtr="4px" rtl="4px" />
          </Pos>
        ) : null}
      </PosLink>
    )}
  />
)

HeaderMenuItem.defaultProps = {
  active: false,
}
