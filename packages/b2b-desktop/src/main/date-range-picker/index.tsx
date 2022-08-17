import { Icon, Overlay, styled } from '@qiwi/pijma-core'
import { TextField } from '@qiwi/pijma-desktop'
import { format } from 'date-fns'
import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { WithTranslation, withTranslation } from 'react-i18next'

import {
  getMonths,
  getWeekDaysLong,
  getWeekDaysShort,
} from '../date-picker/locale'
import Wrap from '../date-picker/wrap'
import { COLOR } from '../theme'
import DateRangePickerState from './DateRangePickerState'
import DateRangerPickerProps from './DateRangerPickerProps'

export const PickerDropdown = styled('div')`
  position: absolute;
  background: #fff;
  z-index: 10;
  width: 596px;
  border-radius: 8px;
  box-shadow: ${COLOR.SHADOW.Z3};

  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .Selectable
    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #ff8c0066 !important;
    color: #000000;
  }
  .DayPicker-NavButton {
    margin: 0 0;
    right: 1.5rem;
  }
  .DayPicker-NavButton--prev {
    margin-right: 2rem;
  }
`

export const PickerCellContainer = styled('div')`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled('div')`
  position: relative;
  width: 100%;
`

const RedHelpText = styled('div')`
  color: ${COLOR.TEXT.Error};
`

const InputWrapper = styled('div')`
  input {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`

class DisabledInputDateRangePicker extends Component<
  DateRangerPickerProps & WithTranslation,
  DateRangePickerState
> {
  static defaultProps = {
    numberOfMonths: 2,
  }

  myRef: any
  inputRef: any

  constructor(props: DateRangerPickerProps & WithTranslation) {
    super(props)
    this.state = {
      showPicker: false,
      errorDate: false,
      helpText: null,
    }
    this.myRef = React.createRef()
    this.inputRef = React.createRef()
    this._timeoutID = -1
  }

  _timeoutID: number

  formatPeriod = (dateFrom: Date, dateTo: Date) => {
    if (!dateFrom) {
      return ''
    }

    if (
      !dateTo ||
      format(dateFrom, 'dd.MM.yyyy') === format(dateTo, 'dd.MM.yyyy')
    ) {
      return format(dateFrom, 'dd.MM.yyyy')
    }

    return `${format(dateFrom, 'dd.MM.yyyy')} - ${format(dateTo, 'dd.MM.yyyy')}`
  }

  handleDayClick = (date: any, { disabled }: any) => {
    if (disabled) {
      return
    }

    const normalizeDate = {
      from: this.props.dateFrom,
      to: this.props.dateTo || this.props.dateFrom,
    }

    const range = DayPicker.addToRange(date, normalizeDate)
    const { from: dateFrom, to: dateTo } = range || normalizeDate

    if ((dateFrom || dateTo) && this.props.onChange) {
      this.props.onChange({ dateFrom, dateTo: dateTo || dateFrom })
    }
  }

  onFocus = () => {
    clearTimeout(this._timeoutID)
    this.setState({ showPicker: true })
  }

  onBlur = () => {
    this._timeoutID = window.setTimeout(() => {
      this.setState({ showPicker: false })
    })
  }

  onIconClick = () => {
    this.inputRef.current.focus()
  }

  render() {
    const { t } = this.props
    const MONTHS = getMonths(t)
    const WEEKDAYS_LONG = getWeekDaysLong(t)
    const WEEKDAYS_SHORT = getWeekDaysShort(t)
    const { errorDate, helpText, showPicker } = this.state
    const {
      minDate,
      maxDate,
      dayPickerProps,
      title,
      numberOfMonths,
      dateTo,
      dateFrom,
      inputValue,
    } = this.props
    const modifiers = { start: dateFrom, end: dateTo }
    const disabled: any = {}
    const selectedDays = [dateFrom, { from: dateFrom, to: dateTo }]
    const value = inputValue || this.formatPeriod(dateFrom, dateTo)

    if (minDate) {
      disabled.before = minDate
    }
    if (maxDate) {
      disabled.after = maxDate
    }

    return (
      <Wrap
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        ref={this.inputRef}
        tabIndex={0}
      >
        <InputWrapper>
          <TextField
            type="text"
            title={title || t('datePicker:date')}
            hint={
              <div onClick={this.onIconClick}>
                <Icon name="calendar" />
              </div>
            }
            onChange={() => {
              /* noop */
            }}
            value={value}
            error={errorDate ? t('datePicker:wrongDate') : undefined}
            help={<RedHelpText>{helpText}</RedHelpText>}
          />
        </InputWrapper>
        <Container ref={this.myRef} />

        <Overlay
          show={showPicker}
          placement="bottom"
          container={this.myRef.current}
          target={this.myRef.current}
        >
          {() => (
            <PickerDropdown onFocus={this.onFocus}>
              <DayPicker
                className="Selectable"
                disabledDays={disabled}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                // @ts-ignore
                renderDay={(day) => (
                  <PickerCellContainer>
                    <div>{day.getDate()}</div>
                  </PickerCellContainer>
                )}
                numberOfMonths={numberOfMonths}
                selectedDays={selectedDays}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                firstDayOfWeek={1}
                {...dayPickerProps}
              />
            </PickerDropdown>
          )}
        </Overlay>
      </Wrap>
    )
  }
}

const DateRangePicker = withTranslation()(DisabledInputDateRangePicker)

export { DateRangePicker }
