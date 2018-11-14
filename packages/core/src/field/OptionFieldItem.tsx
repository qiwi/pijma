import React, {ReactNode, MouseEventHandler} from 'react'

import {styled, Box, Pos, Typo} from '@qiwi/pijma-core'

export interface OptionFieldItemProps {
  disabled?: boolean
  icon: ReactNode
  label: ReactNode
  description?: ReactNode
  onClick: MouseEventHandler
  onMouseEnter: MouseEventHandler
}

const shouldForwardProp = (prop: string) => !['disabled'].includes(prop)

const Item = styled(Pos, {
  shouldForwardProp,
})<Partial<OptionFieldItemProps>>(({disabled}) => ({
  cursor: disabled ? 'not-allowed' : 'pointer',
}))

export const OptionFieldItem: React.SFC<OptionFieldItemProps> = ({disabled, icon, label, description, onClick, onMouseEnter}) => (
  <Item type="relative" pl={9} disabled={disabled} onClick={onClick} onMouseEnter={onMouseEnter}>
    <Pos type="absolute" top={0} left={0} width={6} height={6} children={icon}/>
    <Typo display="block" size={4} height={6} color={disabled ? 'support' : 'default'} children={label}/>
    {description ? (
      <Box mt={1}>
        <Typo display="block" size={3.5} height={5} color="support" children={description}/>
      </Box>
    ) : (
      null
    )}
  </Item>
)
