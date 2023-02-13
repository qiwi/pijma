import React, { FC } from 'react'

import {
  Box,
  CheckboxControl,
  Flex,
  FlexItem,
  OptionControl,
  OptionField,
  OptionFieldItem,
  Spacer,
  Stub,
  Tumbler,
} from '@qiwi/pijma-core'

import { SwitchFieldOptionModel } from './SwitchFieldOptionModel'
import { SwitchFieldProps } from './SwitchFieldProps'

export const SwitchField: FC<
  SwitchFieldProps<SwitchFieldOptionModel<any>, any>
> = (props) =>
  props.stub ? (
    <Box maxWidth={1}>
      <Stub width={24} height={3} top={2} bottom={4} />
      <Spacer size="s">
        {[33, 38, 30].map((width, index) => (
          <Flex
            key={index}
            direction={props.reverse ? 'row-reverse' : 'row'}
            justify={props.reverse ? 'space-between' : 'flex-start'}
          >
            <FlexItem ml={props.reverse ? 3 : 0} mr={props.reverse ? 0 : 3}>
              <Stub
                width={9}
                height={5}
                top={0.5}
                bottom={0.5}
                left={0.5}
                right={0.5}
                r={10}
              />
            </FlexItem>
            <FlexItem width={width} maxWidth={1}>
              <Stub width={1} height={2} top={2} bottom={2} />
            </FlexItem>
          </Flex>
        ))}
      </Spacer>
    </Box>
  ) : (
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
                  reverse={props.reverse}
                  icon={
                    <Box width={10}>
                      <Tumbler
                        disabled={option.disabled}
                        checked={option.checked}
                        focused={option.focused}
                      />
                    </Box>
                  }
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

SwitchField.displayName = 'SwitchField'

SwitchField.defaultProps = {
  tabIndex: 0,
}
