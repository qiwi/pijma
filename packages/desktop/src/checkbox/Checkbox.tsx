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
    children={renderProps => (
      <OptionField
        tabIndex={props.tabIndex}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        children={
          <OptionFieldItem
            disabled={props.disabled}
            icon={
              <Check
                disabled={props.disabled}
                checked={props.checked}
                focused={renderProps.focused}
              />
            }
            label={props.label}
            description={props.description}
            onClick={props.onClick}
          />
        }
      />
    )}
  />
)

export default Checkbox
