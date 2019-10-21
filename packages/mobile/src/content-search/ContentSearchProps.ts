import {RenderChild} from '@qiwi/pijma-core'

import SearchItemOptionModel from './SearchItemOptionModel'

export default interface ContentSearchProps<O extends SearchItemOptionModel<V>, V> {
  value: string
  items: O[]
  selected?: V
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  error?: boolean
  loading?: boolean
  result?: RenderChild<{
    focused: V | undefined
    selected: V | undefined
    hide: () => void
  }>
  onItemSelect: (item: V) => void
  onCancel?: () => void
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  onSubmit?: (value: string) => void
  equals?: (a: V, b: V) => boolean
}
