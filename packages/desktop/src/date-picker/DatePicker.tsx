import React, {FC, ReactNode, KeyboardEvent, Fragment} from 'react'
import {Manager, Popper, Reference} from 'react-popper'
import {Box, Icon, InputField, BasicInput, DatePickerControl, Mask, Pipe} from '@qiwi/pijma-core'
import {Calendar} from '../'

export interface DatePickerProps {
  value: string
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
  mask?: Mask
  pipe?: Pipe
  stub?: boolean
  days?: string[]
  months?: string[]
  firstDayIndex?: number
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onSelectDate?: (date: Date) => void
}

export const DatePicker: FC<DatePickerProps> = props => {
  return (
    <Manager>
      <DatePickerControl
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onSelectDate={props.onSelectDate}
        children={renderProps => (
          <Fragment>
            <Reference
              children={({ref}) => (
                <Box ref={ref}>
                  <InputField
                    title={props.title}
                    active={renderProps.focused || !!props.value || !!props.placeholder}
                    input={(
                      <BasicInput
                        type="text"
                        value={props.value}
                        name={props.name}
                        autoComplete={props.autoComplete}
                        autoFocus={props.autoFocus}
                        placeholder={props.placeholder}
                        disabled={props.disabled}
                        pr={7}
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
                      <Box
                        cursor="pointer"
                        onClick={renderProps.toggleClick}
                        children={<Icon name="calendar" />}
                      />
                    )}
                    error={props.error}
                    help={props.help}
                    action={props.action}
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
                      days={props.days}
                      months={props.months}
                      firstDayIndex={props.firstDayIndex}
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
