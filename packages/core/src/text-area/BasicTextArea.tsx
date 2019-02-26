import React from 'react'

import {TextArea} from '../primitive'

import BasicTextAreaProps from './BasicTextAreaProps'
import BasicTextAreaState from './BasicTextAreaState'

class BasicTextArea extends React.Component<BasicTextAreaProps, BasicTextAreaState> { 
  static defaultProps = {
    tabIndex: 0,
  }

  private defaultHeight: number = 7

  public state: BasicTextAreaState = {
    height: this.defaultHeight,
  }

  private onFocus: React.FocusEventHandler<HTMLElement> = (event: React.FocusEvent<HTMLElement>) => {
    if (this.state.height <= this.defaultHeight) {
      this.setState({
        height: this.state.height + 4,
      })
    }
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  private onBlur: React.FocusEventHandler<HTMLElement> = (event: React.FocusEvent<HTMLElement>) => {
    if (!this.props.value) {
      this.setState({
        height: this.defaultHeight,
      })
    }
    if (this.props.onBlur) {
      this.props.onBlur(event)
    }
  }

  public render() {
    const props = this.props;
    const common = {
      width: 1,
      height: this.state.height,
      m: 0,
      p: 0,
      pr: props.padded ? 7 : undefined,
      r: 0,
      b: 'none',
      bb: props.disabled ? '1px dotted #999' : props.error ? '2px solid #d0021b' : props.focused ? '2px solid #ff8c00' : '1px solid rgba(0, 0, 0, 0.2)',
      valueSize: 5,
      valueWeight: 300,
      valueColor: props.disabled ? '#666' : '#000',
      placeholderColor: '#666',
      cursor: props.disabled ? 'not-allowed' : 'text',
      bg: 'transparent',
      transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      value: props.value,
      name: props.name,
      autoComplete: props.autoComplete ? 'on' : 'off',
      autoFocus: props.autoFocus,
      placeholder: props.placeholder,
      disabled: !!props.disabled,
      maxLength: props.maxLength,
      onChange: props.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
    }
    return (<TextArea {...common}/>)
  }
}

export default BasicTextArea
