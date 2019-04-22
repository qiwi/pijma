import React from 'react'

import RenderChild from '../RenderChild'

export default interface SwitchControlProps {
  disabled?: boolean
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  children: RenderChild<{
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    focused: boolean
  }>
}
