import React, {FunctionComponent} from 'react'

import {PasswordFieldControl, Box, InputField, BasicInput} from '@qiwi/pijma-core'
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
        input={(
          <BasicInput
            type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
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
