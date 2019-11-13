import React, {FunctionComponent} from 'react'

import {PasswordFieldControl, Box, InputField, BasicInput, Icon, Stub, Card, Flex, FlexItem} from '@qiwi/pijma-core'

import PasswordFieldProps from './PasswordFieldProps'

const PasswordField: FunctionComponent<PasswordFieldProps> = (props) => (
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
          {props.hint || props.viewed ? (
            <FlexItem>
              <Stub width={5} height={5} r={10}/>
            </FlexItem>
          ) : (
            null
          )}
        </Flex>
      </Card>
      {props.help || props.error ? (
        <Stub width={15} height={2} top={2} bottom={1}/>
      ) : (
        <Box height={5}/>
      )}
    </Box>
  ) : (
    <PasswordFieldControl
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      onToggle={props.onToggle}
      children={(renderProps) => (
        <InputField
          title={props.title}
          active={renderProps.focused || !!props.value || !!props.placeholder}
          padded={!!props.hint || !!props.viewed}
          input={(
            <BasicInput
              type={props.viewed && !renderProps.hidden ? 'text' : 'password'}
              value={props.value}
              name={props.name}
              autoComplete={props.autoComplete}
              autoFocus={props.autoFocus}
              placeholder={props.placeholder}
              disabled={props.disabled}
              padded={!!props.hint}
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
          hint={(
            props.viewed ? (
              <Box
                display="inline-block"
                width={1}
                height={1}
                onClick={renderProps.onToggle}
                children={(
                  <Icon
                    name={renderProps.hidden ? 'eye-closed' : 'eye-opened'}
                    color={props.disabled ? '#666' : '#000'}
                  />
                )}
              />
            ) : props.hint ? (
              props.hint
            ) : (
              null
            )
          )}
          error={props.error}
          help={props.help}
          action={props.action}
        />
      )}
    />
  )
)

PasswordField.defaultProps = {
  tabIndex: 0,
  viewed: true,
}

export default PasswordField
