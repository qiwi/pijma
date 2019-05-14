import React from 'react'

import RenderChild from '../RenderChild'

export default interface SwitchControlProps {
  disabled?: boolean
  tabIndex?: number
  checked: boolean
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onChange?: (value: boolean) => void
  children: RenderChild<{
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onClick: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    onKeyDown: React.KeyboardEventHandler
    focused: boolean
    tabIndex?: number
    checked: boolean
  }>
}
