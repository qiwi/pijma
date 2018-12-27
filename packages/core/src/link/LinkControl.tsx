import React from 'react'

import {RenderChild} from '@qiwi/pijma-core'

export interface LinkControlProps {
  onClick?: (href?: string, target?: string, download?: boolean, rel?: string) => void
  onFocus?: () => void
  onBlur?: () => void
  href?: string
  target?: string
  download?: boolean
  rel?: string
  children: RenderChild<{
    active: boolean
    focus: boolean
    hover: boolean
    onClick: React.MouseEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onMouseUp: React.MouseEventHandler
    onMouseDown: React.MouseEventHandler
  }>
}

export interface LinkControlState {
  active: boolean
  focus: boolean
  hover: boolean
}

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
