import React, {FC, RefObject} from 'react'

import {Flex, FlexItem, Typo, Pos} from '../primitive'

import {Icon, IconProps} from '../icon'

export interface TabProps {
  title: string
  icon?: IconProps['name']
  vertical?: boolean
  select?: boolean
  focus?: boolean
  ref?: RefObject<HTMLDivElement>
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onClick?: React.MouseEventHandler
}

export const TabHeader: FC<TabProps> = ({
  vertical,
  select,
  focus,
  title,
  icon,
  onMouseLeave,
  onMouseEnter,
  onClick,
}) => {
  return (
    <FlexItem
      cursor="pointer"
      height={9}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseLeave}
    >
      <Pos type="relative">
        <Flex
          direction={vertical ? 'column' : 'row'}
          justify="center"
        >
          {icon ? (
            <FlexItem mr={vertical ? 0 : 2}>
              <Icon color={select || focus ? '#ff8c00' : '#666'} name={icon}/>
            </FlexItem>
          ) : (
            null
          )}
          <FlexItem>
            <Typo
              color={select ? '#000' : focus ? '#ff8c00' : '#666'}
              display="block"
              align={vertical ? 'center' : 'left'}
              weight={500}
              size={vertical ? 3.5 : 4}
              height={6}
              children={title}
            />
          </FlexItem>
        </Flex>
      </Pos>
    </FlexItem>
  )
}
