import React from 'react'
import {MaskedInputProps} from 'react-text-mask'

export default interface MaskTextFieldProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel'
  name?: string
  title?: string
  error?: React.ReactNode
  action?: React.ReactNode
  help?: React.ReactNode
  hint?: React.ReactNode
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  disabled?: boolean
  maxLength?: number
  mask?: MaskedInputProps['mask']
  pipe?: MaskedInputProps['pipe']
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
}
