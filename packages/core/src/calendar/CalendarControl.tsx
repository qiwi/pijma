import {SyntheticEvent, Component} from 'react'
import CalendarControlProps from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'

export default class CalendarControl extends Component<CalendarControlProps, CalendarControlState> {

  constructor(props: CalendarControlProps) {
    super(props)
    this.state = {
      activeDate: props.calendar.activeDate,
      activeDateTo: props.calendar.activeDateTo,
      date: props.calendar.activeDate || new Date(),
      dates: props.calendar.getDates(props.calendar.activeDate || new Date()),
      showSelectMonth: false,
    }
  }

  private toggleSelectMonth = () => {
    this.setState(state => ({
      showSelectMonth: !state.showSelectMonth,
    }))
  }

  private selectMonth = (month: number, year?: number) => {
    this.setState(state => {
      const selectedYear = year || state.date.getFullYear()
      const date = new Date(selectedYear, month, 1)
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
      // const newActiveDate = !state.activeDate || state.activeDateTo || date < state.activeDate
      // return {
      //   activeDate: newActiveDate ? date : state.activeDate,
      //   activeDateTo: newActiveDate ? undefined : date,
      // }
    }
    else {
      if (saveDate) {
        saveDate(date)
      }
    }
  }

  private onMobileSelectDate = (activeDate: Date) => (event: SyntheticEvent) => {
    event.stopPropagation()
    this.setState({activeDate})
  }

  private onMobileSaveDate = () => {
    if (this.props.saveDate && this.state.activeDate) {
      this.props.saveDate(this.state.activeDate)
    }
  }

  public render() {
    const {date, dates, showSelectMonth, activeDate, activeDateTo} = this.state

    return this.props.children({
      date,
      dates,
      activeDate,
      activeDateTo,
      showSelectMonth,
      toggleSelectMonth: this.toggleSelectMonth,
      selectMonth: this.selectMonth,
      toPrevMonth: this.toPrevMonth,
      toNextMonth: this.toNextMonth,
      onDesktopSelectDate: this.onDesktopSelectDate,
      onMobileSelectDate: this.onMobileSelectDate,
      onMobileSaveDate: this.onMobileSaveDate,
    })
  }

}
