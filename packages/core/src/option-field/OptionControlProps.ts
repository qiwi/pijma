import React from 'react'

import {RenderChild} from '@qiwi/pijma-core'

import OptionModel from './OptionModel'

export default interface OptionControlProps<O extends OptionModel<V>, V> {
  value: V
  disabled?: boolean
  onClick: (value: V) => void
  onMouseEnter: (value: V) => void
  children: RenderChild<{
    onClick: React.MouseEventHandler
    onMouseEnter: React.MouseEventHandler
  }>
}
