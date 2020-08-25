import React from 'react'

import TextFieldControlProps from './TextFieldControlProps'
import TextFieldControlState from './TextFieldControlState'
import {FormContext, IFormContext} from '../FormContext'

class TextFieldControl extends React.Component<TextFieldControlProps & {context?: IFormContext}, TextFieldControlState> {

  public state: TextFieldControlState = {
    focused: false,
  }

  private onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value)
    }
    if (this.props.context) {
      this.props.context.onChange(e)
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
    if (this.props.context) {
      this.props.context.onBlur(e)
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

export default (props: TextFieldControlProps & {context?: IFormContext}) => (
  <FormContext.Consumer>
    {(context) => <TextFieldControl {...props} context={context}/>}
  </FormContext.Consumer>
)
