import React, {FunctionComponent} from 'react'

import {
  TextFieldControl,
  InputField,
  BasicInput,
} from '@qiwi/pijma-core'

import {TextFieldProps} from './TextFieldProps'

export const TextField: FunctionComponent<TextFieldProps> = (props) => (
  props.stub ? (
    <InputField
      active={false}
      input={false}
      title={props.title}
      hint={props.hint}
      help={props.help}
      error={props.error}
      stub
    />
  ) : (
    <TextFieldControl
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      children={(renderProps) => (
        <InputField
          title={props.title}
          active={renderProps.focused || !!props.value || !!props.placeholder}
          input={(
            <BasicInput
              type={props.type}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
              pr={props.hint ? 7 : undefined}
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
          )}
          hint={props.hint}
          error={props.error}
          help={props.help}
          action={props.action}
        />
      )}
    />
  )
)

TextField.defaultProps = {
  tabIndex: 0,
}
