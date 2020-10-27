import React, {FC} from 'react'
import {Box} from '@qiwi/pijma-core'

export const MenuContainer: FC = ({children}) => (
  <Box py={2}>
    {children}
  </Box>
)

MenuContainer.displayName = 'MenuContainer'
