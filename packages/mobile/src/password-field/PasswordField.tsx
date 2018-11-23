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
            appearance="basic"
            type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
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
            type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
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
