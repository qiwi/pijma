import React, {ReactNode, MouseEventHandler} from 'react'

import {Box, Pos, Typo} from '@qiwi/pijma-core'

export interface OptionFieldItemProps {
  disabled?: boolean
  icon: ReactNode
  label: ReactNode
  description?: ReactNode
  onClick: MouseEventHandler
  onMouseEnter: MouseEventHandler
}

export const OptionFieldItem: React.FunctionComponent<OptionFieldItemProps> = ({disabled, icon, label, description, onClick, onMouseEnter}) => (
  <Pos type="relative" pl={9} cursor={disabled ? 'not-allowed' : 'pointer'} onClick={onClick} onMouseEnter={onMouseEnter}>
    <Pos type="absolute" top={0} left={0} width={6} height={6} children={icon}/>
    <Typo display="block" weight={300} size={4} height={6} color={disabled ? '#666' : '#000'} children={label}/>
    {description ? (
      <Box mt={1}>
        <Typo display="block" weight={300} size={3.5} height={5} color="#666" children={description}/>
      </Box>
    ) : (
      null
    )}
  </Pos>
)
