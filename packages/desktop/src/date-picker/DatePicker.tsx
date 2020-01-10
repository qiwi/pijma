import React, {FC, ReactNode, KeyboardEvent, Fragment} from 'react'
import {Manager, Popper, Reference} from 'react-popper'
import {Box, Icon, InputField, BasicInput, DatePickerControl, Pipe} from '@qiwi/pijma-core'
import {Calendar} from '../'

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
  days?: string[]
  months?: string[]
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
  return (
    <Manager>
      <DatePickerControl
        value={value}
        format={format}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        children={renderProps => (
          <Fragment>
            <Reference
              children={({ref}) => (
                <Box ref={ref}>
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
                        onClick={renderProps.toggleClick}
                        children={<Icon name="calendar" />}
                      />
                    )}
                    error={error}
                    help={help}
                    action={action}
                  />
                </Box>
              )}
            />
            {renderProps.focused ? (
              <Popper
                placement="bottom-start"
                children={({ref, style}) => (
                  <Box
                    ref={ref}
                    style={{
                      ...style,
                      zIndex: 999,
                    }}
                    width={82}
                    onClick={renderProps.calendarClick}
                  >
                    <Calendar
                      days={days}
                      months={months}
                      firstDayIndex={firstDayIndex}
                      onSelectDate={renderProps.onSelectDate}
                    />
                  </Box>
                )}
              />
            ) : (
              null
            )}
          </Fragment>
        )}
      />
    </Manager>
  )
}

DatePicker.defaultProps = {
  format: 'yyyy-MM-dd',
}
