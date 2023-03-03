import {
  Component,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

export interface SwitchControlProps {
  disabled?: boolean
  tabIndex?: number
  checked: boolean
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onChange: (value: boolean) => void
  children: FC<{
    focused: boolean
    tabIndex?: number
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onClick: MouseEventHandler
    onMouseLeave: MouseEventHandler
    onMouseEnter: MouseEventHandler
    onKeyDown: KeyboardEventHandler
  }>
}

export interface SwitchControlState {
  focused: boolean
}

export class SwitchControl extends Component<
  SwitchControlProps,
  SwitchControlState
> {
  public static displayName = 'SwitchControl'

  public state: SwitchControlState = {
    focused: false,
  }

  private onFocus: FocusEventHandler<HTMLElement> = (event) => {
    this.setState({
      focused: true,
    })
    if (this.props.disabled || !this.props.onFocus) {
      return
    }

    this.props.onFocus(event)
  }

  private onBlur: FocusEventHandler<HTMLElement> = (event) => {
    this.setState({
      focused: false,
    })
    if (this.props.disabled || !this.props.onBlur) {
      return
    }

    this.props.onBlur(event)
  }

  private onMouseEnter = () => {
    this.setState({
      focused: true,
    })
  }

  private onMouseLeave = () => {
    this.setState({
      focused: false,
    })
  }

  private onClick = () => {
    if (this.props.disabled) {
      return
    }
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked)
    }
  }

  private onKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused) {
          this.onClick()
        }
        break
    }
  }

  public render() {
    return this.props.children({
      tabIndex: this.props.tabIndex,
      focused: this.state.focused,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onClick: this.onClick,
      onMouseLeave: this.onMouseLeave,
      onMouseEnter: this.onMouseEnter,
      onKeyDown: this.onKeyDown,
    })
  }
}
