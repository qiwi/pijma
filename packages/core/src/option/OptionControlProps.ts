import React from 'react'

import RenderChild from '../RenderChild'

export default interface OptionControlProps<V> {
  value: V
  disabled?: boolean
  onClick: (value: V) => void
  onMouseEnter: (value: V) => void
  onMouseLeave: React.MouseEventHandler
  children: RenderChild<{
    onClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
  }>
}
