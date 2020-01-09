import {Component, ChangeEventHandler, ChangeEvent, FocusEventHandler, FocusEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import DatePickerControlProps from './DatePickerControlProps'
import DatePickerControlState from './DatePickerControlState'

export default class DatePickerControl extends Component<DatePickerControlProps, DatePickerControlState> {

  public state: DatePickerControlState = {
    focused: false,
    isCalendar: false,
    isVisible: false,
  }

  public componentDidMount() {
    document.addEventListener('click', this.documentClick)
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.documentClick)
  }

  private documentClick = () => {
    this.setState(state => ({
      isVisible: state.isCalendar,
      isCalendar: false,
    }))
  }

  private calendarClick = () => {
    this.setState({isCalendar: true})
  }

  private toggleClick = () => {
    this.setState({
      isCalendar: true,
      isVisible: true,
    })
  }

  private onChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value)
    }
  }

  private onFocus: FocusEventHandler = (e: FocusEvent) => {
    this.setState({
      focused: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
    this.toggleClick()
  }

  private onBlur: FocusEventHandler = (e: FocusEvent) => {
    this.setState({
      focused: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: KeyboardEventHandler = (event: KeyboardEvent) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: KeyboardEventHandler = (event: KeyboardEvent) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  private onSelectDate = (date: Date) => {
    this.setState({
      isVisible: false,
    })
    if (this.props.onSelectDate) {
      this.props.onSelectDate(date)
    }
  }

  public render() {
    const {focused, isVisible} = this.state

    return this.props.children({
      focused: focused || isVisible,
      calendarClick: this.calendarClick,
      toggleClick: this.toggleClick,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      onSelectDate: this.onSelectDate,
      documentClick: this.documentClick,
    })
  }

}
