import React, {SFC, ReactNode} from 'react'

import {
  styled,
  TextFieldControl,
  Input,
  Field,
  FieldInput,
  FieldTitle,
  FieldTitleText,
  FieldUnder,
  FieldUnderAction,
  FieldUnderError,
  FieldUnderHelp,
  FieldIcon,
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
  [FieldTitleText.toString()]: {
    fontSize: props.focused || !!props.value || !!props.placeholder ? 13 : 20,
    top: props.focused || !!props.value || !!props.placeholder ? 0 : 16,
    lineHeight: props.focused || !!props.value || !!props.placeholder ? '16px' : '30px',
    paddingRight: props.focused || !!props.value || !!props.placeholder ? undefined : props.hint ? 28 : undefined,
  },
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
        <Field>
          <FieldTitle>
            <FieldTitleText>
              {props.title}
            </FieldTitleText>
          </FieldTitle>
          <FieldInput>
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
            <FieldIcon>
              {props.hint}
            </FieldIcon>
          </FieldInput>
          <FieldUnder>
            {props.error ? (
              <FieldUnderError>
                {props.error}
              </FieldUnderError>
            ) : props.help ? (
              <FieldUnderHelp>
                {props.help}
              </FieldUnderHelp>
            ) : (
              null
            )}
            {props.action ? (
              <FieldUnderAction>
                {props.action}
              </FieldUnderAction>
            ) : (
              null
            )}
          </FieldUnder>
        </Field>
      </TextFieldStyled>
    )}
  />
)

const defaultProps: Partial<TextFieldProps> = {
  type: 'text',
  tabIndex: 0,
}

TextField.defaultProps = defaultProps

export default TextField
