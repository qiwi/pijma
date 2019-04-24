import React, {FunctionComponent} from 'react'

import {
  Tumbler,
  SwitchField,
  SwitchControl,
  OptionField,
} from '@qiwi/pijma-core'

import SwitchProps from './SwitchProps'

const Switch: FunctionComponent<SwitchProps> = props => (
  <SwitchControl
    checked={props.checked}
    disabled={props.disabled}
    children={renderProps => (
      <OptionField
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        children={
          <SwitchField
            onClick={renderProps.onClick}
            label={props.label}
            reverse={props.reverse}
            disabled={props.disabled}
            children={
              <Tumbler
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

export default Switch
