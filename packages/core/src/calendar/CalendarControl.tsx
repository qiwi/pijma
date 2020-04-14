import {SyntheticEvent, Component} from 'react'
import CalendarControlProps, {ScrollItem} from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'

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
    const {isRange = false, onChange} = this.props
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
        if (onChange) {
          onChange(activeDate!, date)
        }
      }
    }
    else {
      if (onChange) {
        onChange(date)
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
    if (this.props.onChange && this.state.activeDate) {
      this.props.onChange(this.state.activeDate, this.state.activeDateTo)
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
      calendar,
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
      days: calendar.defaultParams.days,
      months: calendar.defaultParams.months,
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
