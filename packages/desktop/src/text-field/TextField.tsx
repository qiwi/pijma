import React, {FunctionComponent} from 'react'

import {MaskInput, Input, InputField, TextFieldControl, isMaskDigital} from '@qiwi/pijma-core'

import TextFieldProps from './TextFieldProps'

const TextField: FunctionComponent<TextFieldProps> = (props) => (
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
        input={props.mask ? (
          <MaskInput
            appearance="basic"
            type={props.type === undefined ? (isMaskDigital(props.mask) ? 'tel' : 'text') : (['text', 'password', 'tel'].includes(props.type) ? props.type : 'text')}
            value={props.value}
            name={props.name}
            autoComplete={props.autoComplete ? 'on' : 'off'}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            focused={renderProps.focused}
            disabled={!!props.disabled}
            error={!!props.error}
            maxLength={props.maxLength}
            mask={props.mask}
            pipe={props.pipe}
            guide={false}
            keepCharPositions={!!props.pipe}
            placeholderChar={'\u2000'}
            onChange={renderProps.onChange}
            onFocus={renderProps.onFocus}
            onBlur={renderProps.onBlur}
            onKeyDown={renderProps.onKeyDown}
            onKeyUp={renderProps.onKeyUp}
            css={{paddingRight: props.hint ? 28 : undefined}}
          />
        ) : (
          <Input
            appearance="basic"
            type={props.type === undefined ? 'text' : props.type}
            value={props.value}
            name={props.name}
            autoComplete={props.autoComplete ? 'on' : 'off'}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            focused={renderProps.focused}
            disabled={!!props.disabled}
            error={!!props.error}
            maxLength={props.maxLength}
            onChange={renderProps.onChange}
            onFocus={renderProps.onFocus}
            onBlur={renderProps.onBlur}
            onKeyDown={renderProps.onKeyDown}
            onKeyUp={renderProps.onKeyUp}
            css={{paddingRight: props.hint ? 28 : undefined}}
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

TextField.defaultProps = {
  tabIndex: 0,
}

export default TextField
