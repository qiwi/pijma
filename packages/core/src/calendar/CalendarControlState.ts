import CalendarDate from './CalendarDate'

export default interface CalendarControlState {
  activeDate?: Date
  date: Date
  dates: CalendarDate[]
  showSelectMonth: boolean
}
