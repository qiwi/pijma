import { OptionModel } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

export interface CheckboxFieldProps<O extends OptionModel<V>, V> {
  title?: ReactNode
  hint?: ReactNode
  help?: ReactNode
  tabIndex?: number
  autoFocus?: boolean
  stub?: boolean
  options: O[]
  values: V[]
  equals?: (a: V, b: V) => boolean
  onChange: (values: V[]) => void
  onFocus?: () => void
  onBlur?: () => void
}
