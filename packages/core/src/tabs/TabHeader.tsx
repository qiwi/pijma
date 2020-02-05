import React, {FC} from 'react'

import {Flex, FlexItem, Typo, Pos, Card} from '../primitive'
import {Icon, IconProps} from '../icon'
import {Stub} from '../stub'
import {Breaker} from '../breaker'

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
  borderRadius?: boolean
  stub?: boolean
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onKeyDown?: React.KeyboardEventHandler
  onClick?: React.MouseEventHandler
}

export const TabHeader: FC<TabProps> = ({
  title,
  indent,
  wrap,
  tabIndex = 0,
  icon,
  vertical,
  select,
  focus,
  width,
  borderRadius = false,
  stub = false,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onKeyDown,
  onClick,
}) => {
  return (
    <FlexItem
      mr={indent}
      width={width}
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
          pb={3}
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
                  size={vertical ? 8 : 6}
                  color={select || focus ? '#ff8c00' : '#666'}
                  name={icon}
                />
              )}
            </FlexItem>
          ) : (
            null
          )}
          <FlexItem>
            {stub ? (
              <Stub height={2} width={13}/>
            ) : (
              <Typo
                nowrap={wrap}
                color={select ? '#000' : focus ? '#ff8c00' : '#666'}
                display="block"
                align={vertical || !wrap ? 'center' : 'left'}
                weight={500}
                size={vertical ? 3.5 : 4}
                height={6}
                children={<Breaker children={title}/>}
              />
            )}
          </FlexItem>
        </Flex>
        {select ? (
          <Pos type="absolute" bottom={0} height="4px" width={1} zIndex={1}>
            <Card
              bg="#ff8c00"
              r={borderRadius ? 0 : 4}
              rtl={borderRadius ? 2 : 4}
              rtr={borderRadius ? 2 : 4}
              height="4px"
              width={1}
            />
          </Pos>
        ) : (
          null
        )}
      </Pos>
    </FlexItem>
  )
}
