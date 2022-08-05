import {
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

import { OptionModel } from './OptionModel'

export interface RadioControlProps<O extends OptionModel<V>, V> {
  tabIndex?: number
  options: O[]
  value: V
  equals?: (a: V, b: V) => boolean
  onChange?: (value: V) => void
  onFocus?: () => void
  onBlur?: () => void
  children: FC<{
    tabIndex?: number
    onFocus: FocusEventHandler
    onBlur: FocusEventHandler
    onKeyDown: KeyboardEventHandler
    onMouseLeave: MouseEventHandler
    options: Array<
      O & {
        checked: boolean
        focused: boolean
        onClick: (value: V) => void
        onMouseEnter: (value: V) => void
      }
    >
  }>
}
