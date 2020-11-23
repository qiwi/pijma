import {ReactElement, ReactNode} from 'react'

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
  error?: ReactNode
  loading?: boolean
  total?: SuggestControlProps<O, V>['total'] | ReactElement | string
  name?: string
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  title?: string
  disabled?: boolean
  help?: ReactNode
  hint?: ReactNode
  action?: ReactNode
  empty?: SuggestControlProps<O, V>['empty'] | ReactElement | string
  onChange: SuggestControlProps<O, V>['onChange']
  onRequest: SuggestControlProps<O, V>['onRequest']
  onCancel?: SuggestControlProps<O, V>['onCancel']
  onFocus?: SuggestControlProps<O, V>['onFocus']
  onBlur?: SuggestControlProps<O, V>['onBlur']
  onSubmit?: SuggestControlProps<O, V>['onSubmit']
  equals?: SuggestControlProps<O, V>['equals']
}
