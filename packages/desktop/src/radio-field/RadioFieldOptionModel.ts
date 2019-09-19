import {ReactNode} from 'react'

import {OptionModel} from '@qiwi/pijma-core'

export default interface RadioFieldOptionModel<V> extends OptionModel<V> {
  label: string
  description?: ReactNode
}
