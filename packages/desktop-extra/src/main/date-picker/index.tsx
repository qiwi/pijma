import { Icon, Overlay, styled } from '@qiwi/pijma-core'
import { MaskTextField } from '@qiwi/pijma-desktop'
import { format } from 'date-fns'
import React, { Component } from 'react'
import { DayPicker } from 'react-day-picker'
import { WithTranslation, withTranslation } from 'react-i18next'

import { COLOR } from '../theme'
import DatePickerProps from './DatePickerProps'
import DatePickerState from './DatePickerState'
import { locales, TLanguage } from './locale'
import Wrap from './wrap'
import 'react-day-picker/dist/style.css'

const PickerDropdown = styled('div')`
  position: absolute;
  background: #fff;
  z-index: 10;
  box-shadow: ${COLOR.SHADOW.Z3};
  border-radius: 8px;

  .Selectable {
    --rdp-cell-size: 40px;
    --rdp-accent-color: rgba(255, 140, 0, 0.4);
    --rdp-background-color: rgba(255, 140, 0.1);
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
      background-color: rgba(255, 140, 0);
      border-radius: 50%;
    }

    .my-head-cell {
      width: 40px;
      height: 40px;
      padding: 4px;
    }

    .my-month {
      margin: 1rem;
    }

    .my-caption {
      margin-bottom: 10px;
      margin-left: 8px;
      display: flex;
      justify-content: space-between;
    }

    .my-day {
      width: 40px;
      height: 40px;
      padding: 4px;
    }

    .my-today {
      color: rgb(208, 2, 27);
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
    const { t, i18n } = this.props

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
                className="Selectable"
                onDayClick={this.handleDayClick.bind(this)}
                selected={this.state.date}
                month={this.state.date}
                locale={locales[i18n.language as TLanguage]}
                modifiersClassNames={{
                  selected: 'my-selected',
                  today: 'my-today',
                }}
                classNames={{
                  day: 'my-day',
                  head_cell: 'my-head-cell',
                  caption: 'my-caption',
                  month: 'my-month',
                }}
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
