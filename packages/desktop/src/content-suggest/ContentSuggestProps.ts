import {SuggestControlProps} from '@qiwi/pijma-core'

import ContentSuggestOptionModel from './ContentSuggestOptionModel'

export default interface ContentSuggestProps<O extends ContentSuggestOptionModel<V>, V> {
  value?: SuggestControlProps<O, V>['value']
  suggest: SuggestControlProps<O, V>['suggest']
  items: SuggestControlProps<O, V>['items']
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  error?: boolean
  loading?: boolean
  total?: SuggestControlProps<O, V>['total']
  empty?: SuggestControlProps<O, V>['empty']
  onChange: SuggestControlProps<O, V>['onChange']
  onRequest: SuggestControlProps<O, V>['onRequest']
  onCancel?: SuggestControlProps<O, V>['onCancel']
  onFocus?: SuggestControlProps<O, V>['onFocus']
  onBlur?: SuggestControlProps<O, V>['onBlur']
  onSubmit?: SuggestControlProps<O, V>['onSubmit']
  onHide?: SuggestControlProps<O, V>['onHide']
  equals?: SuggestControlProps<O, V>['equals']
}
