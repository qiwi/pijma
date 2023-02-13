import { ReactNode } from 'react'

import { OptionModel } from '@qiwi/pijma-core'

export interface CheckboxFieldOptionModel<V> extends OptionModel<V> {
  label: ReactNode
  description?: ReactNode
}
