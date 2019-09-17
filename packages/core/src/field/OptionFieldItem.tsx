import React, {MouseEventHandler, ReactNode} from 'react'

import {Box, Flex, Pos, Typo} from '../primitive'

export interface OptionFieldItemProps {
  checked?: boolean
  disabled?: boolean
  reverse?: boolean
  role?: string
  icon: ReactNode
  label: ReactNode
  description?: ReactNode
  onClick: MouseEventHandler
  onMouseEnter: MouseEventHandler
  onMouseLeave: MouseEventHandler
}

export const OptionFieldItem: React.FunctionComponent<OptionFieldItemProps> = ({
  checked,
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
    role="menuitemcheckbox"
    aria-checked={checked ? 'true' : 'false'}
    aria-label={typeof label === 'string' ? label : undefined}
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
              children={description}
            />
          </Box>
        ) : null}
      </Flex>
    </Flex>
  </Pos>
)
