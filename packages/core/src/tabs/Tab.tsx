import React, {ReactNode, FC} from 'react'

import {Box, BoxProps, Flex, Typo, Pos, Card, FlexItem} from '../primitive'
import {IconWrapper} from '../icon'

export interface TabProps {
  vertical?: boolean
  tabIndex?: number
  selected?: boolean
  focused?: boolean
  active?: boolean
  small?: boolean
  icon?: ReactNode
  onSelect?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const Tab: FC<TabProps & BoxProps> = ({
  tabIndex,
  vertical,
  children,
  icon,
  selected,
  focused,
  width,
  small,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}) => {
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Pos type="relative" width={1} height={1}>
        <Flex
          direction={vertical ? 'column' : 'row'}
          justify={vertical ? 'center' : 'flex-start'}
          onClick={onSelect}
          pb={small ? 2 : vertical ? 6 : 4}
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
                  height={vertical ? 11 : 6}
                  width={vertical ? 11 : 6}
                />
              }
              pr={vertical ? 0 : 1}
              pb={vertical ? (small ? 1.5 : 3) : 0}
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
            children={children}
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
