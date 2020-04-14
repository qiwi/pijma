import {SyntheticEvent, Component} from 'react'
import CalendarControlProps, {ScrollItem} from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'

export const defaultMonths: [string, string, string, string, string, string, string, string, string, string, string, string] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
export const defaultFirstDayIndex = 1
const defaultDays: [string, string, string, string, string, string, string] = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
const defaultMinYear = new Date().getFullYear() - 5
const defaultMaxYear = new Date().getFullYear() + 5

export default class CalendarControl extends Component<CalendarControlProps, CalendarControlState> {

  constructor(props: CalendarControlProps) {
    super(props)
    this.state = {
      activeDate: props.calendar.activeDate,
      activeDateTo: props.calendar.activeDateTo,
      date: props.calendar.activeDate || new Date(),
      dates: props.calendar.getDates(props.calendar.activeDate || new Date()),
      showSelectMonth: false,
      years: this.getYearsArray(),
    }
  }

  private toggleSelectMonth = () => {
    this.setState(state => ({
      showSelectMonth: !state.showSelectMonth,
    }))
  }

  private selectMonth = ([month, year]: number[]) => {
    this.setState(() => {
      const date = new Date(year, month, 1)
      return {
        date,
        dates: this.props.calendar.getDates(date),
        showSelectMonth: false,
      }
    })
  }

  private toPrevMonth = () => {
    this.setState(state => {
      const prevMonthDate = this.props.calendar.getPrevMonth(state.date)
      return {
        date: prevMonthDate,
        dates: this.props.calendar.getDates(prevMonthDate),
      }
    })
  }

  private toNextMonth = () => {
    this.setState(state => {
      const nextMonthDate = this.props.calendar.getNextMonth(state.date)
      return {
        date: nextMonthDate,
        dates: this.props.calendar.getDates(nextMonthDate),
      }
    })
  }

  private onDesktopSelectDate = (date: Date) => (event: SyntheticEvent) => {
    const {isRange = false, saveDate} = this.props
    const {activeDate, activeDateTo} = this.state
    event.stopPropagation()
    if (isRange) {
      const newActiveDate = !activeDate || activeDateTo || date < activeDate

      if (newActiveDate) {
        this.setState({
          activeDate: date,
          activeDateTo: undefined,
        })
      }
      else {
        if (saveDate) {
          saveDate(activeDate!, date)
        }
      }
    }
    else {
      if (saveDate) {
        saveDate(date)
      }
    }
  }

  private onMobileSelectDate = (date: Date) => (event: SyntheticEvent) => {
    const {isRange = false} = this.props
    const {activeDate, activeDateTo} = this.state
    event.stopPropagation()
    if (isRange) {
      const newActiveDate = !activeDate || activeDateTo || date < activeDate

      if (newActiveDate) {
        this.setState({
          activeDate: date,
          activeDateTo: undefined,
        })
      }
      else {
        this.setState({
          activeDate,
          activeDateTo: date,
        })
      }
    }
    else {
      this.setState({
        activeDate: date,
        activeDateTo: undefined,
      })
    }
  }

  private onMobileSaveDate = () => {
    if (this.props.saveDate && this.state.activeDate) {
      this.props.saveDate(this.state.activeDate, this.state.activeDateTo)
    }
  }

  private getYearsArray = () => {
    const {
      minYear = defaultMinYear,
      maxYear = defaultMaxYear,
    } = this.props
    const years: ScrollItem[] = []
    for (let year = minYear; year <= maxYear; year++) {
      years.push({
        value: year,
        text: year.toString(),
      })
    }

    return years
  }

  private getActiveDatesArray = () => {
    return (this.state.activeDate && this.state.activeDateTo)
      ? this.props.calendar.getDatesArray(this.state.activeDate, this.state.activeDateTo)
      : []
  }

  public render() {
    const {
      days = defaultDays,
      months = defaultMonths,
      minYear = defaultMinYear,
      maxYear = defaultMaxYear,
    } = this.props
    const {date, dates, showSelectMonth, activeDate, activeDateTo, years} = this.state

    return this.props.children({
      date,
      dates,
      activeDate,
      activeDateTo,
      showSelectMonth,
      years,
      days,
      months,
      minYear,
      maxYear,
      toggleSelectMonth: this.toggleSelectMonth,
      selectMonth: this.selectMonth,
      toPrevMonth: this.toPrevMonth,
      toNextMonth: this.toNextMonth,
      onDesktopSelectDate: this.onDesktopSelectDate,
      onMobileSelectDate: this.onMobileSelectDate,
      onMobileSaveDate: this.onMobileSaveDate,
      activeDates: this.getActiveDatesArray(),
    })
  }

}
