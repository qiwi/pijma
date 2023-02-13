import { ReactNode } from 'react'

import { OptionModel } from '@qiwi/pijma-core'

export interface RadioFieldProps<O extends OptionModel<V>, V> {
  title?: ReactNode
  hint?: ReactNode
  help?: ReactNode
  tabIndex?: number
  autoFocus?: boolean
  stub?: number[] | boolean
  options: O[]
  value: V
  equals?: (a: V, b: V) => boolean
  onChange: (value: V) => void
  onFocus?: () => void
  onBlur?: () => void
}
