import React, { FC } from 'react'

export interface PasswordFieldControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
  onToggle?: (hidden: boolean) => void
  children: FC<{
    focused: boolean
    hidden: boolean
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onKeyUp: React.KeyboardEventHandler
    onToggle: React.MouseEventHandler
  }>
}
