import {ReactNode, KeyboardEvent} from 'react'

import {Country, CountryCode} from '@qiwi/pijma-core'

export default interface PhoneFieldProps {
  value: string
  countries: Country[]
  tabIndex?: number
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  stub?: boolean
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onCountryEnter?: (contryCode: CountryCode) => void
  onCountryLeave?: (contryCode: CountryCode) => void
}
