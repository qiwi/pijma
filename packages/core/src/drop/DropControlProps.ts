import React from 'react'

import RenderChild from '../RenderChild'

export default interface DropControlProps {
  onHide: () => void
  children: RenderChild<{
    onHide: React.FocusEventHandler
  }>
}

