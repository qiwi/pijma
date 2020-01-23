import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import {Mask} from '../mask'
import RenderChild from '../RenderChild'
import {DateRangeValueType, DateRanges} from './DateRangeControl'

export default interface DateRangeControlProps {
  value?: Date
  format: string
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onChange?: (date: Date, dateTo?: Date) => void
  children: RenderChild<{
    focused: boolean
    value?: DateRangeValueType
    mask: Mask
    activeRange: DateRanges
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
    saveDate: (date: Date, dateTo?: Date) => void
    closeCalendar: () => void
    openCalendar: () => void
    changeActiveRange: (activeRange: DateRanges) => () => void
  }>
}
