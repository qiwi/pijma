import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
} from 'react'

export interface TextFieldControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => boolean
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => boolean
  children: FC<{
    focused: boolean
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
  }>
}
