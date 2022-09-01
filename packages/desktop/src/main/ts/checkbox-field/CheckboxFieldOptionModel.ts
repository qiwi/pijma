import { OptionModel } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

export interface CheckboxFieldOptionModel<V> extends OptionModel<V> {
  label: ReactNode
  description?: ReactNode
}
