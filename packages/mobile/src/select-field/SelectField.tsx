import React, {SFC, ReactNode} from 'react'

import {
  styled,
  Field,
  FieldInput,
  FieldTitle,
  FieldTitleText,
  FieldUnder,
  FieldUnderAction,
  FieldUnderError,
  FieldUnderHelp,
  FieldIcon,
  InputSelect,
  SelectControl as SelectFieldControl
} from '@qiwi/pijma-core'

import SelectFieldProps from './SelectFieldProps'

interface SelectFieldStyledProps {
  focused: boolean
  value: string
  disabled?: boolean
  hint?: ReactNode
  error?: ReactNode
}

const SelectFieldStyled = styled.div<SelectFieldStyledProps>((props) => ({
  width: '100%',
  [FieldTitleText.toString()]: {
    fontSize: props.focused || !!props.value ? 13 : 20,
    top: props.focused || !!props.value ? 0 : 16,
    lineHeight: props.focused || !!props.value ? '16px' : '30px',
    paddingRight: props.focused || !!props.value ? undefined : props.hint ? 28 : undefined,
  },
  [InputSelect.toString()]: {
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

const SelectField: SFC<SelectFieldProps> = (props) => (
  <SelectFieldControl
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    onKeyDown={props.onKeyDown}
    onKeyUp={props.onKeyUp}
    children={(renderProps) => (
      <SelectFieldStyled
        focused={renderProps.focused}
        value={props.value}
        disabled={props.disabled}
        error={props.error}
      >
        <Field>
          <FieldTitle>
            <FieldTitleText>
              {props.title}
            </FieldTitleText>
          </FieldTitle>
          <FieldInput>
            <InputSelect
              // name={props.name}
              // autoFocus={props.autoFocus}
              // disabled={props.disabled}
              // onChange={renderProps.onChange}
              // onFocus={renderProps.onFocus}
              // onBlur={renderProps.onBlur}
              // onKeyDown={renderProps.onKeyDown}
              // onKeyUp={renderProps.onKeyUp}
              // aria-labelledby={props.title}
            >
              {props.value}
            </InputSelect>
            <FieldIcon>
            {/*{props.hint}*/}
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
      </SelectFieldStyled>
    )}
  />
)

const defaultProps: Partial<SelectFieldProps> = {
  tabIndex: 0,
}

SelectField.defaultProps = defaultProps

export default SelectField
