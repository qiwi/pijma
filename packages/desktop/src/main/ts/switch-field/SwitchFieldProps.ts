import { ReactNode } from 'react'

import { OptionModel } from '@qiwi/pijma-core'

export interface SwitchFieldProps<O extends OptionModel<V>, V> {
  title?: ReactNode
  hint?: ReactNode
  help?: ReactNode
  tabIndex?: number
  autoFocus?: boolean
  reverse?: boolean
  stub?: boolean
  options: O[]
  values: V[]
  equals?: (a: V, b: V) => boolean
  onChange: (values: V[]) => void
  onFocus?: () => void
  onBlur?: () => void
}
