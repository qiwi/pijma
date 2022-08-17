import { Icon, Overlay, styled } from '@qiwi/pijma-core'
import { MaskTextField } from '@qiwi/pijma-desktop'
import { format } from 'date-fns'
import React, { Component } from 'react'
import DayPicker from 'react-day-picker'
import { WithTranslation, withTranslation } from 'react-i18next'

import { COLOR } from '../theme'
import DatePickerProps from './DatePickerProps'
import DatePickerState from './DatePickerState'
import { getMonths, getWeekDaysLong, getWeekDaysShort } from './locale'
import Wrap from './wrap'

const PickerDropdown = styled('div')`
  position: absolute;
  background: #fff;
  z-index: 10;
  box-shadow: ${COLOR.SHADOW.Z3};
  border-radius: 8px;
`

const Container = styled('div')`
  position: relative;
  width: 100%;
`

class _DatePicker extends Component<
  DatePickerProps & WithTranslation,
  DatePickerState
> {
  myRef: any
  _timeoutID: number

  constructor(props: DatePickerProps & WithTranslation) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.state = {
      value: '',
      date: undefined,
      showPicker: false,
      errorDate: false,
      dateRangeMask: [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/],
    }
    this.myRef = React.createRef()
    this._timeoutID = -1
  }

  handleDayClick(date: Date) {
    this.setState({ date, value: format(date, 'dd.MM.yyyy') })
    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  onFocus() {
    clearTimeout(this._timeoutID)
    this.setState({ showPicker: true })
  }

  onBlur() {
    this._timeoutID = window.setTimeout(() => {
      this.setState({ showPicker: false })
    })
  }

  onChange(value: string) {
    const date = this.parseDate(value)
    if (date) {
      this.setState({ errorDate: false })
    } else {
      this.setState({ errorDate: true })
    }

    this.setState({ value, date })

    if (this.props.onChange) {
      this.props.onChange(date)
    }
  }

  parseDate(date: string) {
    const pattern = /^(0?[1-9]|[12]\d|3[01])\.(0?[1-9]|1[0-2])\.\d{4}$/
    if (pattern.test(date)) {
      const parseDate = date.split('.')
      return new Date(`${parseDate[1]}, ${parseDate[0]}, ${parseDate[2]}`)
    }
  }

  render() {
    const { t } = this.props
    const MONTHS = getMonths(t)
    const WEEKDAYS_LONG = getWeekDaysLong(t)
    const WEEKDAYS_SHORT = getWeekDaysShort(t)

    return (
      <Wrap onFocus={this.onFocus.bind(this)} onBlur={this.onBlur.bind(this)}>
        <MaskTextField
          type="text"
          title={this.props.title || t('datePicker:date')}
          hint={<Icon name="calendar" />}
          onChange={this.onChange.bind(this)}
          value={this.state.value}
          error={this.state.errorDate ? t('datePicker:wrongDate') : undefined}
          mask={this.state.dateRangeMask}
        />
        <Container ref={this.myRef} />

        <Overlay
          show={this.state.showPicker}
          onHide={() => {
            /* noop */
          }}
          placement="bottom"
          container={this.myRef.current}
          target={this.myRef.current}
        >
          {() => (
            <PickerDropdown onFocus={this.onFocus.bind(this)}>
              <DayPicker
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                onDayClick={this.handleDayClick.bind(this)}
                selectedDays={this.state.date}
                month={this.state.date}
                firstDayOfWeek={1}
              />
            </PickerDropdown>
          )}
        </Overlay>
      </Wrap>
    )
  }
}

const DatePicker = withTranslation()(_DatePicker)

export { DatePicker }
