import React from 'react'

import ButtonControlProps from './ButtonControlProps'
import ButtonControlState from './ButtonControlState'

export default class ButtonControl extends React.Component<ButtonControlProps, ButtonControlState> {

  public state: ButtonControlState = {
    active: false,
    focus: false,
    hover: false,
  }

  private onMouseEnter: React.MouseEventHandler = () => {
    this.setState({
      hover: true,
  //    focus: false,
    })
  }

  private onMouseLeave: React.MouseEventHandler = () => {
    this.setState({
//      active: false,
      hover: false,
      focus: false,
    })
  }

  private onMouseUp: React.MouseEventHandler = () => {
    this.setState({
      active: false,
 //     focus: false,
    })
  }

  private onMouseDown: React.MouseEventHandler = () => {
    this.setState({
      active: true,
//      focus: false,
    })
  }

  private onClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  private onFocus: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focus: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
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
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
    })
  }

}
