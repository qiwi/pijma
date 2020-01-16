import {SyntheticEvent, Component} from 'react'
import CalendarControlProps from './CalendarControlProps'
import CalendarControlState from './CalendarControlState'

export default class CalendarControl extends Component<CalendarControlProps, CalendarControlState> {

  constructor(props: CalendarControlProps) {
    super(props)
    this.state = {
      date: new Date(),
      dates: props.calendar.getDates(new Date()),
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

  private onSelectDate = (day: number) => (event: SyntheticEvent) => {
    event.stopPropagation()
    const {date} = this.state
    if (this.props.onSelectDate) {
      this.props.onSelectDate(new Date(date.getFullYear(), date.getMonth(), day))
    }
  }

  public render() {
    const {date, dates, showSelectMonth} = this.state

    return this.props.children({
      month: date.getMonth(),
      year: date.getFullYear(),
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
