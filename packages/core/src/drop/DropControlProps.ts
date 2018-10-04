import RenderChild from '@qiwi/pijma-core/RenderChild'
import React from 'react'

export default interface DropControlProps {
  onShow?: () => void,
  onHide: () => void,
  children: RenderChild<{
    onShow?: React.MouseEventHandler
    onHide: React.FocusEventHandler
  }>
}

