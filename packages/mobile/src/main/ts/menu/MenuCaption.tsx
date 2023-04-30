import React, { FC } from 'react'

import { Box } from '@qiwi/pijma-core'

import { Caption } from '../typography'

interface MenuCaptionProps {
  text: string
}

export const MenuCaption: FC<MenuCaptionProps> = ({ text }) => (
  <Box px={4} py={2}>
    <Caption>{text}</Caption>
  </Box>
)

MenuCaption.displayName = 'MenuCaption'
