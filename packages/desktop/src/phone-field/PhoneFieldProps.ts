import {ReactNode} from 'react'

import {PhoneFieldCountry, FlagProps, BasicInputProps} from '@qiwi/pijma-core'

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
  disabled?: boolean
  maxLength?: number
  stub?: boolean
  onChange: (phone: string, code: FlagProps['code'] | undefined) => void
  onFocus?: () => void
  onBlur?: () => void
}
