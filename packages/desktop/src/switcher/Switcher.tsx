import React, {FunctionComponent} from 'react'

import {Switch, SwitchField} from '@qiwi/pijma-core'

import SwitcherProps from './SwitcherProps'

const Switcher: FunctionComponent<SwitcherProps> = props => (
  <SwitchField
    onClick={props.onClick}
    onMouseEnter={props.onMouseEnter}
    label={props.label}
    disabled={props.disabled}
    children={
      <Switch
        disabled={props.disabled}
        checked={props.checked}
        focused={props.focused}
      />
    }
  />
)

export default Switcher
