import React from 'react'

import SelectControlProps from './SelectControlProps'
import SelectControlState from './SelectControlState'

export default class SelectControl<V> extends React.PureComponent<SelectControlProps<V>, SelectControlState> {

  public state: SelectControlState = {
    opened: false,
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

  private onFocus: React.FocusEventHandler<HTMLElement> = () => {
    this.setState({
      opened: false,
      focused: -1,
    })
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: React.FocusEventHandler<HTMLElement> = () => {
    this.setState({
      opened: false,
      focused: -1,
    })
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onButtonClick: React.MouseEventHandler<HTMLElement> = (event: React.MouseEvent<HTMLElement>) => {
    const {
      disabled,
    } = this.props
    const {
      opened,
    } = this.state
    event.preventDefault()
    if (disabled) {
      return
    }
    this.setState({
      opened: !opened,
      focused: -1,
    })
  }

  private onKeyDown: React.KeyboardEventHandler<HTMLElement> = (event: React.KeyboardEvent<HTMLElement>) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        event.stopPropagation()
        let next = this.props.options.every(option => !!option.disabled) ? -1 : this.state.focused === -1 ? 0 : this.state.focused
        while (next !== -1) {
          next = (next + 1) % this.props.options.length
          if (this.props.options[next].disabled) {
            continue
          }
          break
        }
        this.setState({
          opened: true,
          focused: next,
        })
        break
      case 'ArrowUp':
        event.preventDefault()
        event.stopPropagation()
        let prev = this.props.options.every(option => !!option.disabled) ? -1 : this.state.focused === -1 ? this.props.options.length - 1 : this.state.focused
        while (prev !== -1) {
          prev = (prev + this.props.options.length - 1) % this.props.options.length
          if (this.props.options[prev].disabled) {
            continue
          }
          break
        }
        this.setState({
          opened: true,
          focused: prev,
        })
        break
      case 'Enter':
      case ' ':
        event.preventDefault()
        event.stopPropagation()
        this.setState({
          opened: !this.state.opened,
        })
        if (this.state.opened && this.state.focused !== -1) {
          this.onChange(this.props.options[this.state.focused].value)
        }
        break
    }
  }

  private onHide = () => {
    this.setState({
      opened: false,
      focused: -1,
    })
  }

  private onOptionClick = (value: V) => {
    this.setState({
      opened: false,
    })
    this.onChange(value)
  }

  private onOptionMouseEnter = (value: V) => {
    this.setState({
      focused: this.props.options.findIndex(option => this.equals(option.value, value)),
    })
  }

  public render() {
    // const selected = this.props.options.findIndex(option => this.equals(option.value, value))
    return this.props.children({
      tabIndex: this.props.options.filter(option => option.disabled).length === this.props.options.length ? undefined : this.props.tabIndex || 0,
      onHide: this.onHide,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      options: this.props.options.map((option, index) => Object.assign({}, option, {
        selected: this.equals(this.props.value, option.value),
        focused: index === this.state.focused,
        onClick: this.onOptionClick,
        onMouseEnter: this.onOptionMouseEnter,
      })),
    })
    /*
    return (
      <div
        className={classes.self}
        tabIndex={disabled ? null : 0}
        onKeyDown={this.onKeyDown}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      >
        <div className={classes.button} onClick={this.onButtonClick} ref="target">
          <div className={classes.buttonLabel}>
            {selected !== -1 ? options[selected].label : ''}
          </div>
          <div className={classes.buttonToggle}>
            <Icon classes={classes.buttonToggleIcon}/>
          </div>
        </div>
        <Overlay
          show={opened}
          placement="bottom"
          container={this}
          target={() => findDOMNode(this.refs.target)}
          onHide={this.onHide}
        >
          <div className={classes.overlay}>
            <div className={classes.overlayContent}>
              <Menu
                classes={classes.overlayContentMenu}
                options={options}
                selected={selected}
                focused={focused}
                onOptionClick={this.onOptionClick}
                onOptionMouseEnter={this.onOptionMouseEnter}
              />
            </div>
          </div>
        </Overlay>
      </div>
    )
    */
  }

}
