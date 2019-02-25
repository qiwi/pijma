import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler } from 'react'

export default interface BasicTextAreaProps {
  value: string
  tabIndex?: number
  name?: string
  height?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  padded: boolean
  disabled?: boolean
  error: boolean
  focused: boolean
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
}
