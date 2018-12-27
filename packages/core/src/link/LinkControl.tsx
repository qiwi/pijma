import React from 'react'

import LinkControlProps from './LinkControlProps'
import LinkControlState from './LinkControlState'

export default class LinkControl extends React.Component<LinkControlProps, LinkControlState> {

  public static defaultProps: Partial<LinkControlProps> = {}

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

  private onMouseUp: React.MouseEventHandler = () => {
    this.setState({
      active: false,
    })
  }

  private onMouseDown: React.MouseEventHandler = () => {
    this.setState({
      active: true,
    })
  }

  private onClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick(this.props.href, this.props.target, this.props.download, this.props.rel)
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
      onMouseUp: this.onMouseUp,
      onMouseDown: this.onMouseDown,
    })
  }

}
