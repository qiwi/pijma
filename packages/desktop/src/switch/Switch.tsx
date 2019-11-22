import React, {FunctionComponent} from 'react'

import {
  Tumbler,
  SwitchControl,
  OptionField,
  OptionFieldItem,
  Box,
  Flex,
  FlexItem,
  Stub,
} from '@qiwi/pijma-core'

import SwitchProps from './SwitchProps'

export const Switch: FunctionComponent<SwitchProps> = props => (
  props.stub ? (
    <Flex
      direction={props.reverse ? 'row-reverse' : 'row'}
      justify={props.reverse ? 'space-between' : 'flex-start'}
    >
      <FlexItem
        ml={props.reverse ? 3 : 0}
        mr={props.reverse ? 0 : 3}
      >
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
      <FlexItem width={1}>
        <Box width={1} maxWidth={33}>
          <Stub height={2} width={1} top={2} bottom={2}/>
        </Box>
      </FlexItem>
      {props.reverse && props.icon ? (
        <FlexItem mr={3}>
          <Stub width={6} height={6} r={12}/>
        </FlexItem>
      ) : (
        null
      )}
    </Flex>
  ) : (
    <SwitchControl
      checked={props.checked}
      disabled={props.disabled}
      onChange={props.onChange}
      children={(renderProps) => (
        <OptionField
          tabIndex={props.tabIndex}
          onFocus={renderProps.onFocus}
          onBlur={renderProps.onBlur}
          onKeyDown={renderProps.onKeyDown}
          children={(
            <OptionFieldItem
              label={props.label}
              reverse={props.reverse}
              iconReverse={props.icon}
              description={props.description}
              disabled={props.disabled}
              icon={(
                <Box width={10}>
                  <Tumbler
                    disabled={props.disabled}
                    checked={renderProps.checked}
                    focused={renderProps.focused}
                  />
                </Box>
              )}
              onMouseLeave={renderProps.onMouseLeave}
              onMouseEnter={renderProps.onMouseEnter}
              onClick={renderProps.onClick}
            />
          )}
        />
      )}
    />
  )
)

Switch.defaultProps = {
  tabIndex: 0,
}
