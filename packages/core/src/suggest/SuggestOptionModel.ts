import { OptionModel } from '../option'

export interface SuggestOptionModel<V> extends OptionModel<V> {
  suggest?: string
}
