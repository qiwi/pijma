import {KeyboardEvent, SyntheticEvent} from 'react'
import RenderChild from '../RenderChild'
import CalendarDate from './CalendarDate'
import {CalendarConstructorProps} from './CalendarConstructor'

export interface CalendarControlChildrenProps {
  date: Date
  dates: CalendarDate[]
  activeDate?: Date
  showSelectMonth: boolean
  toggleSelectMonth: () => void
  selectMonth: (month: number, year?: number) => void
  toNextMonth: () => void
  toPrevMonth: () => void
  onDesktopSelectDate: (date: Date) => (event: SyntheticEvent) => void
  onMobileSelectDate: (date: Date) => (event: SyntheticEvent) => void
  onMobileSaveDate: () => void
}

export default interface CalendarControlProps {
  calendar: CalendarConstructorProps
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  saveDate?: (date: Date) => void
  children: RenderChild<CalendarControlChildrenProps>
}
