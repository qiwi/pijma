import {SyntheticEvent, Component} from 'react'
import CalendarControlProps, {ScrollItem} from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'

export default class CalendarControl extends Component<CalendarControlProps, CalendarControlState> {

  constructor(props: CalendarControlProps) {
    super(props)
    this.state = {
      activeDate: props.calendar.activeDate,
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
    event.stopPropagation()
    if (this.props.saveDate) {
      this.props.saveDate(date)
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

  private getYearsArray = () => {
    const years: ScrollItem[] = []
    for (let year = this.props.minYear; year <= this.props.maxYear; year++) {
      years.push({
        value: year,
        text: year.toString(),
      })
    }

    return years
  }

  public render() {
    const {date, dates, showSelectMonth, activeDate, years} = this.state

    return this.props.children({
      date,
      dates,
      activeDate,
      showSelectMonth,
      years,
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
