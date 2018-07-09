import React from 'react'

export default interface TextFieldProps {
  value: string
  tabIndex?: number
  type?: 'text' | 'password' | 'tel' | 'number' | 'search'
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
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
}
