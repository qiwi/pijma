import {
  ChangeEventHandler,
  Component,
  FocusEventHandler,
  KeyboardEventHandler,
} from 'react'

import { TextFieldControlProps } from './TextFieldControlProps'
import { TextFieldControlState } from './TextFieldControlState'

export class TextFieldControl extends Component<
  TextFieldControlProps,
  TextFieldControlState
> {
  public static displayName = 'TextFieldControl'

  public state: TextFieldControlState = {
    focused: false,
  }

  private onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value)
    }
  }

  private onFocus: FocusEventHandler = (e) => {
    this.setState({
      focused: true,
    })
    e.preventDefault()
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: FocusEventHandler = (e) => {
    this.setState({
      focused: false,
    })
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
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
