import CalendarDate from './CalendarDate'

export default interface CalendarControlState {
  date: Date
  dates: CalendarDate[]
  showSelectMonth: boolean
}
