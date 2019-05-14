import React, {FunctionComponent} from 'react'

import {
  Tumbler,
  SwitchControl,
  OptionField,
  OptionFieldItem,
  Box,
} from '@qiwi/pijma-core'

import SwitchProps from './SwitchProps'

export const Switch: FunctionComponent<SwitchProps> = props => (
  <SwitchControl
    checked={props.checked}
    disabled={props.disabled}
    onChange={props.onChange}
    children={renderProps => (
      <OptionField
        tabIndex={props.tabIndex}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onMouseLeave={renderProps.onMouseLeave}
        children={
          <OptionFieldItem
            onMouseEnter={renderProps.onMouseEnter}
            onClick={renderProps.onClick}
            label={props.label}
            reverse={props.reverse}
            description={props.description}
            disabled={props.disabled}
            icon={
              <Box width={10}>
                <Tumbler
                  disabled={props.disabled}
                  checked={renderProps.checked}
                  focused={renderProps.focused}
                />
              </Box>}
          />
        }
      />
    )}
  />
)
