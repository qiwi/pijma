import React from 'react'

import {
  CheckboxControl,
  OptionControl,
  OptionModel,
  Check,
  OptionField,
  OptionFieldTitle,
  OptionFieldTitleText,
  OptionFieldTitleHint,
  OptionFieldInput,
  OptionFieldInputItem,
  OptionFieldInputItemIcon,
  OptionFieldInputItemText,
  OptionFieldInputItemInfo,
  OptionFieldHelp,
} from '@qiwi/pijma-core'

import CheckboxFieldProps from './CheckboxFieldProps'

interface OptionAnyModel<V> extends OptionModel<V> {
  label: React.ReactNode
  description?: React.ReactNode
}

interface CheckboxFieldAnyProps<V> extends CheckboxFieldProps<OptionAnyModel<V>, V> {
  title?: React.ReactNode
  hint?: React.ReactNode
  help?: React.ReactNode
}

class CheckboxAnyControl<V> extends CheckboxControl<OptionAnyModel<V>, V> {
}

class CheckboxAnyOptionControl<V> extends OptionControl<OptionAnyModel<V>, V> {
}

const CheckboxField: React.SFC<CheckboxFieldAnyProps<any>> = (props) => (
  <CheckboxAnyControl
    tabIndex={props.tabIndex}
    options={props.options}
    values={props.values}
    equals={props.equals}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <OptionField>
        {props.title ? (
          <OptionFieldTitle>
            <OptionFieldTitleText>
              {props.title}
            </OptionFieldTitleText>
            {props.hint ? (
              <OptionFieldTitleHint>
                {props.hint}
              </OptionFieldTitleHint>
            ) : (
              null
            )}
          </OptionFieldTitle>
        ) : (
          null
        )}
        <OptionFieldInput
          tabIndex={renderProps.tabIndex}
          autoFocus={props.autoFocus}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onKeyDown={renderProps.onKeyDown}
          onMouseLeave={renderProps.onMouseLeave}
        >
          {renderProps.options.map((option, index) => (
            <CheckboxAnyOptionControl
              key={index}
              disabled={option.disabled}
              value={option.value}
              onClick={option.onClick}
              onMouseEnter={option.onMouseEnter}
              children={(renderOptionProps) => (
                <OptionFieldInputItem
                  disabled={option.disabled}
                  onClick={renderOptionProps.onClick}
                  onMouseEnter={renderOptionProps.onMouseEnter}
                >
                  <OptionFieldInputItemIcon>
                    <Check
                      disabled={option.disabled}
                      checked={option.checked}
                      focused={option.focused}
                    />
                  </OptionFieldInputItemIcon>
                  <OptionFieldInputItemText
                    disabled={option.disabled}
                    children={option.label}
                  />
                  {option.description ? (
                    <OptionFieldInputItemInfo
                      disabled={option.disabled}
                      children={option.description}
                    />
                  ) : (
                    null
                  )}
                </OptionFieldInputItem>
              )}
            />
          ))}
        </OptionFieldInput>
        {props.help ? (
          <OptionFieldHelp>
            {props.help}
          </OptionFieldHelp>
        ) : (
          null
        )}
      </OptionField>
    )}
  />
)

export default CheckboxField
