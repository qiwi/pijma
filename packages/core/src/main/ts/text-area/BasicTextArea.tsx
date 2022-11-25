import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  KeyboardEventHandler,
} from 'react'

import { TextArea } from '../primitive'

export interface BasicTextAreaProps {
  rows: number
  overflow: string
  value: string
  tabIndex?: number
  name?: string
  height?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  transition?: string
  disabled?: boolean
  error: boolean
  focused: boolean
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
}

export const BasicTextArea = forwardRef<
  HTMLTextAreaElement,
  BasicTextAreaProps
>((props, ref) => (
  <TextArea
    ref={ref}
    rows={props.rows}
    width={1}
    height={props.rows * 7}
    valueHeight={7}
    placeholderHeight={7}
    overflow={props.overflow}
    m={0}
    p={0}
    r={0}
    b="none"
    pb={
      props.disabled
        ? '1px'
        : (props.error
        ? '0px'
        : props.focused
        ? '0px'
        : '1px')
    }
    bb={
      props.disabled
        ? '1px dotted #999'
        : (props.error
        ? '2px solid #d0021b'
        : props.focused
        ? '2px solid #ff8c00'
        : '1px solid rgba(0, 0, 0, 0.2)')
    }
    valueSize={5}
    valueWeight={300}
    valueColor={props.disabled ? '#666' : '#000'}
    placeholderColor="#666"
    cursor={props.disabled ? 'not-allowed' : 'text'}
    bg="transparent"
    transition={props.transition}
    value={props.value}
    name={props.name}
    autoComplete={props.autoComplete ? 'on' : 'off'}
    autoFocus={props.autoFocus}
    placeholder={props.placeholder}
    disabled={!!props.disabled}
    maxLength={props.maxLength}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
  />
))

BasicTextArea.displayName = 'BasicTextArea'

BasicTextArea.defaultProps = {
  tabIndex: 0,
}
