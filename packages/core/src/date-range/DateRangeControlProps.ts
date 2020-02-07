import {KeyboardEvent, ChangeEventHandler, FocusEventHandler, KeyboardEventHandler} from 'react'
import {Mask} from '../mask'
import RenderChild from '../RenderChild'
import {DateRanges} from './DateRangeControl'

export default interface DateRangeControlProps {
  value?: Date | number | 'all'
  valueTo?: Date
  format: string
  isRange?: boolean
  months: string[]
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onChange?: (date: Date | number | 'all', dateTo?: Date) => void
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
    selectMonth: (valuest: number[]) => void
  }>
}
