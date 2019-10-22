import React, {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  RefObject,
  forwardRef,
} from 'react'
import MaskedInput from 'react-text-mask'

import {MaskInput, Input, Value} from '../primitive'
import {isMaskDigital, Mask, Pipe} from '../mask'

export interface ContentInputProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  name?: string
  readOnly?: boolean
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  pl?: Value
  pr?: Value
  error: boolean
  focused: boolean
  nort?: boolean
  norb?: boolean
  hovered: boolean
  mask?: Mask
  pipe?: Pipe
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
}

export const ContentInput = forwardRef<HTMLInputElement | MaskedInput, ContentInputProps>((props, ref) => {
  const common = {
    width: 1,
    height: 12,
    m: 0,
    pr: props.pr ? props.pr : 4,
    pl: props.pl ? props.pl : 4,
    py: 3,
    r: `${props.nort ? '0 0' : '10px 10px'} ${props.norb ? '0 0' : '10px 10px'}`,
    b: 'none',
    bb: props.error ? '2px solid #d0021b' : 'none',
    valueSize: 5,
    valueWeight: 300,
    valueColor: '#000',
    placeholderColor: '#666',
    cursor: 'text',
    bg: props.focused ? '#fff' : props.hovered ? 'rgba(224, 224, 224, 0.65)' : '#e6e6e6',
    transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    value: props.value,
    name: props.name,
    autoComplete: props.autoComplete ? 'on' : 'off',
    autoFocus: props.autoFocus,
    readOnly: props.readOnly,
    placeholder: props.placeholder,
    maxLength: props.maxLength,
    onChange: props.onChange,
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onKeyDown: props.onKeyDown,
    onKeyUp: props.onKeyUp,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave,
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

ContentInput.defaultProps = {
  tabIndex: 0,
}

export default ContentInput
