import React, {FunctionComponent} from 'react'

import {Check, OptionFieldItem, SwitchControl} from '@qiwi/pijma-core'

import CheckboxProps from './CheckboxProps'

const Checkbox: FunctionComponent<CheckboxProps> = props => (
  <SwitchControl
    disabled={props.disabled}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    children={renderProps => (
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
        onMouseEnter={renderProps.onMouseEnter}
        onMouseLeave={renderProps.onMouseLeave}
      />
    )}
  />
)

export default Checkbox
