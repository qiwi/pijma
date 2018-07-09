import React from 'react'

export default interface PasswordFieldProps {
  value: string
  tabIndex?: number
  name?: string
  title?: string
  error?: React.ReactNode
  action?: React.ReactNode
  help?: React.ReactNode
  hint?: React.ReactNode
  viewed?: boolean
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
  onToggle?: (hidden: boolean) => void
}
