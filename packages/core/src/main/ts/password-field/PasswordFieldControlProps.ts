import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

export interface PasswordFieldControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent<Element>) => boolean
  onKeyUp?: (event: KeyboardEvent<Element>) => boolean
  onToggle?: (hidden: boolean) => void
  children: FC<{
    focused: boolean
    hidden: boolean
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
    onToggle: MouseEventHandler
  }>
}
