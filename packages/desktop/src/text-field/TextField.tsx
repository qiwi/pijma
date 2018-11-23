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
            width={1}
            height={7}
            m={0}
            p={0}
            pr={props.hint ? 7 : undefined}
            r={0}
            b="none"
            bb={props.disabled ? '1px dotted #999' : props.error ? '2px solid #d0021b' : renderProps.focused ? '2px solid #ff8c00' : '1px solid rgba(0, 0, 0, 0.2)'}
            size={5}
            weight={300}
            color={props.disabled ? '#666' : '#000'}
            placeholderColor="#666"
            cursor={props.disabled ? 'not-allowed' : 'text'}
            bg="transparent"
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            type={props.type === undefined ? (isMaskDigital(props.mask) ? 'tel' : 'text') : (['text', 'password', 'tel'].includes(props.type) ? props.type : 'text')}
            value={props.value}
            name={props.name}
            autoComplete={props.autoComplete ? 'on' : 'off'}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            disabled={!!props.disabled}
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
          />
        ) : (
          <Input
            width={1}
            height={7}
            m={0}
            p={0}
            pr={props.hint ? 7 : undefined}
            r={0}
            b="none"
            bb={props.disabled ? '1px dotted #999' : props.error ? '2px solid #d0021b' : renderProps.focused ? '2px solid #ff8c00' : '1px solid rgba(0, 0, 0, 0.2)'}
            size={5}
            weight={300}
            color={props.disabled ? '#666' : '#000'}
            placeholderColor="#666"
            cursor={props.disabled ? 'not-allowed' : 'text'}
            bg="transparent"
            transition="all 100ms cubic-bezier(0.4, 0.0, 0.2, 1)"
            type={props.type === undefined ? 'text' : props.type}
            value={props.value}
            name={props.name}
            autoComplete={props.autoComplete ? 'on' : 'off'}
            autoFocus={props.autoFocus}
            placeholder={props.placeholder}
            disabled={!!props.disabled}
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

TextField.defaultProps = {
  tabIndex: 0,
}

export default TextField
