import {Component, ChangeEventHandler, ChangeEvent, FocusEventHandler, FocusEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import {format, parse} from 'date-fns'
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
      const value = e.currentTarget.value
      const date = value.length === this.props.format.length
        ? parse(value, this.props.format, new Date())
        : new Date('')
      this.props.onChange(date)
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
    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  public render() {
    const {focused, isVisible} = this.state

    return this.props.children({
      value: this.props.value ? format(this.props.value, this.props.format) : '',
      focused: focused || isVisible,
      mask: this.props.format.split('').map(sym => sym.match(/^[a-zA-Z]+$/) ? /\d/ : sym),
      calendarClick: this.calendarClick,
      toggleClick: this.toggleClick,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      onSelectDate: this.onSelectDate,
    })
  }

}
