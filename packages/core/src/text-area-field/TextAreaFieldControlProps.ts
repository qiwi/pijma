import React from 'react'

import RenderChild from '../RenderChild'

export default interface TextAreaFieldControlProps {
  value: string
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onKeyDown?: (event: React.KeyboardEvent) => boolean
  onKeyUp?: (event: React.KeyboardEvent) => boolean
  children: RenderChild<{
    rows: number
    focused: boolean
    ref?: React.RefObject<HTMLTextAreaElement>
    onChange: React.ChangeEventHandler
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onKeyUp: React.KeyboardEventHandler
  }>
}
