import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import {Mask} from '../mask'
import RenderChild from '../RenderChild'

export default interface DatePickerControlProps {
  value?: Date
  format: string
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
