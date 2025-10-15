import { Box, getDataProps } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

export interface MenuContainerProps {
  children?: ReactNode
}

export const MenuContainer: FC<MenuContainerProps> = ({ children, ...rest }) => (
  <Box py={2} {...getDataProps(rest)}>{children}</Box>
)

MenuContainer.displayName = 'MenuContainer'
