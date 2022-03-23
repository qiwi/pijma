import React, {forwardRef} from 'react'

import {Flex, FlexItem, Typo, Pos} from '../primitive'
import {Icon, IconProps} from '../icon'
import {Stub} from '../stub'
import {Breaker} from '../breaker'
import {useTheme} from '../styled'

export interface TabProps {
  title: string
  indent: number
  wrap: boolean
  tabIndex: number
  icon?: IconProps['name']
  vertical?: boolean
  select?: boolean
  focus?: boolean
  width?: number
  stub?: boolean
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onKeyDown?: React.KeyboardEventHandler
  onClick?: React.MouseEventHandler
}

export const TabHeader = forwardRef<HTMLDivElement, TabProps>(({
  title,
  indent,
  wrap,
  tabIndex = 0,
  icon,
  vertical,
  select,
  focus,
  width,
  stub = false,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  onClick,
}, ref) => {
  const theme = useTheme()

  return <FlexItem
    mr={indent}
    width={width}
    ref={ref}
    cursor={stub ? undefined : 'pointer'}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Pos type="relative" width={1} height={1}>
      <Flex
        tabIndex={tabIndex}
        justify="center"
        align="center"
        pb={vertical ? 5 : 3}
        direction={vertical ? 'column' : 'row'}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      >
        {icon ? (
          <FlexItem mr={vertical ? 0 : 2} mb={vertical ? 4 : 0}>
            {stub ? (
              <Stub
                height={vertical ? 8 : 6}
                width={vertical ? 8 : 6}
                r={vertical ? 16 : 12}
              />
            ) : (
              <Icon
                // css={{transition: 'svg 100ms cubic-bezier(0.4, 0.0, 0.2, 1)'}}
                size={vertical ? 8 : 6}
                color={select ? theme.tabs.icon.color.select : focus ? theme.tabs.icon.color.hover : theme.tabs.icon.color.default}
                name={icon}
              />
            )}
          </FlexItem>
        ) : (
          null
        )}
        <FlexItem>
          {stub ? (
            <Stub
              top={2}
              bottom={2}
              height={2}
              width={13}
            />
          ) : (
            <Typo
              nowrap={wrap}
              color={select ? theme.tabs.text.color.select : focus ? theme.tabs.text.color.hover : theme.tabs.text.color.default}
              display="block"
              align={vertical || !wrap ? 'center' : 'left'}
              weight={500}
              size={vertical ? 3.5 : 4}
              height={6}
              children={<Breaker children={title}/>}
              transition="100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            />
          )}
        </FlexItem>
      </Flex>
    </Pos>
  </FlexItem>
})
