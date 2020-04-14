import {KeyboardEvent, SyntheticEvent} from 'react'
import RenderChild from '../RenderChild'
import {CalendarDate} from './CalendarDate'
import {CalendarUtilsProps} from './CalendarUtils'

export interface ScrollItem {
  value: number
  text: string
}

export interface CalendarControlChildrenProps {
  date: Date
  dates: CalendarDate[]
  activeDate?: Date
  activeDateTo?: Date
  showSelectMonth: boolean
  years: ScrollItem[]
  days: string[]
  months: string[]
  minYear: number
  maxYear: number
  toggleSelectMonth: () => void
  selectMonth: (values: number[]) => void
  toNextMonth: () => void
  toPrevMonth: () => void
  onDesktopSelectDate: (date: Date) => (event: SyntheticEvent) => void
  onMobileSelectDate: (date: Date) => (event: SyntheticEvent) => void
  onMobileSaveDate: () => void
  activeDates: CalendarDate[]
}

export default interface CalendarControlProps {
  calendar: CalendarUtilsProps
  days?: string[]
  months?: string[]
  isRange?: boolean
  minYear?: number
  maxYear?: number
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  saveDate?: (date: Date, dateTo?: Date) => void
  children: RenderChild<CalendarControlChildrenProps>
}
