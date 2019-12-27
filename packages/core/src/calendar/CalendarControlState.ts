import CalendarDate from './CalendarDate'

export default interface CalendarControlState {
  month: number
  year: number
  dates: CalendarDate[]
  showSelectMonth: boolean
}
