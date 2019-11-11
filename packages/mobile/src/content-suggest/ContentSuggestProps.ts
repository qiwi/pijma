import {ModalSuggestControlProps} from '@qiwi/pijma-core'

import ContentSuggestOptionModel from './ContentSuggestOptionModel'

export default interface ContentSuggestProps<O extends ContentSuggestOptionModel<V>, V> {
  value?: ModalSuggestControlProps<O, V>['value']
  suggest: ModalSuggestControlProps<O, V>['suggest']
  items: ModalSuggestControlProps<O, V>['items']
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  error?: boolean
  loading?: boolean
  total?: ModalSuggestControlProps<O, V>['total']
  empty?: ModalSuggestControlProps<O, V>['empty']
  onChange: ModalSuggestControlProps<O, V>['onChange']
  onRequest: ModalSuggestControlProps<O, V>['onRequest']
  onCancel?: ModalSuggestControlProps<O, V>['onCancel']
  onFocus?: ModalSuggestControlProps<O, V>['onFocus']
  onBlur?: ModalSuggestControlProps<O, V>['onBlur']
  onSubmit?: ModalSuggestControlProps<O, V>['onSubmit']
  onHide?: ModalSuggestControlProps<O, V>['onHide']
  equals?: ModalSuggestControlProps<O, V>['equals']
}
