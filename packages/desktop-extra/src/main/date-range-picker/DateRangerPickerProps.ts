export default interface DateRangerPickerProps {
  dateFrom: Date
  dateTo: Date
  onChange: (params: any) => void

  inputValue?: string
  title?: string
  numberOfMonths?: number
  minDate?: Date
  maxDate?: Date
  dayPickerProps?: object
}
