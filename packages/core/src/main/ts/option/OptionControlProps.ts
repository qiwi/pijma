import { FC, MouseEventHandler } from 'react'

export interface OptionControlProps<V> {
  value: V
  disabled?: boolean
  onClick: (value: V) => void
  onMouseEnter: (value: V) => void
  onMouseLeave: MouseEventHandler
  children: FC<{
    onClick: MouseEventHandler
    onMouseEnter: MouseEventHandler
    onMouseLeave: MouseEventHandler
  }>
}
