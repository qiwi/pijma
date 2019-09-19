import {ReactNode} from 'react'

import {OptionModel} from '@qiwi/pijma-core'

export default interface SwitchFieldOptionModel<V> extends OptionModel<V> {
  label: string
  description?: ReactNode
}
