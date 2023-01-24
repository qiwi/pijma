import React, { FC, MouseEventHandler, ReactNode } from 'react'

import { Breaker } from '../breaker'
import { getDataProps } from '../getDataProps'
import { Box, Flex, Pos, Typo } from '../primitive'

export interface OptionFieldItemProps {
  disabled?: boolean
  reverse?: boolean
  icon: ReactNode
  label: ReactNode
  description?: ReactNode
  onClick: MouseEventHandler
  onMouseEnter: MouseEventHandler
  onMouseLeave: MouseEventHandler
}

export const OptionFieldItem: FC<OptionFieldItemProps> = ({
  disabled,
  icon,
  label,
  description,
  onClick,
  onMouseEnter,
  onMouseLeave,
  reverse,
  ...rest
}) => (
  <Pos
    {...getDataProps(rest).data}
    type="relative"
    cursor={disabled ? 'not-allowed' : 'pointer'}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <Flex
      display="flex"
      direction={reverse ? 'row-reverse' : 'row'}
      justify={reverse ? 'space-between' : 'flex-start'}
      align="flex-start"
    >
      <Flex
        display="flex"
        align="center"
        ml={reverse ? 3 : 0}
        mr={reverse ? 0 : 3}
        height={6}
      >
        {icon}
      </Flex>
      <Flex display="flex" direction="column">
        {typeof label === 'string' ? (
          <Typo
            display="block"
            weight={300}
            size={4}
            height={6}
            color={disabled ? '#666' : '#000'}
            children={label}
          />
        ) : (
          label
        )}
        {description ? (
          <Box mt={1}>
            <Typo
              display="block"
              weight={300}
              size={3.5}
              height={5}
              color="#666"
              children={<Breaker children={description} />}
            />
          </Box>
        ) : null}
      </Flex>
    </Flex>
  </Pos>
)

OptionFieldItem.displayName = 'OptionFieldItem'
