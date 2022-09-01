import {
  ChangeEventHandler,
  Component,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

import { PasswordFieldControlProps } from './PasswordFieldControlProps'
import { PasswordFieldControlState } from './PasswordFieldControlState'

export class PasswordFieldControl extends Component<
  PasswordFieldControlProps,
  PasswordFieldControlState
> {
  public static displayName = 'PasswordFieldControl'

  public state: PasswordFieldControlState = {
    focused: false,
    hidden: true,
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

  private onKeyDown: KeyboardEventHandler<Element> = (event) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: KeyboardEventHandler = (event) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  private onToggle: MouseEventHandler = (event) => {
    event.preventDefault()
    event.stopPropagation()
    this.setState({
      hidden: !this.state.hidden,
    })
    if (this.props.onToggle) {
      this.props.onToggle(!this.state.hidden)
    }
  }

  public render() {
    return this.props.children({
      focused: this.state.focused,
      hidden: this.state.hidden,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      onToggle: this.onToggle,
    })
  }
}
