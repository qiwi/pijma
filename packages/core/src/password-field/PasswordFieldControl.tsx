import React from 'react'

import PasswordFieldControlProps from './PasswordFieldControlProps'
import PasswordFieldControlState from './PasswordFieldControlState'

export default class PasswordFieldControl extends React.Component<
  PasswordFieldControlProps,
  PasswordFieldControlState
> {
  public state: PasswordFieldControlState = {
    focused: false,
    hidden: true,
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
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

  private onKeyDown: React.KeyboardEventHandler = (
    event: React.KeyboardEvent,
  ) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: React.KeyboardEventHandler = (
    event: React.KeyboardEvent,
  ) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  private onToggle: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      hidden: !this.state.hidden,
    })
    if (this.props.onToggle) {
      this.props.onToggle(!this.state.hidden)
    }
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      hidden: this.state.hidden,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      onToggle: this.onToggle,
    })
  }
}
