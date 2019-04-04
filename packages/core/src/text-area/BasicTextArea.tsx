import React, {
  FunctionComponent,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler
} from 'react'

import { TextArea } from '../primitive'

interface BasicTextAreaProps {
  rows: number
  minRows?: number
  maxRows?: number
  value: string
  tabIndex?: number
  name?: string
  height?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  padded: boolean
  disabled?: boolean
  error: boolean
  focused: boolean
  onChange?: ChangeEventHandler
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  onKeyDown?: KeyboardEventHandler
  onKeyUp?: KeyboardEventHandler
}

const BasicTextArea: FunctionComponent<BasicTextAreaProps> = (props) => {
  const { rows, minRows = 1, maxRows = 4 } = props
  return (
    <TextArea
      width={1}
      minHeight={7}
      valueHeight={7}
      placeholderHeight={7}
      rows={
        rows > minRows
          ? rows <= maxRows
            ? rows
            : maxRows
          : minRows
      }
      m={0}
      p={0}
      pr={props.padded ? 7 : undefined}
      r={0}
      b="none"
      bb={
        props.disabled
          ? '1px dotted #999'
          : props.error
          ? '2px solid #d0021b'
          : props.focused
          ? '2px solid #ff8c00'
          : '1px solid rgba(0, 0, 0, 0.2)'
      }
      valueSize={5}
      valueWeight={300}
      valueColor={props.disabled ? '#666' : '#000'}
      placeholderColor="#666"
      cursor={props.disabled ? 'not-allowed' : 'text'}
      bg="transparent"
      transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
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
  )
}

BasicTextArea.defaultProps = {
  tabIndex: 0
}

export default BasicTextArea
