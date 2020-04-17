import {Component, ChangeEventHandler, ChangeEvent, FocusEventHandler, FocusEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import DatePickerControlProps from './DatePickerControlProps'
import DatePickerControlState from './DatePickerControlState'

export default class DatePickerControl extends Component<DatePickerControlProps, DatePickerControlState> {

  public state: DatePickerControlState = {
    focused: false,
    opened: false,
  }

  private closeCalendar = () => {
    if (!this.state.focused) {
      this.setState({
        opened: false,
      })
    }
  }

  private openCalendar = () => {
    this.setState({
      opened: true,
    })
  }

  private onChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {format, onChange, utils} = this.props
    if (onChange) {
      const value = e.currentTarget.value
      const date = value.length === format.length
        ? utils.parse(value, format, new Date())
        : new Date('')
      onChange(date)
    }
  }

  private onFocus: FocusEventHandler = (e: FocusEvent) => {
    e.preventDefault()
    this.setState({
      focused: true,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
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

  private saveDate = (date: Date) => {
    this.setState({
      opened: false,
    })
    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  public render() {
    const {value, format, children, utils} = this.props
    const {focused, opened} = this.state
    return children({
      value: value ? utils.format(value, format) : '',
      focused: focused || opened,
      mask: format.split('').map(sym => sym.match(/^[a-zA-Z]+$/) ? /\d/ : sym),
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      saveDate: this.saveDate,
      closeCalendar: this.closeCalendar,
      openCalendar: this.openCalendar,
    })
  }

}
