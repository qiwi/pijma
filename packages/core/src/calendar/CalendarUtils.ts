
import {CalendarDate} from './CalendarDate'

interface DefaultParams {
  firstDayIndex: number
}

export interface CalendarUtilsProps {
  activeDate?: Date
  activeDateTo?: Date
  defaultParams: DefaultParams
  date: Date
  currentMonth: number
  currentYear: number
  getDaysInMonth: (year: number, month: number) => number
  getDatesArray: (from: Date, to: Date, disabled?: boolean) => CalendarDate[]
  getDates: (date: Date) => CalendarDate[]
  getPrevMonth: (date: Date) => Date
  getNextMonth: (date: Date) => Date
}

export class CalendarUtils implements CalendarUtilsProps {

  constructor(
    public activeDate?: Date,
    public activeDateTo?: Date,
    public defaultParams: DefaultParams = {
      firstDayIndex: 1,
    },
  ) {
    this.activeDate = activeDate
    this.activeDateTo = activeDateTo
    this.defaultParams = defaultParams
  }

  public date = this.activeDate || new Date()
  public currentMonth = this.date.getMonth()
  public currentYear = this.date.getFullYear()
  public lastDayIndex = this.defaultParams.firstDayIndex + 6 >= 7 ? this.defaultParams.firstDayIndex - 1 : this.defaultParams.firstDayIndex + 6

  public getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate()

  public getNextDay = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)

  public getDatesArray = (from: Date, to: Date, disabled?: boolean) => {
    const dates = []
    for (let d = from; d <= to; d = this.getNextDay(d)) {
      const date = new Date(d)
      dates.push({
        date,
        disabled,
      })
    }
    return dates
  }

  public getDates = (date: Date) => {
    const month = date.getMonth()
    const year = date.getFullYear()
    const numberOfDays = this.getDaysInMonth(year, month)
    const dates = this.getDatesArray(
      new Date(year, month, 1),
      new Date(year, month, this.getDaysInMonth(year, month)),
    )

    let prevMonthDates: CalendarDate[] = []
    const firstDayInMonth = new Date(year, month, 1).getDay()
    if (firstDayInMonth !== this.defaultParams.firstDayIndex) {
      const prevDatesLength = (firstDayInMonth === 0 ? 7 : firstDayInMonth) - this.defaultParams.firstDayIndex - 1
      const prevMonthDateTo = this.getDaysInMonth(year, month - 1)
      prevMonthDates = this.getDatesArray(
        new Date(year, month - 1, prevMonthDateTo - prevDatesLength),
        new Date(year, month - 1, prevMonthDateTo),
        true,
      )
    }

    let nextMonthDates: CalendarDate[] = []
    const lastDayInMonth = new Date(year, month, numberOfDays).getDay()
    if (lastDayInMonth !== this.lastDayIndex) {
      nextMonthDates = this.getDatesArray(
        new Date(year, month + 1, 1),
        new Date(year, month + 1, (this.defaultParams.firstDayIndex + 6) - lastDayInMonth),
        true,
      )
    }

    return [...prevMonthDates, ...dates, ...nextMonthDates]
  }

  public getPrevMonth = (date: Date) => {
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const month = currentMonth === 0 ? 11 : currentMonth - 1
    const year = currentMonth === 0 ? currentYear - 1 : currentYear
    return new Date(year, month, 1)
  }

  public getNextMonth = (date: Date) => {
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()
    const month = currentMonth === 11 ? 0 : currentMonth + 1
    const year = currentMonth === 11 ? currentYear + 1 : currentYear
    return new Date(year, month, 1)
  }

}
