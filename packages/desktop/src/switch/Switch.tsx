import React, {FunctionComponent} from 'react'

import {Tumbler, SwitchField, SwitchControl} from '@qiwi/pijma-core'

import SwitchProps from './SwitchProps'

const Switch: FunctionComponent<SwitchProps> = props => (
  <SwitchControl
    disabled={props.disabled}
    onMouseEnter={props.onMouseEnter}
    onMouseLeave={props.onMouseLeave}
    children={renderProps => (
      <SwitchField
        onClick={props.onClick}
        onMouseEnter={renderProps.onMouseEnter}
        label={props.label}
        reverse={props.reverse}
        disabled={props.disabled}
        children={
          <Tumbler
            disabled={props.disabled}
            checked={props.checked}
            focused={renderProps.focused}
          />
        }
      />
    )}
  />
)

export default Switch
