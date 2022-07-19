import { OptionModel } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

export interface RadioFieldOptionModel<V> extends OptionModel<V> {
  label: ReactNode
  description?: ReactNode
}
