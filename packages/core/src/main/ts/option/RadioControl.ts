import { Component, FocusEventHandler, KeyboardEventHandler } from 'react'

import { OptionModel } from './OptionModel'
import { RadioControlProps } from './RadioControlProps'
import { RadioControlState } from './RadioControlState'

export class RadioControl<O extends OptionModel<V>, V> extends Component<
  RadioControlProps<O, V>,
  RadioControlState
> {
  public static displayName = 'RadioControl'

  public state: RadioControlState = {
    focused: -1,
  }

  private equals(a: V, b: V): boolean {
    return this.props.equals ? this.props.equals(a, b) : a === b
  }

  private onChange = (value: V) => {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  private onFocus: FocusEventHandler<HTMLElement> = () => {
    if (this.state.focused === -1) {
      this.setState({
        focused: this.props.options.findIndex((option) => !option.disabled),
      })
    }
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: FocusEventHandler<HTMLElement> = () => {
    this.setState({
      focused: -1,
    })
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: KeyboardEventHandler = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        event.stopPropagation()
        let next = this.state.focused === -1 ? 0 : this.state.focused
        while (true) {
          next = (next + 1) % this.props.options.length
          if (this.props.options[next].disabled) {
            continue
          }
          break
        }
        this.setState({
          focused: next,
        })
        break
      case 'ArrowUp':
        event.preventDefault()
        event.stopPropagation()
        let prev =
          this.state.focused === -1
            ? this.props.options.length - 1
            : this.state.focused
        while (true) {
          prev =
            (prev + this.props.options.length - 1) % this.props.options.length
          if (this.props.options[prev].disabled) {
            continue
          }
          break
        }
        this.setState({
          focused: prev,
        })
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        if (this.state.focused !== -1) {
          this.onChange(this.props.options[this.state.focused].value)
        }
        break
    }
  }

  private onMouseLeave = () => {
    this.setState({
      focused: -1,
    })
  }

  private onOptionClick = (value: V) => {
    this.setState({
      focused: this.props.options.findIndex((option) =>
        this.equals(option.value, value),
      ),
    })
    this.onChange(value)
  }

  private onOptionMouseEnter = (value: V) => {
    this.setState({
      focused: this.props.options.findIndex((option) =>
        this.equals(option.value, value),
      ),
    })
  }

  public render() {
    return this.props.children({
      tabIndex:
        this.props.options.filter((option) => option.disabled).length ===
        this.props.options.length
          ? undefined
          : this.props.tabIndex || 0,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onMouseLeave: this.onMouseLeave,
      options: this.props.options.map((option, index) => ({
        ...option,
        checked: this.equals(this.props.value, option.value),
        focused: index === this.state.focused,
        onClick: this.onOptionClick,
        onMouseEnter: this.onOptionMouseEnter,
      })),
    })
  }
}
