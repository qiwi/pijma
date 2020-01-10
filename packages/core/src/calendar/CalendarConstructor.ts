
import CalendarDate from './CalendarDate'

export interface CalendarConstructorProps {
  firstDayIndex: number
  currentMonth: number
  currentYear: number
  getDaysInMonth: (year: number, month: number) => number
  getDatesArray: (from: number, to: number, hasActiveDate?: boolean, disabled?: boolean) => CalendarDate[]
  getDatesByMonthAndYear: (month: number, year: number) => CalendarDate[]
  getPrevMonth: (currentMonth: number, currentYear: number) => {month: number, year: number, dates: CalendarDate[]}
  getNextMonth: (currentMonth: number, currentYear: number) => {month: number, year: number, dates: CalendarDate[]}
}

export default class CalendarConstructor implements CalendarConstructorProps {

  constructor(public firstDayIndex: number) {
    this.firstDayIndex = firstDayIndex
  }

  public currentMonth = new Date().getMonth()
  public currentYear = new Date().getFullYear()
  public lastDayIndex = this.firstDayIndex + 6 >= 7 ? this.firstDayIndex - 1 : this.firstDayIndex + 6

  public getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate()

  public getDatesArray = (from: number, to: number, hasActiveDate?: boolean, disabled?: boolean) => {
    const dates = []
    for (let i = from; i <= to; i++) {
      dates.push({
        active: hasActiveDate ? new Date().getDate() === i : undefined,
        value: i,
        disabled,
      })
    }
    return dates
  }

  public getDatesByMonthAndYear = (month: number, year: number) => {
    const numberOfDays = this.getDaysInMonth(year, month)
    const dates = this.getDatesArray(1, numberOfDays, (month === this.currentMonth && year === this.currentYear))

    let prevMonthDates: CalendarDate[] = []
    const firstDayInMonth = new Date(year, month, 1).getDay()
    if (firstDayInMonth !== this.firstDayIndex) {
      const prevDatesLength = (firstDayInMonth === 0 ? 7 : firstDayInMonth) - this.firstDayIndex - 1
      const prevMonthDateTo = this.getDaysInMonth(year, month - 1)
      prevMonthDates = this.getDatesArray(prevMonthDateTo - prevDatesLength, prevMonthDateTo, false, true)
    }

    let nextMonthDates: CalendarDate[] = []
    const lastDayInMonth = new Date(year, month, numberOfDays).getDay()
    if (lastDayInMonth !== this.lastDayIndex) {
      nextMonthDates = this.getDatesArray(1, (this.firstDayIndex + 6) - lastDayInMonth, false, true)
    }

    return [...prevMonthDates, ...dates, ...nextMonthDates]
  }

  public getPrevMonth = (currentMonth: number, currentYear: number) => {
    const month = currentMonth === 0 ? 11 : currentMonth - 1
    const year = currentMonth === 0 ? currentYear - 1 : currentYear
    return {
      month,
      year,
      dates: this.getDatesByMonthAndYear(month, year),
    }
  }

  public getNextMonth = (currentMonth: number, currentYear: number) => {
    const month = currentMonth === 11 ? 0 : currentMonth + 1
    const year = currentMonth === 11 ? currentYear + 1 : currentYear
    return {
      month,
      year,
      dates: this.getDatesByMonthAndYear(month, year),
    }
  }

}
