import {
  BasicTextArea,
  InputField,
  TextAreaFieldControl,
} from '@qiwi/pijma-core'
import React, { FC, KeyboardEvent, ReactNode } from 'react'

export interface TextAreaFieldProps {
  value: string
  tabIndex?: number
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  minRows?: number
  maxRows?: number
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}

export const TextAreaField: FC<TextAreaFieldProps> = (props) => (
  <TextAreaFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    value={props.value}
    children={(renderProps) => (
      <InputField
        title={props.title}
        active={renderProps.focused || !!props.value || !!props.placeholder}
        input={
          <BasicTextArea
            value={props.value}
            name={props.name}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            disabled={props.disabled}
            error={!!props.error}
            focused={renderProps.focused}
            maxLength={props.maxLength}
            ref={renderProps.ref}
            rows={
              props.maxRows && renderProps.rows > props.maxRows
                ? props.maxRows
                : props.minRows && renderProps.rows < props.minRows
                ? props.minRows
                : renderProps.rows
            }
            overflow={
              props.maxRows && renderProps.rows > props.maxRows
                ? 'auto'
                : 'hidden'
            }
            transition={
              renderProps.animate
                ? 'all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)'
                : undefined
            }
            onChange={renderProps.onChange}
            onFocus={renderProps.onFocus}
            onBlur={renderProps.onBlur}
            onKeyDown={renderProps.onKeyDown}
            onKeyUp={renderProps.onKeyUp}
          />
        }
        error={props.error}
        help={props.help}
        action={props.action}
      />
    )}
  />
)

TextAreaField.defaultProps = {
  tabIndex: 0,
}
