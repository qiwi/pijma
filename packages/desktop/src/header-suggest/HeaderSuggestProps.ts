import {ModalSuggestControlProps, OverlayProps} from '@qiwi/pijma-core'

import HeaderSuggestOptionModel from './HeaderSuggestOptionModel'

export default interface HeaderSuggestProps<O extends HeaderSuggestOptionModel<V>, V> {
  value?: ModalSuggestControlProps<O, V>['value']
  suggest: ModalSuggestControlProps<O, V>['suggest']
  items: ModalSuggestControlProps<O, V>['items']
  target?: OverlayProps['target']
  container?: OverlayProps['container']
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  error?: boolean
  loading?: boolean
  total?: ModalSuggestControlProps<O, V>['total']
  onChange: ModalSuggestControlProps<O, V>['onChange']
  onRequest: ModalSuggestControlProps<O, V>['onRequest']
  onCancel?: ModalSuggestControlProps<O, V>['onCancel']
  onFocus?: ModalSuggestControlProps<O, V>['onFocus']
  onBlur?: ModalSuggestControlProps<O, V>['onBlur']
  onSubmit?: ModalSuggestControlProps<O, V>['onSubmit']
  onHide?: ModalSuggestControlProps<O, V>['onHide']
  equals?: ModalSuggestControlProps<O, V>['equals']
}
