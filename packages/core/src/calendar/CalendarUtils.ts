export interface CalendarDate {
  date: Date
  disabled?: boolean
}

export interface ParseValues {
  year?: number
  month?: number
  date?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
}

export interface CalendarUtils {
  firstDayIndex: number
  days: [string, string, string, string, string, string, string]
  months: [string, string, string, string, string, string, string, string, string, string, string, string]
  minYear: number
  maxYear: number
  format: (date: Date | number, formatString: string) => string
  parse: (dateString: string, formatString: string, backupDate: Date | number) => Date
  set: (date: Date | number, values: ParseValues) => Date
  subDays: (date: Date | number, amount: number) => Date
  getDaysInMonth: (year: number, month: number) => number
  getDatesArray: (from: Date, to: Date, disabled?: boolean) => CalendarDate[]
  getDates: (date: Date) => CalendarDate[]
  getPrevMonth: (date: Date) => Date
  getNextMonth: (date: Date) => Date
}
