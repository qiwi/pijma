import React, {ReactNode, SFC} from 'react'
import {MaskedInputProps} from 'react-text-mask'

import {
  styled,
  StyledComponent,
  Theme,
  TextFieldControl,
  MaskInput,
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

import MaskTextFieldProps from './MaskTextFieldProps'

const digits = [/\d/, /[0-9]/, /0/, /1/, /2/, /3/, /4/, /5/, /6/, /7/, /8/, /9/].map(r => r.toString())

const isMaskDigital = (mask: MaskedInputProps['mask']): boolean => {
  if (!Array.isArray(mask)) {
    return false
  }
  return mask
    .filter(s => s instanceof RegExp)
    .map(r => r.toString())
    .every(s => digits.includes(s))
}

interface TextFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

const TextFieldStyled: StyledComponent<TextFieldStyledProps, {}, Theme> = styled('div')((props) => ({
  width: '100%',
  [FieldTitleText.toString()]: {
    fontSize: props.focused || !!props.value || !!props.placeholder ? 13 : 20,
    top: props.focused || !!props.value || !!props.placeholder ? 0 : 16,
    lineHeight: props.focused || !!props.value || !!props.placeholder ? '16px' : '30px',
    paddingRight: props.focused || !!props.value || !!props.placeholder ? undefined : props.hint ? 28 : undefined,
  },
  [MaskInput.toString()]: {
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

const MaskTextField: SFC<MaskTextFieldProps> = (props) => (
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
            <MaskInput
              type={props.type !== undefined ? props.type : isMaskDigital(props.mask) ? 'tel' : 'text'}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete ? 'on' : 'off'}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
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

MaskTextField.defaultProps = {
  tabIndex: 0,
}

export default MaskTextField
