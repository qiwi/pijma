import { Box, getDataProps } from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { Caption } from '../typography'

interface MenuCaptionProps {
  text: string
}

export const MenuCaption: FC<MenuCaptionProps> = ({ text, ...rest }) => (
  <Box px={4} py={2} {...getDataProps(rest)}>
    <Caption>{text}</Caption>
  </Box>
)

MenuCaption.displayName = 'MenuCaption'
