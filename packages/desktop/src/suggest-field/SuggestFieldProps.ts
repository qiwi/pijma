import {SuggestControlProps} from '@qiwi/pijma-core'

import SuggestFieldOptionModel from './SuggestFieldOptionModel'

export default interface SuggestFieldProps<O extends SuggestFieldOptionModel<V>, V> {
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
  typeInput?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  empty?: SuggestControlProps<O, V>['empty']
  onChange: SuggestControlProps<O, V>['onChange']
  onRequest: SuggestControlProps<O, V>['onRequest']
  onCancel?: SuggestControlProps<O, V>['onCancel']
  onFocus?: SuggestControlProps<O, V>['onFocus']
  onBlur?: SuggestControlProps<O, V>['onBlur']
  onHide?: SuggestControlProps<O, V>['onHide']
  equals?: SuggestControlProps<O, V>['equals']
}
