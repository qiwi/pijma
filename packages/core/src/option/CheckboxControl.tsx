import React from 'react'

import OptionModel from './OptionModel'
import CheckboxControlProps from './CheckboxControlProps'
import CheckboxControlState from './CheckboxControlState'

export default class CheckboxControl<
  O extends OptionModel<V>,
  V
> extends React.Component<CheckboxControlProps<O, V>, CheckboxControlState> {

  public state: CheckboxControlState = {
    focused: -1,
    singleFocused: false,
    checked: this.props.checked,
  }

  private equals(a: V, b: V): boolean {
    return this.props.equals ? this.props.equals(a, b) : a === b
  }

  private onChange = (value: V) => {
    if (this.props.onChange && this.props.values) {
      this.props.onChange(
        this.props.values.includes(value)
          ? this.props.values.filter(v => !this.equals(v, value))
          : this.props.values.concat(value),
      )
    }
  }

  private onSingleChange = () => {
    this.setState({
      checked: !this.state.checked,
    })
  }

  private onFocus: React.FocusEventHandler<HTMLElement> = () => {
    if (this.props.options && this.state.focused === -1) {
      this.setState({
        focused: this.props.options.findIndex(option => !option.disabled),
      })
    }
    else {
      this.setState({
        singleFocused: true,
      })
    }
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler<HTMLElement> = () => {
    if (this.props.options) {
      this.setState({
        focused: -1,
      })
    }
    else {
      this.setState({
        singleFocused: false,
      })
    }
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => {
    if (!this.props.options) {
      return
    }
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
    if (this.props.options) {
      this.setState({
        focused: -1,
      })
    }
    else {
      this.setState({
        singleFocused: false,
      })
    }
  }

  private onOptionClick = (value: V) => {
    if (this.props.options) {
      this.setState({
        focused: this.props.options.findIndex(option =>
          this.equals(option.value, value),
        ),
      })
      this.onChange(value)
    }
  }

  private onOptionMouseEnter = (value: V) => {
    if (!this.props.options) {
      return
    }
    this.setState({
      focused: this.props.options.findIndex(option =>
        this.equals(option.value, value),
      ),
    })
  }

  private onSingleMouseEnter = () => {
    this.setState({
      singleFocused: true,
    })
  }

  public render() {
    if (this.props.options) {
      return this.props.children({
        tabIndex:
          this.props.options.filter(option => option.disabled).length ===
          this.props.options.length
            ? undefined
            : this.props.tabIndex || 0,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onMouseLeave: this.onMouseLeave,
        options: this.props.options.map((option, index) => ({
          ...option,
          checked: this.props.values
            ? this.props.values.findIndex(value =>
                this.equals(value, option.value),
              ) !== -1
            : false,
          focused: index === this.state.focused,
          onClick: this.onOptionClick,
          onMouseEnter: this.onOptionMouseEnter,
        })),
      })
    }

    return this.props.children({
      tabIndex: this.props.tabIndex,
      focused: this.state.singleFocused,
      checked: this.state.checked,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onSingleChange,
      onMouseLeave: this.onMouseLeave,
      onMouseEnter: this.onSingleMouseEnter,
    })
  }

}
