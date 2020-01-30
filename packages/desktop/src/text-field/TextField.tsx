import React, {FunctionComponent} from 'react'

import {
  TextFieldControl,
  InputField,
  BasicInput,
  Stub,
  Box,
  Card,
  Flex,
  FlexItem,
} from '@qiwi/pijma-core'

import TextFieldProps from './TextFieldProps'

const TextField: FunctionComponent<TextFieldProps> = (props) => (
  props.stub ? (
    <Box>
      {props.title ? (
        <Stub width={15} height={2} top={1} bottom={1}/>
      ) : (
        <Box height={4}/>
      )}
      <Card bb="1px solid rgba(0, 0, 0, 0.2)" height={7}>
        <Flex align="center" justify="space-between" height={1}>
          <FlexItem>
            <Stub width={38} height={3} top={1} bottom={1}/>
          </FlexItem>
          {props.hint ? (
            <FlexItem>
              <Stub width={5} height={5} r={10}/>
            </FlexItem>
          ) : (
            null
          )}
        </Flex>
      </Card>
      {props.help ? (
        <Stub width={15} height={2} top={2} bottom={1}/>
      ) : (
        <Box height={5}/>
      )}
    </Box>
  ) : (
    <TextFieldControl
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      children={(renderProps) => (
        <InputField
          title={props.title}
          active={renderProps.focused || !!props.value || !!props.placeholder}
          input={(
            <BasicInput
              type={props.type}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
              pr={props.hint ? 7 : undefined}
              error={!!props.error}
              focused={renderProps.focused}
              maxLength={props.maxLength}
              mask={props.mask}
              pipe={props.pipe}
              onChange={renderProps.onChange}
              onFocus={renderProps.onFocus}
              onBlur={renderProps.onBlur}
              onKeyDown={renderProps.onKeyDown}
              onKeyUp={renderProps.onKeyUp}
            />
          )}
          hint={props.hint}
          error={props.error}
          help={props.help}
          action={props.action}
        />
      )}
    />
  )
)

TextField.defaultProps = {
  tabIndex: 0,
}

export default TextField
