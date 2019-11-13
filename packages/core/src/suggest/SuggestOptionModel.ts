import {OptionModel} from '../option'

export default interface SuggestOptionModel<V> extends OptionModel<V> {
  suggest?: string
}
