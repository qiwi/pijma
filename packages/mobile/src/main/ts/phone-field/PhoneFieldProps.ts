import { BasicInputProps, FlagProps, PhoneFieldCountry } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

export interface PhoneFieldProps {
  value: string
  countries: PhoneFieldCountry[]
  code?: FlagProps['code']
  tabIndex?: number
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  autoComplete?: BasicInputProps['autoComplete']
  autoFocus?: boolean
  placeholder?: string
  inputMode?: BasicInputProps['inputMode']
  disabled?: boolean
  maxLength?: number
  stub?: boolean
  onChange: (phone: string, code: FlagProps['code'] | undefined) => void
  onFocus?: () => void
  onBlur?: () => void
}
