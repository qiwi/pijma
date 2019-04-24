import React from 'react'

import SwitchControlProps from './SwitchControlProps'
import SwitchControlState from './SwitchControlState'

export default class SwitchControl extends React.Component<
  SwitchControlProps,
  SwitchControlState
> {

  constructor(props: SwitchControlProps) {
    super(props)

    this.state = {
      focused: false,
      checked: props.checked,
    }
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
    this.setState({
      checked: !this.state.checked,
    })
    if (this.props.onChange) {
      this.props.onChange()
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
    })
  }

}
