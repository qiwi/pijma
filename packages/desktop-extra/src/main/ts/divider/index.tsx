import React from 'react'

import { Box, styled, Value } from '@qiwi/pijma-core'

import DividerProps from './DividerProps'

const StyledBox = styled(Box)<{
  active: boolean
  radius: Value
}>`
  background-color: ${({ active, theme }) =>
    active ? theme.color.brand : '#e6e6e6'};
  border-radius: ${({ radius, theme }) =>
    typeof radius === 'number' ? theme.scale * radius : radius};
`

export const Divider = ({
  w = '100%',
  h = '2px',
  r = '2px',
  active = false,
}: DividerProps) => {
  return <StyledBox width={w} height={h} radius={r} active={active} />
}
