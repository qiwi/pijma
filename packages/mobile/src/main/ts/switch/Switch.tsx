import {
  Box,
  Flex,
  FlexItem,
  OptionField,
  OptionFieldItem,
  Stub,
  SwitchControl,
  Tumbler,
} from '@qiwi/pijma-core'
import React, { FC } from 'react'

import { SwitchProps } from './SwitchProps'

export const Switch: FC<SwitchProps> = ({
  tabIndex = 0,
  ...props
}) =>
  props.stub ? (
    <Flex
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
      <FlexItem width={33} maxWidth={1}>
        <Stub width={1} height={2} top={2} bottom={2} />
      </FlexItem>
    </Flex>
  ) : (
    <SwitchControl
      checked={props.checked}
      disabled={props.disabled || props.loading}
      onChange={props.onChange}
      children={(renderProps) => (
        <OptionField
          tabIndex={tabIndex}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onKeyDown={renderProps.onKeyDown}
          children={
            <OptionFieldItem
              label={props.label}
              reverse={props.reverse}
              description={props.description}
              disabled={props.disabled}
              icon={
                <Box width={10}>
                  {props.loading ? (
                    <Stub
                      width={9}
                      height={5}
                      top={0.5}
                      bottom={0.5}
                      left={0.5}
                      right={0.5}
                      r={10}
                    />
                  ) : (
                    <Tumbler
                      disabled={props.disabled}
                      checked={props.checked}
                      focused={renderProps.focused}
                    />
                  )}
                </Box>
              }
              onMouseLeave={renderProps.onMouseLeave}
              onMouseEnter={renderProps.onMouseEnter}
              onClick={renderProps.onClick}
            />
          }
        />
      )}
    />
  )

Switch.displayName = 'Switch'
