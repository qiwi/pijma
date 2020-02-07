import React, {FC, ReactNode, KeyboardEvent, useRef} from 'react'
import {Box, Icon, InputField, BasicInput, DateRangeControl, Pipe, Pos, Flex, Card, Block, DateRanges, defaultMonths, DateRangesKeys, dateRanges} from '@qiwi/pijma-core'
import {Calendar, DropDown, MenuLink, SelectScroll} from '../'

export interface DateRangeProps {
  value?: Date | number | 'all'
  valueTo?: Date
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
  onChange?: (date: Date | number | 'all', dateTo?: Date) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
}

export const DateRange: FC<DateRangeProps> = ({
  value,
  valueTo,
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
  months = defaultMonths,
  firstDayIndex,
}) => {
  const datePickerContainerRef = useRef<HTMLDivElement>(null)
  const datePickerInputRef = useRef<HTMLDivElement>(null)

  return (
    <DateRangeControl
      value={value}
      valueTo={valueTo}
      format={format}
      isRange
      months={months}
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
            show={renderProps.focused}
            container={datePickerContainerRef.current}
            target={datePickerInputRef.current!}
            onHide={renderProps.closeCalendar}
            placement="bottom-start"
            children={(
              <Card s="0 28px 52px 0 rgba(0, 0, 0, 0.16)" r={10}>
                <Block>
                  <Flex display="inline-flex">
                    <Box minWidth={44} pt={3}>
                      {dateRanges.map((key: DateRangesKeys) => {
                        return (
                          <MenuLink
                            key={key}
                            title={DateRanges[key]}
                            active={DateRanges[key] === renderProps.activeRange}
                            onClick={renderProps.changeActiveRange(DateRanges[key])}
                          />
                        )
                      })}
                    </Box>
                    {renderProps.activeRange === DateRanges.day || renderProps.activeRange === DateRanges.range
                      ? (
                        <Card s="rgb(230, 230, 230) -1px 0px 0px 0px}" width={82}>
                          <Calendar
                            activeDate={typeof value === 'object' ? value : undefined}
                            activeDateTo={valueTo}
                            days={days}
                            months={months}
                            firstDayIndex={firstDayIndex}
                            isRange={renderProps.activeRange === DateRanges.range}
                            saveDate={renderProps.saveDate}
                          />
                        </Card>
                      )
                      : null}
                    {renderProps.activeRange === DateRanges.month
                      ? (
                        <Card s="rgb(230, 230, 230) -1px 0px 0px 0px}">
                          <SelectScroll
                            selected={[typeof value === 'number' ? value : new Date().getMonth()]}
                            items={[months.map((month, key) => ({value: key, text: month}))]}
                            onSelect={renderProps.selectMonth}
                          />
                        </Card>
                      )
                      : null}
                  </Flex>
                </Block>
              </Card>
            )}
          />
        </Pos>
      )}
    />
  )
}

DateRange.defaultProps = {
  format: 'yyyy-MM-dd',
}
