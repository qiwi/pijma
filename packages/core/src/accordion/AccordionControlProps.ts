import React from 'react'

import RenderChild from '../RenderChild'

export default interface AccordionControlProps<I> {
  items: I[]
  children: RenderChild<{
    onMouseLeave: React.MouseEventHandler
    items: Array<I & {
      isOpened: boolean
      isHovered: boolean
      isNextHovered: boolean
      index: number
      onClick: (index: number) => void
      onMouseEnter: (index: number) => void
    }>
  }>
}
