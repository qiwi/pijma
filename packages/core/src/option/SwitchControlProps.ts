import React from 'react'

import RenderChild from '../RenderChild'

export default interface SwitchControlProps {
  disabled?: boolean
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  children: RenderChild<{
    onMouseEnter: React.MouseEventHandler
    onMouseLeave: React.MouseEventHandler
    focused: boolean
  }>
}
