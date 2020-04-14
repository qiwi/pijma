import {CalendarDate} from './CalendarDate'
import {ScrollItem} from './CalendarControlProps'

export default interface CalendarControlState {
  activeDate?: Date
  activeDateTo?: Date
  date: Date
  dates: CalendarDate[]
  showSelectMonth: boolean
  years: ScrollItem[]
}
