import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import {Mask} from '@qiwi/pijma-core'
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
