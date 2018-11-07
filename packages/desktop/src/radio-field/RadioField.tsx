import React, {SFC} from 'react'

import {
  RadioControl,
  OptionControl,
  Radio,
  OptionField,
  OptionFieldItem,
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
      <OptionField
        title={props.title}
        hint={props.hint}
        help={props.help}
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
              <OptionFieldItem
                disabled={option.disabled}
                icon={<Radio disabled={option.disabled} checked={option.checked} focused={option.focused}/>}
                label={option.label}
                description={option.description}
                onClick={renderOptionProps.onClick}
                onMouseEnter={renderOptionProps.onMouseEnter}
              />
            )}
          />
        ))}
      />
    )}
  />
)

export default RadioField
