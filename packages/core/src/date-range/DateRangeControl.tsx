import {Component, ChangeEventHandler, ChangeEvent, FocusEventHandler, FocusEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import {format, parse} from 'date-fns'
import DateRangeControlProps from './DateRangeControlProps'
import DateRangeControlState from './DateRangeControlState'

export enum DateRanges {
  day = 'День',
  month = 'Месяц',
  all = 'Все время',
  range = 'Другой период',
}
export type DateRangesKeys = keyof typeof DateRanges
export const dateRanges = Object.keys(DateRanges) as DateRangesKeys[]

const getRangeFormat = (format: string) => `${format} - ${format}`

export interface DateRangeValue {
  date?: Date
  dateTo?: Date
  all?: boolean
  month?: number
}

export default class DateRangeControl extends Component<DateRangeControlProps, DateRangeControlState> {

  constructor(props: DateRangeControlProps) {
    super(props)
    this.state = {
      focused: false,
      opened: false,
    }
  }

  private getMaskByRange = (range?: DateRanges) => {
    switch (range) {
      case DateRanges.range:
        return getRangeFormat(this.props.format).split('').map(sym => sym.match(/^[a-zA-Z]+$/) ? /\d/ : sym)

      case DateRanges.all:
      case DateRanges.month:
        return false

      case DateRanges.day:
      default:
        return this.props.format.split('').map(sym => sym.match(/^[a-zA-Z]+$/) ? /\d/ : sym)
    }
  }

  private closeCalendar = () => {
    if (!this.state.focused) {
      this.setState({opened: false})
    }
  }

  private openCalendar = () => {
    this.setState({opened: true})
  }

  private onChange: ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (this.props.onChange) {
      const {format, onChange} = this.props
      const currentDate = new Date()
      const invalidDate = new Date('')
      const value = e.currentTarget.value

      if (this.state.activeRange === DateRanges.range) {
        const isValidRange = value.length === getRangeFormat(format).length
        const [date, dateTo] = value.split(' - ')
        const valueFrom = isValidRange ? parse(date, format, currentDate) : invalidDate
        const valueTo = isValidRange ? parse(dateTo, format, currentDate) : invalidDate
        onChange(valueFrom, valueTo)
      }
      else {
        const date = value.length === format.length
          ? parse(value, format, currentDate)
          : invalidDate
        onChange(date)
      }
    }
  }

  private onFocus: FocusEventHandler = (e: FocusEvent) => {
    e.preventDefault()
    this.setState({focused: true})
    if (this.props.onFocus) {
      this.props.onFocus()
    }
  }

  private onBlur: FocusEventHandler = (e: FocusEvent) => {
    this.setState({focused: false})
    e.preventDefault()
    if (this.props.onBlur) {
      this.props.onBlur()
    }
  }

  private onKeyDown: KeyboardEventHandler = (event: KeyboardEvent) => {
    if (this.props.onKeyDown && this.props.onKeyDown(event)) {
      event.preventDefault()
    }
  }

  private onKeyUp: KeyboardEventHandler = (event: KeyboardEvent) => {
    if (this.props.onKeyUp && this.props.onKeyUp(event)) {
      event.preventDefault()
    }
  }

  private saveDate = (date: Date, dateTo?: Date) => {
    this.setState({opened: false})
    if (this.props.onChange) {
      this.props.onChange(date, this.props.isRange ? dateTo : undefined)
    }
  }

  private selectMonth = ([month]: number[]) => {
    this.setState({
      opened: false,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(month)
      }
    })
  }

  private changeActiveRange = (activeRange?: DateRanges) => () => {
    if (activeRange === DateRanges.all && this.props.onChange) {
      this.props.onChange('all')
    }
    this.setState({
      activeRange,
      opened: activeRange !== DateRanges.all,
    })
  }

  private getParamsByValue = (date?: Date | number | 'all', dateTo?: Date) => {
    switch (typeof date) {
      case 'number':
        return {
          range: DateRanges.month,
          value: this.props.months[date],
        }

      case 'object':
        return dateTo
          ? {
            range: DateRanges.range,
            value: `${format(date, this.props.format)} - ${format(dateTo, this.props.format)}`,
          }
          : {
            range: DateRanges.day,
            value: format(date, this.props.format),
          }

      case 'string':
      default:
        return {
          range: (date && date.length) ? DateRanges.all : DateRanges.day,
          value: (date && date.length) ? 'Все время' : '',
        }
    }
  }

  public render() {
    const {focused, opened, activeRange} = this.state
    const {value} = this.getParamsByValue(this.props.value, this.props.valueTo)
    return this.props.children({
      value,
      focused: focused || opened,
      mask: this.getMaskByRange(activeRange),
      activeRange,
      onChange: this.onChange,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      saveDate: this.saveDate,
      closeCalendar: this.closeCalendar,
      openCalendar: this.openCalendar,
      changeActiveRange: this.changeActiveRange,
      selectMonth: this.selectMonth,
    })
  }

}
