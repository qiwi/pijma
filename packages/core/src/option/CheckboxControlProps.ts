import React from 'react'

import RenderChild from '../RenderChild'

import OptionModel from './OptionModel'

export default interface CheckboxControlProps<O extends OptionModel<V>, V> {
  tabIndex?: number
  options: O[]
  values: V[]
  equals?: (a: V, b: V) => boolean
  onChange?: (values: V[]) => void
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
