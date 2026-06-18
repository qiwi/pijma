import { FC, FocusEventHandler, MouseEventHandler } from 'react'

export interface ButtonControlProps {
  type?: 'button' | 'submit' | 'reset'
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
