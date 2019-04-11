import React, {FunctionComponent} from 'react'

import {
  Switch,
} from '@qiwi/pijma-core'

import SwitcherProps from './SwitcherProps'

const Switcher: FunctionComponent<SwitcherProps> = props => (
  <Switch
    disabled={props.disabled}
    checked={props.checked}
    focused={props.focused}
  />
)

export default Switcher
