import { BasicInputProps, Mask, Pipe } from '@qiwi/pijma-core'
import { KeyboardEvent, ReactNode, Ref } from 'react'

export interface TextFieldProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
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
  mask?: Mask
  pipe?: Pipe
  stub?: boolean
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: KeyboardEvent) => boolean
  onKeyUp?: (event: KeyboardEvent) => boolean
  inputRef?: Ref<HTMLInputElement>
}
