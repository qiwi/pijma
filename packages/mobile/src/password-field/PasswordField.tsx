import React, {MouseEventHandler, ReactNode, SFC} from 'react'

import {
  styled,
  PasswordFieldControl,
  Input,
  InputField,
} from '@qiwi/pijma-core'

import {
  EyeClosedIcon,
  EyeOpenedIcon,
} from '@qiwi/pijma-media'

import PasswordFieldProps from './PasswordFieldProps'

interface HiddenToggleProps {
  onClick: MouseEventHandler
}

const HiddenToggle = styled.span<HiddenToggleProps>({
  display: 'inline-block',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
})

interface PasswordFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  viewed?: boolean
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

const PasswordFieldStyled = styled.div<PasswordFieldStyledProps>((props) => ({
  width: '100%',
  [HiddenToggle.toString()]: {
    fill: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : (
        undefined
      )
    ),
  },
  [Input.toString()]: {
    color: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : (
        props.theme.color.black
      )
    ),
    borderBottom: (
      props.disabled ? (
        `1px dotted ${props.theme.color.gray.dark}`
      ) : props.error ? (
        `2px solid ${props.theme.color.error}`
      ) : props.focused ? (
        `2px solid ${props.theme.color.brand}`
      ) : (
        undefined
      )
    ),
    paddingRight: props.hint ? 28 : undefined,
  },
}))

const PasswordField: SFC<PasswordFieldProps> = (props) => (
  <PasswordFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    onToggle={props.onToggle}
    children={(renderProps) => (
      <PasswordFieldStyled
        focused={renderProps.focused}
        value={props.value}
        disabled={props.disabled}
        placeholder={props.placeholder}
        hint={props.hint}
        error={props.error}
      >
        <InputField
          title={props.title}
          active={renderProps.focused || !!props.value || !!props.placeholder}
          padded={!!props.hint || !!props.viewed}
          input={(
            <Input
              type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete ? 'on' : 'off'}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
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
              <HiddenToggle onClick={renderProps.onToggle}>
                {renderProps.hidden ? (
                  <EyeClosedIcon/>
                ) : (
                  <EyeOpenedIcon/>
                )}
              </HiddenToggle>
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
      </PasswordFieldStyled>
    )}
  />
)

PasswordField.defaultProps = {
  tabIndex: 0,
  viewed: true,
}

export default PasswordField
