import React from 'react'

import RenderChild from '../RenderChild'

export default interface SwitchControlProps {
  disabled?: boolean
  tabIndex?: number
  checked: boolean
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  onChange?: () => void
  children: RenderChild<{
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onClick: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
    focused: boolean
    tabIndex?: number
    checked: boolean
  }>
}
