import React from 'react'

import {RenderChild, OptionModel} from '@qiwi/pijma-core'

export default interface RadioControlProps<O extends OptionModel<V>, V> {
  tabIndex?: number
  options: O[]
  value: V
  equals?: (a: V, b: V) => boolean
  onChange?: (value: V) => void
  onFocus?: () => void
  onBlur?: () => void
  children: RenderChild<{
    tabIndex?: number
    onFocus: React.FocusEventHandler
    onBlur: React.FocusEventHandler
    onKeyDown: React.KeyboardEventHandler
    onMouseLeave: React.MouseEventHandler
    options: Array<O & {
      checked: boolean
      focused: boolean
      onClick: (value: V) => void
      onMouseEnter: (value: V) => void
    }>
  }>
}
