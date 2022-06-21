import { BasicInputProps, Mask, Pipe } from '@qiwi/pijma-core'
import { KeyboardEvent, ReactNode } from 'react'

export interface PasswordFieldProps {
  value: string
  tabIndex?: number
  name?: string
  title?: string
  error?: ReactNode
  action?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  viewed?: boolean
  autoComplete?: BasicInputProps['autoComplete']
  autoFocus?: boolean
  placeholder?: string
  inputMode?: BasicInputProps['inputMode']
  disabled?: boolean
  maxLength?: number
  mask?: Mask
  pipe?: Pipe
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  onToggle?: (hidden: boolean) => void
}
