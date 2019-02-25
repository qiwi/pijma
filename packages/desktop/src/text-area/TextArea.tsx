import React, { FunctionComponent } from 'react'

import { TextFieldControl, InputField, BasicTextArea } from '@qiwi/pijma-core'

import TextAreaProps from './TextAreaProps'

const TextArea: FunctionComponent<TextAreaProps> = (props) => (
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

TextArea.defaultProps = {
  tabIndex: 0,
}

export default TextArea
