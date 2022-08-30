import 'react-day-picker/dist/style.css'

import { Icon, Overlay, styled } from '@qiwi/pijma-core'
import { TextField } from '@qiwi/pijma-desktop'
import { format } from 'date-fns'
import React, { Component } from 'react'
import { addToRange, DayPicker } from 'react-day-picker'
import { WithTranslation, withTranslation } from 'react-i18next'

import { locales, TLanguage } from '../date-picker/locale'
import Wrap from '../date-picker/wrap'
import { COLOR } from '../theme'
import DateRangePickerState from './DateRangePickerState'
import DateRangerPickerProps from './DateRangerPickerProps'

export const PickerDropdown = styled('div')`
  position: absolute;
  background: #fff;
  z-index: 10;
  border-radius: 8px;
  box-shadow: ${COLOR.SHADOW.Z3};

  .Selectable {
    --rdp-cell-size: 40px;
    --rdp-accent-color: rgba(255, 140, 0, 0.1);
    --rdp-background-color: rgba(255, 140, 0, 0.4);
    /* Switch to dark colors for dark themes */
    --rdp-accent-color-dark: rgba(255, 140, 0);
    --rdp-background-color-dark: rgba(255, 140, 0.7);
    /* Outline border for focused elements */
    --rdp-outline: 2px solid var(--rdp-accent-color);
    /* Outline border for focused and selected elements */
    --rdp-outline-selected: 2px solid rgba(0, 0, 0, 0.75);

    .my-selected {
      padding: 0px;
      width: 40px;
      height: 40px;
      color: black;
      background-color: rgba(255, 140, 0, 0.4);
      border-radius: unset;
    }

    .my-range-start {
      background-color: rgb(255, 140, 0);
      border-radius: 50% 0px 0px 50%;
    }

    .my-range-middle {
    }

    .my-range-end {
      background-color: rgb(255, 140, 0);
      border-radius: 0px 50% 50% 0px;
    }

    .my-head-cell {
      width: 40px;
      height: 40px;
      padding: 4px;
    }

    .my-caption {
      margin-bottom: 10px;
      margin-left: 8px;
    }

    .my-month {
      margin: 1rem;
    }

    .my-months {
      margin: 0 12px;
      display: flex;
      position: relative;
    }

    .my-day {
      width: 40px;
      height: 40px;
      padding: 4px;
    }

    .my-nav {
      position: absolute;
      translateY(-50%);
      top: 50%;
    }

    .my-caption-start {
      .my-nav {
        left: -24px;
      }
    }

    .my-caption-end {
      .my-nav {
        right: -24px;
      }
    }

    .my-day.my-selected.my-range-end.my-range-start {
      border-radius: 50%;
    }

    .my-day.my-selected.my-range-end, .my-day.my-selected.my-range-start {
      &:focus, &:hover {
         background-color: rgba(255, 140, 0);
      }
    }

    .my-today {
      color: rgb(208, 2, 27);
    }

    .my-caption-label {
      font-size: 20px;
    }
  }
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

    const range = addToRange(date, normalizeDate)
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
    const { t, i18n } = this.props

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
    const selectedDays = { from: dateFrom, to: dateTo }
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
                mode={'range'}
                className="Selectable"
                disabled={disabled}
                locale={locales[i18n.language as TLanguage]}
                numberOfMonths={numberOfMonths}
                selected={selectedDays}
                modifiers={modifiers}
                onDayClick={this.handleDayClick}
                modifiersClassNames={{
                  selected: 'my-selected',
                  today: 'my-today',
                  range_start: 'my-range-start',
                  range_middle: 'my-range-middle',
                  range_end: 'my-range-end',
                }}
                classNames={{
                  day: 'my-day',
                  head_cell: 'my-head-cell',
                  caption: 'my-caption',
                  month: 'my-month',
                  months: 'my-months',
                  caption_start: 'my-caption-start',
                  caption_end: 'my-caption-end',
                  nav: 'my-nav',
                  caption_label: 'my-caption-label',
                }}
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
