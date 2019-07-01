import React, {FunctionComponent} from 'react'

import {
  CheckboxControl,
  OptionControl,
  Check,
  OptionField,
  OptionFieldItem,
  Box,
  Stub,
  Spacer,
  Flex,
} from '@qiwi/pijma-core'

import CheckboxFieldProps from './CheckboxFieldProps'
import CheckboxFieldOptionModel from './CheckboxFieldOptionModel'

const CheckboxField: FunctionComponent<
  CheckboxFieldProps<CheckboxFieldOptionModel<any>, any>
> = props => (
  props.stub ? (
    <Box>
      <Stub width={24} height={3} top={2} bottom={4}/>
      <Spacer size="s">
        {(props.stubLines || [33, 38, 30]).map((width: number, id: number) => (
          <Flex key={id} align="center">
            <Stub width={5} height={5} right={3} left={0.5}/>
            <Stub width={width} height={2} top={2} bottom={2}/>
          </Flex>
        ))}
      </Spacer>
    </Box>
  ) : (
    <CheckboxControl<CheckboxFieldOptionModel<any>, any>
      tabIndex={props.tabIndex}
      options={props.options}
      values={props.values}
      equals={props.equals}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      children={(renderProps) => (
        <OptionField
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
                  disabled={option.disabled}
                  icon={(
                    <Box width={6}>
                      <Check
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
)

export default CheckboxField
