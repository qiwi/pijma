import React from 'react'

import RenderChild from '../RenderChild'

export default interface TextFieldControlProps {
  onChange?: (value: string, event?: React.ChangeEvent) => void
  onFocus?: () => void
  onBlur?: (event?: React.FocusEvent) => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
  children: RenderChild<{
    focused: boolean
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onKeyUp: React.KeyboardEventHandler
  }>
}
