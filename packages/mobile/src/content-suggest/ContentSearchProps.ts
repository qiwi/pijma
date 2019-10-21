import {RenderChild} from '@qiwi/pijma-core'

import ContentSuggestOptionModel from './ContentSuggestOptionModel'

export default interface ContentSuggestProps<O extends ContentSuggestOptionModel<V>, V> {
  value?: V
  suggest: string
  items: O[]
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
  onSubmit?: (value: string) => void
  onCancel?: () => void
  onChange?: (value: V) => void
  onRequest?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  equals?: (a: V, b: V) => boolean
}
