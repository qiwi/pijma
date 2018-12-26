import React from 'react'
import LinkControlProps from './LinkControlProps'
import LinkControlState from './LinkControlState'

export default class LinkControl extends React.Component<LinkControlProps, LinkControlState> {

  public state: LinkControlState = {
    active: false,
    focus: false,
    hover: false,
  }

  private onMouseEnter: React.MouseEventHandler = () => {
    this.setState({
      hover: true,
    })
  }

  private onMouseLeave: React.MouseEventHandler = () => {
    this.setState({
      hover: false,
    })
  }

  private onClick: React.MouseEventHandler = () => {
    this.setState({
      active: true,
      focus: true,
    })
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
