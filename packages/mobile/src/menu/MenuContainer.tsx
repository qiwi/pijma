import { Box } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

export interface MenuContainerProps {
  children?: ReactNode
}

export const MenuContainer: FC<MenuContainerProps> = ({ children }) => (
  <Box py={2}>{children}</Box>
)

MenuContainer.displayName = 'MenuContainer'
