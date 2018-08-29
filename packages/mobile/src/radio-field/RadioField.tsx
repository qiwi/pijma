import React, {SFC} from 'react'

import {
  RadioControl,
  OptionControl,
  Radio,
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

import RadioFieldProps from './RadioFieldProps'
import RadioFieldOptionModel from './RadioFieldOptionModel'

const RadioField: SFC<RadioFieldProps<RadioFieldOptionModel<any>, any>> = (props) => (
  <RadioControl<RadioFieldOptionModel<any>, any>
    tabIndex={props.tabIndex}
    options={props.options}
    value={props.value}
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
          children={renderProps.options.map((option, index) => (
            <OptionControl<any>
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
                    <Radio
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
        />
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

export default RadioField
