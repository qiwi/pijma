import React from 'react'

import TextInputFieldControlProps from './TextInputFieldControlProps'
import TextInputFieldControlState from './TextInputFieldControlState'

export default class TextInputFieldControl extends React.Component<TextInputFieldControlProps, TextInputFieldControlState> {

  public constructor(props: TextInputFieldControlProps) {
    super(props)
    this.state = {
      focused: false,
    }
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value)
    }
  }

  private onFocus: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focused: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler = (e: React.FocusEvent) => {
    this.setState({
      focused: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: React.KeyboardEventHandler = (event: React.KeyboardEvent) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
    })
  }

}
