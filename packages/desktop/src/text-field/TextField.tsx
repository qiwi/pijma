import React, {SFC, ReactNode} from 'react'

import {
  styled,
  TextFieldControl,
  Input,
  InputField,
} from '@qiwi/pijma-core'

import TextFieldProps from './TextFieldProps'

interface TextFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

const TextFieldStyled = styled.div<TextFieldStyledProps>((props) => ({
  width: '100%',
  [Input.toString()]: {
    color: (
      props.disabled ? (
        props.theme.color.gray.darkest
      ) : (
        undefined
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

const TextField: SFC<TextFieldProps> = (props) => (
  <TextFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    children={(renderProps) => (
      <TextFieldStyled
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
          padded={!!props.hint}
          input={(
            <Input
              type={props.type}
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
              aria-labelledby={props.title}
            />
          )}
          hint={props.hint}
          error={props.error}
          help={props.help}
          action={props.action}
        />
      </TextFieldStyled>
    )}
  />
)

TextField.defaultProps = {
  type: 'text',
  tabIndex: 0,
}

export default TextField
