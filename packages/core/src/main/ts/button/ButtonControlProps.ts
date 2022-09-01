import { FC, FocusEventHandler, MouseEventHandler } from 'react'

export interface ButtonControlProps {
  onClick?: () => void
  onFocus?: () => void
  onBlur?: () => void
  children: FC<{
    active: boolean
    focus: boolean
    hover: boolean
    onClick: MouseEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onMouseEnter: MouseEventHandler
    onMouseLeave: MouseEventHandler
  }>
}
