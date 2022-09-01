import {
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react'

import { OptionModel } from './OptionModel'

export interface CheckboxControlProps<O extends OptionModel<V>, V> {
  tabIndex?: number
  options: O[]
  values: V[]
  equals?: (a: V, b: V) => boolean
  onChange?: (values: V[]) => void
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
