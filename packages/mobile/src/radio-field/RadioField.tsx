import React, {FunctionComponent} from 'react'

import {
  RadioControl,
  OptionControl,
  Radio,
  OptionField,
  OptionFieldItem,
  Box,
} from '@qiwi/pijma-core'

import RadioFieldProps from './RadioFieldProps'
import RadioFieldOptionModel from './RadioFieldOptionModel'

const RadioField: FunctionComponent<
  RadioFieldProps<RadioFieldOptionModel<any>, any>
> = props => (
  <RadioControl<RadioFieldOptionModel<any>, any>
    tabIndex={props.tabIndex}
    options={props.options}
    value={props.value}
    equals={props.equals}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <OptionField
        title={props.title}
        hint={props.hint}
        help={props.help}
        tabIndex={renderProps.tabIndex}
        autoFocus={props.autoFocus}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onKeyDown={renderProps.onKeyDown}
        children={renderProps.options.map((option, index) => (
          <OptionControl<any>
            key={index}
            disabled={option.disabled}
            value={option.value}
            onClick={option.onClick}
            onMouseEnter={option.onMouseEnter}
            onMouseLeave={renderProps.onMouseLeave}
            children={(renderOptionProps) => (
              <OptionFieldItem
                disabled={option.disabled}
                icon={(
                  <Box width={6}>
                    <Radio
                      disabled={option.disabled}
                      checked={option.checked}
                      focused={option.focused}
                    />
                  </Box>
                )}
                label={option.label}
                description={option.description}
                onClick={renderOptionProps.onClick}
                onMouseEnter={renderOptionProps.onMouseEnter}
                onMouseLeave={renderOptionProps.onMouseLeave}
              />
            )}
          />
        ))}
      />
    )}
  />
)

export default RadioField
