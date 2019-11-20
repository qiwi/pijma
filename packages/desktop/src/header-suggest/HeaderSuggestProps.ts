import React from 'react'

import {SuggestControlProps} from '@qiwi/pijma-core'

import HeaderSuggestOptionModel from './HeaderSuggestOptionModel'

export default interface HeaderSuggestProps<O extends HeaderSuggestOptionModel<V>, V> {
  value?: SuggestControlProps<O, V>['value']
  suggest: SuggestControlProps<O, V>['suggest']
  items: SuggestControlProps<O, V>['items']
  target: React.RefObject<any>
  container: React.RefObject<any>
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  error?: boolean
  loading?: boolean
  total?: SuggestControlProps<O, V>['total']
  onChange: SuggestControlProps<O, V>['onChange']
  onRequest: SuggestControlProps<O, V>['onRequest']
  onCancel?: SuggestControlProps<O, V>['onCancel']
  onFocus?: SuggestControlProps<O, V>['onFocus']
  onBlur?: SuggestControlProps<O, V>['onBlur']
  onSubmit?: SuggestControlProps<O, V>['onSubmit']
  onHide?: SuggestControlProps<O, V>['onHide']
  equals?: SuggestControlProps<O, V>['equals']
}
