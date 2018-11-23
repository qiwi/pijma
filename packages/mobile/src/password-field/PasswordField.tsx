import React, {FunctionComponent} from 'react'

import {Box, Input, MaskInput, InputField, PasswordFieldControl} from '@qiwi/pijma-core'
import {EyeClosedIcon, EyeOpenedIcon} from '@qiwi/pijma-media'

import PasswordFieldProps from './PasswordFieldProps'

const PasswordField: FunctionComponent<PasswordFieldProps> = (props) => (
  <PasswordFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    onToggle={props.onToggle}
    children={(renderProps) => (
      <InputField
        title={props.title}
        active={renderProps.focused || !!props.value || !!props.placeholder}
        padded={!!props.hint || !!props.viewed}
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
            type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
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
            type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
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
        hint={(
          props.viewed ? (
            <Box
              display="inline-block"
              width={1}
              height={1}
              onClick={renderProps.onToggle}
              css={{fill: props.disabled ? '#666' : undefined}}
              children={renderProps.hidden ? <EyeClosedIcon/> : <EyeOpenedIcon/>}
            />
          ) : props.hint ? (
            props.hint
          ) : (
            null
          )
        )}
        error={props.error}
        help={props.help}
        action={props.action}
      />
    )}
  />
)

PasswordField.defaultProps = {
  tabIndex: 0,
  viewed: true,
}

export default PasswordField
