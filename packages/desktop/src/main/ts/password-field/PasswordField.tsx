import React, { FC } from 'react'

import {
  BasicInput,
  Box,
  getDataProps,
  Icon,
  InputField,
  PasswordFieldControl,
} from '@qiwi/pijma-core'

import { PasswordFieldProps } from './PasswordFieldProps'

export const PasswordField: FC<PasswordFieldProps> = (props) => (
  <PasswordFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    onToggle={props.onToggle}
    children={(renderProps) => (
      <InputField
        {...getDataProps(props)}
        title={props.title}
        active={renderProps.focused || !!props.value || !!props.placeholder}
        input={
          <BasicInput
            type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
            value={props.value}
            name={props.name}
            autoComplete={props.autoComplete}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            inputMode={props.inputMode}
            disabled={props.disabled}
            pr={props.hint || props.viewed ? 7 : undefined}
            error={!!props.error}
            focused={renderProps.focused}
            maxLength={props.maxLength}
            mask={props.mask}
            pipe={props.pipe}
            onChange={renderProps.onChange}
            onFocus={renderProps.onFocus}
            onBlur={renderProps.onBlur}
            onKeyDown={renderProps.onKeyDown}
            onKeyUp={renderProps.onKeyUp}
          />
        }
        hint={
          props.viewed ? (
            <Box
              display="inline-block"
              width={1}
              height={1}
              onClick={renderProps.onToggle}
              children={
                <Icon
                  name={renderProps.hidden ? 'eye-closed' : 'eye-opened'}
                  color={props.disabled ? '#666' : '#000'}
                />
              }
            />
          ) : props.hint ? (
            props.hint
          ) : null
        }
        error={props.error}
        help={props.help}
        action={props.action}
      />
    )}
  />
)

PasswordField.displayName = 'PasswordField'

PasswordField.defaultProps = {
  tabIndex: 0,
  viewed: true,
}
