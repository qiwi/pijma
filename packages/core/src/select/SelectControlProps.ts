import React from 'react'

import {OptionModel, RenderChild} from '@qiwi/pijma-core'

export interface SelectOptionModel<V> extends OptionModel<V> {
  selected: boolean
  focused: boolean
  onClick: (value: V) => void
  onMouseEnter: (value: V) => void
}

export interface SelectChildren<V> {
  tabIndex?: number
  onHide?: () => void
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
  onKeyDown: React.KeyboardEventHandler
  options: SelectOptionModel<V>[]
}

export default interface SelectControlProps<V> {
  tabIndex?: number
  autoFocus?: boolean
  disabled?: boolean
  options: OptionModel<V>[]
  value: V
  equals?: (a: V, b: V) => boolean
  onChange?: (value: V) => void
  onFocus?: () => void
  onBlur?: () => void
  children: RenderChild<SelectChildren<V>>
}
