import {ReactNode, KeyboardEvent} from 'react'

import {Country, Phone} from '@qiwi/pijma-core'

export default interface PhoneFieldProps {
  value: Phone
  countries: Country[]
  countryFallback?: Country
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
  onChange?: (value: Phone) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onCountryEnter?: (contry: Country) => void
  onCountryLeave?: (contry: Country) => void
}
