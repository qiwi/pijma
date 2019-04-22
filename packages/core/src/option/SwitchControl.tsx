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

  public render() {
    return this.props.children({
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      focused: this.state.focused,
    })
  }

}
