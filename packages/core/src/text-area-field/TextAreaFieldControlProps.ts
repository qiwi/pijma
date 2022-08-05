import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEvent,
  KeyboardEventHandler,
  RefObject,
} from 'react'

export interface TextAreaFieldControlProps {
  value: string
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => boolean
  onKeyUp?: (event: KeyboardEvent<HTMLTextAreaElement>) => boolean
  children: FC<{
    rows: number
    focused: boolean
    animate: boolean
    ref: RefObject<HTMLTextAreaElement>
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
  }>
}
