import React, {FunctionComponent} from 'react'

import {
  Check,
  OptionFieldItem,
  SwitchControl,
  OptionField,
  Box,
  Stub,
  Flex,
} from '@qiwi/pijma-core'

import CheckboxProps from './CheckboxProps'

const Checkbox: FunctionComponent<CheckboxProps> = props => (
  props.stub ? (
    <Flex align="center">
      <Box>
        <Stub
          width={5}
          height={5}
          right={3}
          left={0.5}
        />
      </Box>
      <Box width={1} maxWidth={33}>
        <Stub
          width={1}
          height={2}
          top={2}
          bottom={2}
        />
      </Box>
    </Flex>
  ) : (
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
                <Box width={6}>
                  <Check
                    disabled={props.disabled}
                    checked={renderProps.checked}
                    focused={renderProps.focused}
                  />
                </Box>
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
)

Checkbox.defaultProps = {
  tabIndex: 0,
}

export default Checkbox
