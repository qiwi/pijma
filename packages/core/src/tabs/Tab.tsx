import React, {ReactNode, FC} from 'react'

import {Box, BoxProps, Flex, Typo, Pos, Card, FlexItem} from '../primitive'
import {IconWrapper} from '../icon'

export interface TabProps {
  vertical?: boolean
  tabIndex?: number
  selected: boolean
  focused: boolean
  active?: boolean
  small?: boolean
  border?: boolean
  icon?: ReactNode
  title: ReactNode
  onChange: React.MouseEventHandler
  onMouseEnter: React.MouseEventHandler
  onMouseLeave: React.MouseEventHandler
}

export const Tab: FC<TabProps & BoxProps> = ({
  tabIndex,
  vertical,
  title,
  icon,
  selected,
  focused,
  width,
  small,
  border,
  onChange,
  onMouseEnter,
  onMouseLeave,
}) => {
  const pb = small ? 2 : vertical ? 5 : 4
  return (
    <FlexItem
      grow={0}
      shrink={0}
      basis="auto"
      maxWidth={38}
      width={width}
      mr={5}
      tabIndex={tabIndex}
      cursor="pointer"
      onClick={onChange}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Pos type="relative" width={1} height={1}>
        <Flex
          direction={vertical ? 'column' : 'row'}
          justify={vertical ? 'center' : 'flex-start'}
          pb={border ? pb - 0.25 : pb}
          pr={0}
          pl={0}
        >
          {icon ? (
            <Flex
              children={
                <Box
                  children={
                    <IconWrapper
                      color={
                        selected ? '#ff8c00' : focused ? '#ff8c00' : '#666'
                      }
                      children={icon}
                    />
                  }
                  height={vertical ? 8 : 6}
                  width={vertical ? 8 : 6}
                />
              }
              pr={vertical ? 0 : 1}
              pb={vertical ? (small ? 1.5 : 4) : 0}
              justify={vertical ? 'center' : 'flex-start'}
            />
          ) : null}
          <Typo
            display="block"
            align={vertical ? 'center' : 'left'}
            color={selected ? '#000' : focused ? '#ff8c00' : '#666'}
            weight={500}
            size={vertical ? 3.5 : 4}
            height={6}
            children={title}
          />
        </Flex>
        {selected ? (
          <Pos type="absolute" bottom={0} height="4px" width={1}>
            <Card bg="#ff8c00" r={4} height="4px" width={1} />
          </Pos>
        ) : null}
      </Pos>
    </FlexItem>
  )
}

Tab.defaultProps = {
  tabIndex: 0,
}
