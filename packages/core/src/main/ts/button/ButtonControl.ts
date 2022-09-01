import { Component, FocusEventHandler, MouseEventHandler } from 'react'

import { ButtonControlProps } from './ButtonControlProps'
import { ButtonControlState } from './ButtonControlState'

export class ButtonControl extends Component<
  ButtonControlProps,
  ButtonControlState
> {
  public static displayName = 'ButtonControl'

  public state: ButtonControlState = {
    active: false,
    focus: false,
    hover: false,
  }

  private onMouseEnter: MouseEventHandler = () => {
    this.setState({
      hover: true,
    })
  }

  private onMouseLeave: MouseEventHandler = () => {
    this.setState({
      hover: false,
    })
  }

  private onClick: MouseEventHandler = (e) => {
    this.setState({
      active: true,
      focus: true,
    })
    e.preventDefault()
    e.stopPropagation()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  private onFocus: FocusEventHandler = (e) => {
    this.setState({
      focus: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: FocusEventHandler = (e) => {
    this.setState({
      active: false,
      focus: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  public render() {
    return this.props.children({
      active: this.state.active,
      focus: this.state.focus,
      hover: this.state.hover,
      onClick: this.onClick,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
    })
  }
}
