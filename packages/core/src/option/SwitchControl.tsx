import React from 'react'

import SwitchControlProps from './SwitchControlProps'
import SwitchControlState from './SwitchControlState'

export default class SwitchControl extends React.Component<
  SwitchControlProps,
  SwitchControlState
> {

  public state: SwitchControlState = {
    focused: false,
    checked: this.props.checked,
  }

  private onFocus: React.FocusEventHandler<HTMLElement> = (
    event: React.FocusEvent<HTMLElement>,
  ) => {
    this.setState({
      focused: true,
    })
    if (this.props.disabled || !this.props.onFocus) {
      return
    }

    this.props.onFocus(event)
  }

  private onBlur: React.FocusEventHandler<HTMLElement> = (
    event: React.FocusEvent<HTMLElement>,
  ) => {
    this.setState({
      focused: false,
    })
    if (this.props.disabled || !this.props.onBlur) {
      return
    }

    this.props.onBlur(event)
  }

  private onMouseEnter = () => {
    this.setState({
      focused: true,
    })
  }

  private onMouseLeave = () => {
    this.setState({
      focused: false,
    })
  }

  private onClick = () => {
    if (this.props.disabled) {
      return
    }
    const checked = !this.state.checked
    this.setState({
      checked,
    })
    if (this.props.onChange) {
      this.props.onChange(checked)
    }
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused) {
          this.onClick()
        }
        break
    }
  }

  public render() {
    return this.props.children({
      tabIndex: this.props.tabIndex,
      focused: this.state.focused,
      checked: this.state.checked,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      onMouseLeave: this.onMouseLeave,
      onMouseEnter: this.onMouseEnter,
      onKeyDown: this.onKeyDown,
    })
  }

}
