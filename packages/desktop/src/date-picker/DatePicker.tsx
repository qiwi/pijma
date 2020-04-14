import React, {FC, ReactNode, KeyboardEvent, useRef} from 'react'
import {Box, Icon, InputField, BasicInput, DatePickerControl, Pipe, Pos, Block, Card} from '@qiwi/pijma-core'
import {Calendar, DropDown} from '../'

export interface DatePickerProps {
  value?: Date
  tabIndex?: number
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
  format?: string
  pipe?: Pipe
  stub?: boolean
  days?: [string, string, string, string, string, string, string]
  months?: [string, string, string, string, string, string, string, string, string, string, string, string]
  firstDayIndex?: number
  onChange?: (date: Date) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}

export const DatePicker: FC<DatePickerProps> = ({
  value,
  format = 'yyyy-MM-dd',
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  onChange,
  title,
  placeholder,
  name,
  autoComplete,
  autoFocus,
  disabled,
  error,
  maxLength,
  pipe,
  help,
  action,
  days,
  months,
  firstDayIndex,
}) => {
  const datePickerContainerRef = useRef<HTMLDivElement>(null)
  const datePickerInputRef = useRef<HTMLDivElement>(null)

  return (
    <DatePickerControl
      value={value}
      format={format}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onChange={onChange}
      children={renderProps => (
        <Pos type="relative" ref={datePickerContainerRef}>
          <Box ref={datePickerInputRef} onClick={renderProps.openCalendar}>
            <InputField
              title={title}
              active={renderProps.focused || !!value || !!placeholder}
              input={(
                <BasicInput
                  type="text"
                  value={renderProps.value}
                  name={name}
                  autoComplete={autoComplete}
                  autoFocus={autoFocus}
                  placeholder={placeholder}
                  disabled={disabled}
                  pr={7}
                  error={!!error}
                  focused={renderProps.focused}
                  maxLength={maxLength}
                  mask={renderProps.mask}
                  pipe={pipe}
                  onChange={renderProps.onChange}
                  onFocus={renderProps.onFocus}
                  onBlur={renderProps.onBlur}
                  onKeyDown={renderProps.onKeyDown}
                  onKeyUp={renderProps.onKeyUp}
                />
              )}
              hint={(
                <Box
                  cursor="pointer"
                  children={<Icon name="calendar" />}
                />
              )}
              error={error}
              help={help}
              action={action}
            />
          </Box>
          <DropDown
            width={82}
            show={renderProps.focused}
            container={datePickerContainerRef.current}
            target={datePickerInputRef.current!}
            onHide={renderProps.closeCalendar}
            placement="bottom-start"
            children={(
              <Card s="0 28px 52px 0 rgba(0, 0, 0, 0.16)" r={10}>
                <Block>
                  <Calendar
                    date={value}
                    days={days}
                    months={months}
                    firstDayIndex={firstDayIndex}
                    onChange={renderProps.saveDate}
                  />
                </Block>
              </Card>
            )}
          />
        </Pos>
      )}
    />
  )
}

DatePicker.defaultProps = {
  format: 'yyyy-MM-dd',
}
