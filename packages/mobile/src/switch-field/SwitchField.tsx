import React, {FunctionComponent} from 'react'

import {
  CheckboxControl,
  OptionControl,
  OptionField,
  OptionFieldItem,
  Box,
  Tumbler,
} from '@qiwi/pijma-core'

import SwitchFieldProps from './SwitchFieldProps'
import SwitchFieldOptionModel from './SwitchFieldOptionModel'

const SwitchField: FunctionComponent<
  SwitchFieldProps<SwitchFieldOptionModel<any>, any>
> = props => (
  <CheckboxControl<SwitchFieldOptionModel<any>, any>
    tabIndex={props.tabIndex}
    options={props.options}
    values={props.values}
    equals={props.equals}
    onChange={props.onChange}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    children={(renderProps) => (
      <OptionField
        role="switch"
        title={props.title}
        hint={props.hint}
        help={props.help}
        tabIndex={renderProps.tabIndex}
        autoFocus={props.autoFocus}
        onFocus={renderProps.onFocus}
        onBlur={renderProps.onBlur}
        onKeyDown={renderProps.onKeyDown}
        children={renderProps.options.map((option, index) => (
          <OptionControl<any>
            key={index}
            disabled={option.disabled}
            value={option.value}
            onClick={option.onClick}
            onMouseEnter={option.onMouseEnter}
            onMouseLeave={renderProps.onMouseLeave}
            children={(renderOptionProps) => (
              <OptionFieldItem
                role="menuitemradio"
                disabled={option.disabled}
                reverse={props.reverse}
                icon={(
                  <Box width={10}>
                    <Tumbler
                      disabled={option.disabled}
                      checked={option.checked}
                      focused={option.focused}
                    />
                  </Box>
                )}
                label={option.label}
                description={option.description}
                onClick={renderOptionProps.onClick}
                onMouseLeave={renderOptionProps.onMouseLeave}
                onMouseEnter={renderOptionProps.onMouseEnter}
              />
            )}
          />
        ))}
      />
    )}
  />
)

SwitchField.defaultProps = {
  tabIndex: 0,
}

export default SwitchField
