import {ReactNode} from 'react'

import {PhoneFieldCountry, Phone} from '@qiwi/pijma-core'

export default interface PhoneFieldProps {
  value: Phone
  countries: PhoneFieldCountry[]
  countryFallback?: PhoneFieldCountry
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
}
