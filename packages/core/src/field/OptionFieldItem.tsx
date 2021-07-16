import React, {ReactNode, MouseEventHandler} from 'react'

import {Box, Pos, Typo, Flex} from '../primitive'
import {Breaker} from '../breaker'

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

export const OptionFieldItem: React.FunctionComponent<OptionFieldItemProps> = ({
  disabled,
  icon,
  label,
  description,
  onClick,
  onMouseEnter,
  onMouseLeave,
  reverse,
}) => (
  <Pos
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
        <Typo
          display="block"
          weight={300}
          size={4}
          height={6}
          color={disabled ? '#666' : '#000'}
          children={label}
        />
        {description ? (
          <Box mt={1}>
            <Typo
              display="block"
              weight={300}
              size={3.5}
              height={5}
              color="#666"
              children={<Breaker children={description}/>}
            />
          </Box>
        ) : null}
      </Flex>
    </Flex>
  </Pos>
)
