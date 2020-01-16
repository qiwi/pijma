import {Component, ChangeEventHandler, ChangeEvent, FocusEventHandler, FocusEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import {format, parse} from 'date-fns'
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
    if (this.props.onChange) {
      const value = e.currentTarget.value
      const date = value.length === this.props.format.length
        ? parse(value, this.props.format, new Date())
        : new Date('')
      this.props.onChange(date)
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
    const {focused, opened} = this.state
    return this.props.children({
      value: this.props.value ? format(this.props.value, this.props.format) : '',
      focused: focused || opened,
      mask: this.props.format.split('').map(sym => sym.match(/^[a-zA-Z]+$/) ? /\d/ : sym),
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
