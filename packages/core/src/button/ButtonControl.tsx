import React from 'react'

import ButtonControlProps from './ButtonControlProps'

export default class ButtonControl extends React.Component<ButtonControlProps> {

  private onClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  private onFocus: React.FocusEventHandler = (e: React.FocusEvent) => {
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  public render() {
    return this.props.children({
      onClick: this.onClick,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    })
  }

}
