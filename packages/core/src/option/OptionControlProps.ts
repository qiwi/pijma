import React, { FC } from 'react'

export default interface OptionControlProps<V> {
  value: V
  disabled?: boolean
  onClick: (value: V) => void
  onMouseEnter: (value: V) => void
  onMouseLeave: React.MouseEventHandler
  children: FC<{
    onClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
  }>
}
