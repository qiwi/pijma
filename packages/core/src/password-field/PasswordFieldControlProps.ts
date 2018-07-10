import React from 'react'

import {RenderChild} from '@qiwi/pijma-core'

export default interface PasswordFieldControlProps {
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
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
