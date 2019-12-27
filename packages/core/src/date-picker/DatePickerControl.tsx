import React from 'react'
import DatePickerControlProps from './DatePickerControlProps'
import DatePickerControlState from './DatePickerControlState'

export default class DatePickerControl extends React.Component<DatePickerControlProps, DatePickerControlState> {

  public state: DatePickerControlState = {
    focused: false,
    isCalendar: false,
    isVisible: false,
  }

  public componentDidMount() {
    // document.addEventListener('click', this.documentClick)
  }

  public componentWillUnmount() {
    document.removeEventListener('click', this.documentClick)
  }

  private documentClick = () => {
    if (!this.state.isCalendar) {
      this.setVisibility(false)
    }
    this.setState({isCalendar: false})
  }

  private setVisibility = (val?: boolean) => {
    const value = val || !this.state.isVisible

    if (this.state.isVisible !== value) {
      this.setState({isVisible: value})
    }
  }

  private calendarClick = () => {
    this.setState({isCalendar: true})
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value)
    }
  }

  private onFocus: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focused: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focused: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  public render() {
    const {focused, isVisible} = this.state

    return this.props.children({
      focused,
      isVisible,
      calendarClick: this.calendarClick,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
    })
  }

}
