import {Component, ChangeEventHandler, ChangeEvent, FocusEventHandler, FocusEvent, KeyboardEventHandler, KeyboardEvent} from 'react'
import {format, parse, set, subDays} from 'date-fns'
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
      case DateRanges.month:
        return getRangeFormat(this.props.format).split('').map(sym => sym.match(/^[a-zA-Z]+$/) ? /\d/ : sym)

      case DateRanges.all:
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
        onChange(date, null)
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
      this.props.onChange(date, dateTo ? dateTo : null)
    }
  }

  private getDateFrom = (activeRange?: DateRanges) => {
    switch (activeRange) {
      case DateRanges.day:
        return set(new Date(), {hours: 0, minutes: 0, seconds: 0})

      case DateRanges.month:
        return set(subDays(new Date(), 30), {hours: 0, minutes: 0, seconds: 0})

      case DateRanges.range:

      case DateRanges.all:
      default:
        return null
    }
  }

  private getDateTo = (activeRange?: DateRanges) => {
    switch (activeRange) {
      case DateRanges.day:
      case DateRanges.month:
        return set(new Date(), {hours: 23, minutes: 59, seconds: 59})

      case DateRanges.range:

      case DateRanges.all:
      default:
        return null
    }
  }

  private changeActiveRange = (activeRange?: DateRanges) => () => {
    if (activeRange !== DateRanges.range && this.props.onChange) {
      this.props.onChange(this.getDateFrom(activeRange), this.getDateTo(activeRange))
    }
    this.setState({
      activeRange,
      opened: !activeRange || activeRange === DateRanges.range,
    })
  }

  private getParamsByValue = (date?: Date | null, dateTo?: Date | null) =>
    date && dateTo
      ? `${format(date, this.props.format)} - ${format(dateTo, this.props.format)}`
      : 'Все время'

  public render() {
    const {focused, opened, activeRange} = this.state
    const value = this.getParamsByValue(this.props.value, this.props.valueTo)
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
    })
  }

}
