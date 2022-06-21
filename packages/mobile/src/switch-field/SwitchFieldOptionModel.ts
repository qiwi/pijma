import { OptionModel } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

export default interface SwitchFieldOptionModel<V> extends OptionModel<V> {
  label: ReactNode
  description?: ReactNode
}
