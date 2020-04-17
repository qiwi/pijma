import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import {Mask} from '../mask'
import RenderChild from '../RenderChild'
import {DateRanges} from './DateRangeControl'
import {CalendarUtils} from '../calendar'

export default interface DateRangeControlProps {
  value?: Date | null
  valueTo?: Date | null
  format: string
  isRange?: boolean
  utils: CalendarUtils
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onChange?: (dateFrom: Date | null, dateTo: Date | null) => void
  children: RenderChild<{
    focused: boolean
    value: string
    mask?: Mask
    activeRange?: DateRanges
    onChange: ChangeEventHandler
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onKeyUp: KeyboardEventHandler
    saveDate: (date: Date, dateTo?: Date) => void
    closeCalendar: () => void
    openCalendar: () => void
    changeActiveRange: (activeRange?: DateRanges) => () => void
  }>
}
