import React, {FC, useRef, RefObject, ReactNode, KeyboardEvent} from 'react'
import {Box, Icon, InputField, BasicInput, DatePickerControl, Mask, Pipe} from '@qiwi/pijma-core'
import {DropDown, Calendar} from '../'

export interface DatePickerProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  mask?: Mask
  pipe?: Pipe
  stub?: boolean
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onSelectDate?: (date: Date) => void
}

export const DatePicker: FC<DatePickerProps> = props => {
  const inputButton: RefObject<any> = useRef()
  const container: RefObject<any> = useRef()

  return (
    <DatePickerControl
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      onKeyUp={props.onKeyUp}
      children={renderProps => (
        <InputField
          title={props.title}
          active={renderProps.focused || renderProps.isVisible || !!props.value || !!props.placeholder}
          input={(
            <Box ref={container}>
              <Box ref={inputButton}>
                <BasicInput
                  type={props.type}
                  value={props.value}
                  name={props.name}
                  autoComplete={props.autoComplete}
                  autoFocus={props.autoFocus}
                  placeholder={props.placeholder}
                  disabled={props.disabled}
                  pr={7}
                  error={!!props.error}
                  focused={renderProps.focused || renderProps.isVisible}
                  maxLength={props.maxLength}
                  mask={props.mask}
                  pipe={props.pipe}
                  onChange={renderProps.onChange}
                  onFocus={renderProps.onFocus}
                  onBlur={renderProps.onBlur}
                  onKeyDown={renderProps.onKeyDown}
                  onKeyUp={renderProps.onKeyUp}
                />
              </Box>
              <DropDown
                show={true/*renderProps.focused || renderProps.isVisible*/}
                container={container.current}
                target={inputButton.current}
                onHide={() => console.log('hide')}
                width={82}
                children={
                  <Box onClick={renderProps.calendarClick}>
                    <Calendar onSelectDate={props.onSelectDate} />
                  </Box>
                }
              />
            </Box>
          )}
          hint={(
            <Box
              display="inline-block"
              width={1}
              height={1}
              children={<Icon name="calendar" />}
            />
          )}
          error={props.error}
          help={props.help}
          action={props.action}
        />
      )}
    />
  )
}
