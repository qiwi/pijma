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
    children={(renderProps) => (
      <OptionField
        tabIndex={props.tabIndex}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onKeyDown={renderProps.onKeyDown}
        children={(
          <OptionFieldItem
            disabled={props.disabled}
            label={props.label}
            description={props.description}
            icon={(
              <Check
                disabled={props.disabled}
                checked={renderProps.checked}
                focused={renderProps.focused}
              />
            )}
            onClick={renderProps.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            onMouseLeave={renderProps.onMouseLeave}
          />
        )}
      />
    )}
  />
)

export default Checkbox
