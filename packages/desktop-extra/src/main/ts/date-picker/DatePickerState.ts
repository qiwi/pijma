export default interface DatePickerState {
  value: string
  date: Date | undefined
  showPicker: boolean
  errorDate: boolean
  dateRangeMask: Array<any>
}
