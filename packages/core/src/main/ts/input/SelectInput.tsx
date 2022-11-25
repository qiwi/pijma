import React, {
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

import { Input, Value } from '../primitive'

export interface SelectInputProps {
  value: string
  tabIndex?: number
  name?: string
  autoComplete?: boolean
  autoFocus?: boolean
  pl?: Value
  pr?: Value
  disabled?: boolean
  error: boolean
  focused: boolean
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
  onClick?: MouseEventHandler
}

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  (props, ref) => {
    const common = {
      ref,
      width: 1,
      height: 7,
      m: 0,
      p: 0,
      pr: props.pr,
      pl: props.pl,
      r: 0,
      b: 'none',
      bb: props.disabled
        ? '1px dotted #999'
        : (props.error
        ? '2px solid #d0021b'
        : props.focused
        ? '2px solid #ff8c00'
        : '1px solid rgba(0, 0, 0, 0.2)'),
      valueSize: 5,
      valueWeight: 300,
      valueColor: props.disabled ? '#666' : '#000',
      placeholderColor: '#666',
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      bg: 'transparent',
      transition: 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      value: props.value,
      name: props.name,
      autoComplete: props.autoComplete ? 'on' : 'off',
      autoFocus: props.autoFocus,
      disabled: !!props.disabled,
      onChange: props.onChange,
      onFocus: props.onFocus,
      onBlur: props.onBlur,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      onClick: props.onClick,
      readOnly: true,
    }
    return <Input {...common} />
  },
)

SelectInput.displayName = 'SelectInput'

SelectInput.defaultProps = {
  tabIndex: 0,
}
