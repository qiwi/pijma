import { ReactElement, RefObject } from 'react'

import { SuggestControlProps } from '@qiwi/pijma-core'

import { HeaderSuggestOptionModel } from './HeaderSuggestOptionModel'

export interface HeaderSuggestProps<O extends HeaderSuggestOptionModel<V>, V> {
  value?: SuggestControlProps<O, V>['value']
  suggest: SuggestControlProps<O, V>['suggest']
  items?: SuggestControlProps<O, V>['items']
  target: RefObject<any>
  container: RefObject<any>
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  error?: boolean
  loading?: boolean
  total?: SuggestControlProps<O, V>['total'] | ReactElement | string
  empty?: SuggestControlProps<O, V>['empty'] | ReactElement | string
  onChange: SuggestControlProps<O, V>['onChange']
  onRequest: SuggestControlProps<O, V>['onRequest']
  onCancel?: SuggestControlProps<O, V>['onCancel']
  onFocus?: SuggestControlProps<O, V>['onFocus']
  onBlur?: SuggestControlProps<O, V>['onBlur']
  onSubmit?: SuggestControlProps<O, V>['onSubmit']
  equals?: SuggestControlProps<O, V>['equals']
}
