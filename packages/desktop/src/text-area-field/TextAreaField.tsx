import React, {FunctionComponent} from 'react'

import {TextAreaFieldControl, InputField, BasicTextArea} from '@qiwi/pijma-core'

import TextAreaFieldProps from './TextAreaFieldProps'

const TextAreaField: FunctionComponent<TextAreaFieldProps> = (props) => (
  <TextAreaFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    minRows={props.minRows}
    maxRows={props.maxRows}
    value={props.value}
    children={(renderProps) => (
      <InputField
        title={props.title}
        active={renderProps.focused || !!props.value || !!props.placeholder}
        padded={!!props.hint}
        input={(
          <BasicTextArea
            value={props.value}
            name={props.name}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            disabled={props.disabled}
            padded={!!props.hint}
            error={!!props.error}
            focused={renderProps.focused}
            maxLength={props.maxLength}
            rows={renderProps.rows}
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


TextAreaField.defaultProps = {
  tabIndex: 0,
  minRows: 1,
  maxRows: 5
}

export default TextAreaField
