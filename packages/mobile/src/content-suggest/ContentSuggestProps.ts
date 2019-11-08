import {ModalSuggestResult} from '@qiwi/pijma-core'
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
  total?: ModalSuggestResult
  empty?: ModalSuggestResult
  onChange: (value: V) => void
  onRequest: (value: string) => void
  onShow?: () => void
  onSubmit?: (value: string) => void
  onCancel?: () => void
  onFocus?: () => void
  onBlur?: () => void
  equals?: (a: V, b: V) => boolean
}
