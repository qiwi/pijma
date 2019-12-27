import React from 'react'
import CalendarControlProps from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'
import CalendarDate from './CalendarDate'

const CURRENT_DATE = new Date().getDate()
const CURRENT_MONTH = new Date().getMonth()
const CURRENT_YEAR = new Date().getFullYear()

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate()

const generateArrayOfDates = (from: number, to: number, hasActiveDate?: boolean, disabled?: boolean) => {
  const dates = []
  for (let i = from; i <= to; i++) {
    dates.push({
      active: hasActiveDate ? CURRENT_DATE === i : undefined,
      value: i,
      disabled,
    })
  }
  return dates
}

const getDatesByMonthAndYear = (month: number, year: number) => {
  const numberOfDays = getDaysInMonth(year, month) // количество дней в месяце

  const dates = generateArrayOfDates(1, numberOfDays, (month === CURRENT_MONTH && year === CURRENT_YEAR)) // массив дней месяца

  let prevMonthDates: CalendarDate[] = []
  const firstDayInMonth = new Date(year, month, 1).getDay() // день недели первого дня месяца
  if (firstDayInMonth !== 1) { // если первый день месяца не понедельник, то нужно получить недостоющие числа предыдущего месяца
    const numberOfPrevMonthDates = firstDayInMonth === 0 ? 5 : firstDayInMonth - 2 // если вс то 6 дней
    const prevMonthDateTo = getDaysInMonth(year, month - 1)
    prevMonthDates = generateArrayOfDates(prevMonthDateTo - numberOfPrevMonthDates, prevMonthDateTo, false, true)
  }

  let nextMonthDates: CalendarDate[] = []
  const lastDayInMonth = new Date(year, month, numberOfDays).getDay() // день недели последнего дня месяца
  if (lastDayInMonth !== 0) {
    nextMonthDates = generateArrayOfDates(1, 7 - lastDayInMonth, false, true)
  }

  return [...prevMonthDates, ...dates, ...nextMonthDates]
}

export default class CalendarControl extends React.Component<CalendarControlProps, CalendarControlState> {

  public state: CalendarControlState = {
    month: CURRENT_MONTH,
    year: CURRENT_YEAR,
    dates: getDatesByMonthAndYear(CURRENT_MONTH, CURRENT_YEAR),
    showSelectMonth: false,
  }

  private toggleSelectMonth = () => {
    this.setState(state => ({
      showSelectMonth: !state.showSelectMonth,
    }))
  }

  private selectMonth = (month: number, year?: number) => {
    this.setState(state => {
      const selectedYear = year || state.year
      return {
        month,
        year: selectedYear,
        dates: getDatesByMonthAndYear(month, selectedYear),
        showSelectMonth: false,
      }
    })
  }

  private toPrevMonth = () => {
    this.setState(state => {
      const month = state.month === 0 ? 11 : state.month - 1
      const year = state.month === 0 ? state.year - 1 : state.year
      return {
        month,
        year,
        dates: getDatesByMonthAndYear(month, year),
      }
    })
  }

  private toNextMonth = () => {
    this.setState(state => {
      const month = state.month === 11 ? 0 : state.month + 1
      const year = state.month === 11 ? state.year + 1 : state.year
      return {
        month,
        year,
        dates: getDatesByMonthAndYear(month, year),
      }
    })
  }

  private onSelectDate = (day: number) => {
    const {year, month} = this.state
    if (this.props.onSelectDate) {
      this.props.onSelectDate(new Date(year, month, day))
    }
  }

  public render() {
    const {month, year, dates, showSelectMonth} = this.state

    return this.props.children({
      month,
      year,
      dates,
      showSelectMonth,
      toggleSelectMonth: this.toggleSelectMonth,
      selectMonth: this.selectMonth,
      toPrevMonth: this.toPrevMonth,
      toNextMonth: this.toNextMonth,
      onSelectDate: this.onSelectDate,
    })
  }

}
