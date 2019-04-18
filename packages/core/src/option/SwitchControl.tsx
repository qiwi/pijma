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

  private onMouseEnter: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    this.setState({
      focused: true,
    })
    if (this.props.disabled || !this.props.onMouseEnter) {
      return
    }

    this.props.onMouseEnter(event)
  }

  private onMouseLeave: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    this.setState({
      focused: false,
    })
    if (this.props.disabled || !this.props.onMouseLeave) {
      return
    }

    this.props.onMouseLeave(event)
  }

  public render() {
    return this.props.children({
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      focused: this.state.focused,
    })
  }

}
