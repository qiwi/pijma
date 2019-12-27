import {KeyboardEvent} from 'react'
import RenderChild from '../RenderChild'
import CalendarDate from './CalendarDate'

export default interface CalendarControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onSelectDate?: (date: Date) => void
  children: RenderChild<{
    month: number
    year: number
    dates: CalendarDate[]
    showSelectMonth: boolean
    toggleSelectMonth: () => void
    selectMonth: (month: number, year?: number) => void
    toNextMonth: () => void
    toPrevMonth: () => void
    onSelectDate: (day: number) => void
  }>
}
