import { ReactNode } from 'react'

import { OptionModel } from '@qiwi/pijma-core'

export interface SwitchFieldOptionModel<V> extends OptionModel<V> {
  label: ReactNode
  description?: ReactNode
}
