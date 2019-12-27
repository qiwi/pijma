import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface DatePickerControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  children: RenderChild<{
    focused: boolean
    isVisible: boolean
    calendarClick: () => void
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
  }>
}
