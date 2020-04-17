import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import {CalendarUtils} from '../calendar'
import {Mask} from '../mask'
import RenderChild from '../RenderChild'

export default interface DatePickerControlProps {
  value?: Date
  format: string
  utils: CalendarUtils
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onChange?: (date: Date) => void
  children: RenderChild<{
    focused: boolean
    value: string
    mask: Mask
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
    saveDate: (date: Date) => void
    closeCalendar: () => void
    openCalendar: () => void
  }>
}
