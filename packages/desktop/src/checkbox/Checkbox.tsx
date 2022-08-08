import {
  Box,
  Check,
  OptionField,
  OptionFieldItem,
  SwitchControl,
} from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { CheckboxProps } from './CheckboxProps'

export const Checkbox: FC<CheckboxProps> = (props) => (
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
        children={
          <OptionFieldItem
            disabled={props.disabled}
            label={props.label}
            description={props.description}
            icon={
              <Box width={6}>
                <Check
                  disabled={props.disabled}
                  checked={props.checked}
                  focused={renderProps.focused}
                />
              </Box>
            }
            onClick={renderProps.onClick}
            onMouseEnter={renderProps.onMouseEnter}
            onMouseLeave={renderProps.onMouseLeave}
          />
        }
      />
    )}
  />
)

Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  tabIndex: 0,
}
