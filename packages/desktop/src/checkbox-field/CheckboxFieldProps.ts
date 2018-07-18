import {OptionModel} from '@qiwi/pijma-core'

export default interface CheckboxFieldProps<O extends OptionModel<V>, V = any> {
  tabIndex?: number
  autoFocus?: boolean
  options: O[]
  values: V[]
  equals?: (a: V, b: V) => boolean
  onChange: (values: V[]) => void
  onFocus?: () => void
  onBlur?: () => void
}