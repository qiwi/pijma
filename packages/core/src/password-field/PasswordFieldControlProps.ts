import React from 'react'

import RenderChild from '../RenderChild'

export default interface PasswordFieldControlProps {
  onChange?: (value: string, event?: React.ChangeEvent) => void
  onFocus?: () => void
  onBlur?: (event?: React.FocusEvent) => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
  onToggle?: (hidden: boolean) => void
  children: RenderChild<{
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
