import {OptionModel} from '@qiwi/pijma-core'

export default interface RadioFieldProps<O extends OptionModel<V>, V = any> {
  tabIndex?: number
  autoFocus?: boolean
  options: O[]
  value: V
  equals?: (a: V, b: V) => boolean
  onChange: (value: V) => void
  onFocus?: () => void
  onBlur?: () => void
}