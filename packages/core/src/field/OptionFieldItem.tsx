import React, {ReactNode, MouseEventHandler} from 'react'

import {Box, Pos, Typo, Flex} from '../primitive'
import {Image} from '../image'

export interface OptionFieldItemProps {
  disabled?: boolean
  reverse?: boolean
  iconReverse?: ReactNode
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
  iconReverse,
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
      <Flex display="flex" direction="column" width={1}>
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
      {reverse && iconReverse ? (
        <Flex
          display="flex"
          mr={3}
        >
          <Box width={6}>
            {typeof iconReverse === 'string' ? (
              <Image
                src={iconReverse}
                width={6}
                height={6}
              />
            ) : (
              iconReverse
            )}
          </Box>
        </Flex>
      ) : (
        null
      )}
    </Flex>
  </Pos>
)
