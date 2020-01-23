import CalendarDate from './CalendarDate'

export default interface CalendarControlState {
  activeDate?: Date
  activeDateTo?: Date
  date: Date
  dates: CalendarDate[]
  showSelectMonth: boolean
}
