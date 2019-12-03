import React, {ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, RefObject, forwardRef} from 'react'
import MaskedInput from 'react-text-mask'

import {MaskInput, Input, Value} from '../primitive'
import {isMaskDigital, Mask, Pipe} from '../mask'

export interface BasicInputProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  name?: string
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  pl?: Value
  pr?: Value
  disabled?: boolean
  error: boolean
  focused: boolean
  mask?: Mask
  pipe?: Pipe
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
}

export const BasicInput = forwardRef<HTMLInputElement | MaskedInput, BasicInputProps>((props, ref) => {
  const common = {
    width: 1,
    height: 7,
    m: 0,
    p: 0,
    pr: props.pr,
    pl: props.pl,
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
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
  }
  return (
    props.mask ? (
      <MaskInput
        {...common}
        ref={ref as RefObject<MaskedInput>}
        type={props.type === undefined ? (isMaskDigital(props.mask) ? 'tel' : 'text') : (['text', 'password', 'tel'].includes(props.type) ? props.type : 'text')}
        mask={props.mask}
        pipe={props.pipe}
        guide={false}
        keepCharPositions={!!props.pipe}
        placeholderChar={'\u2000'}
      />
    ) : (
      <Input
        {...common}
        ref={ref as RefObject<HTMLInputElement>}
        type={props.type === undefined ? 'text' : props.type}
      />
    )
  )
})

BasicInput.defaultProps = {
  tabIndex: 0,
}

export default BasicInput
