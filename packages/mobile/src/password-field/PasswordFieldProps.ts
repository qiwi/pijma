import {ReactNode, KeyboardEvent} from 'react'
import {BasicInputProps, Mask, Pipe} from '@qiwi/pijma-core'

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
  inputMode?: BasicInputProps['inputMode']
}
