import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import RenderChild from '../RenderChild'

export default interface DatePickerControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onSelectDate?: (date: Date) => void
  children: RenderChild<{
    focused: boolean
    calendarClick: () => void
    toggleClick: () => void
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
    onSelectDate: (date: Date) => void
  }>
}
