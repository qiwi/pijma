import React, {FunctionComponent} from 'react'

import {
  Check,
  OptionFieldItem,
  SwitchControl,
  OptionField,
} from '@qiwi/pijma-core'

import CheckboxProps from './CheckboxProps'

const Checkbox: FunctionComponent<CheckboxProps> = props => (
  <SwitchControl
    disabled={props.disabled}
    checked={props.checked}
    onChange={props.onChange}
    children={renderProps => (
      <OptionField
        tabIndex={props.tabIndex}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        children={
          <OptionFieldItem
            onMouseEnter={renderProps.onMouseEnter}
            onMouseLeave={renderProps.onMouseLeave}
            disabled={props.disabled}
            label={props.label}
            description={props.description}
            onClick={renderProps.onClick}
            icon={
              <Check
                disabled={props.disabled}
                checked={renderProps.checked}
                focused={renderProps.focused}
              />
            }
          />
        }
      />
    )}
  />
)

export default Checkbox
