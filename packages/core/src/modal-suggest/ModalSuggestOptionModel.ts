import {OptionModel} from '../option'

export default interface ModalSuggestOptionModel<V> extends OptionModel<V> {
  suggest?: string
}
