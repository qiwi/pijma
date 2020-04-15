import {KeyboardEvent, SyntheticEvent} from 'react'
import RenderChild from '../RenderChild'
import {CalendarUtils, CalendarDate} from './CalendarUtils'

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
  days: [string, string, string, string, string, string, string]
  months: [string, string, string, string, string, string, string, string, string, string, string, string]
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
  utils: CalendarUtils
  date?: Date
  dateTo?: Date
  isRange?: boolean
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onChange?: (date: Date, dateTo?: Date) => void
  children: RenderChild<CalendarControlChildrenProps>
}
