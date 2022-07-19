import { SuggestControlProps } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

import { SuggestFieldOptionModel } from './SuggestFieldOptionModel'

export interface SuggestFieldProps<O extends SuggestFieldOptionModel<V>, V> {
  value?: SuggestControlProps<O, V>['value']
  suggest: SuggestControlProps<O, V>['suggest']
  items: SuggestControlProps<O, V>['items']
  tabIndex?: number
  autoComplete?: boolean
  autoFocus?: boolean
  placeholder?: string
  maxLength?: number
  stub?: boolean
  loading?: boolean
  type?: 'text' | 'password' | 'tel' | 'number' | 'search' | 'email' | 'url'
  name?: string
  title?: string
  disabled?: boolean
  error?: ReactNode
  help?: ReactNode
  hint?: ReactNode
  action?: ReactNode
  empty?: SuggestControlProps<O, V>['empty']
  onChange: SuggestControlProps<O, V>['onChange']
  onRequest: SuggestControlProps<O, V>['onRequest']
  onCancel?: SuggestControlProps<O, V>['onCancel']
  onFocus?: SuggestControlProps<O, V>['onFocus']
  onBlur?: SuggestControlProps<O, V>['onBlur']
  equals?: SuggestControlProps<O, V>['equals']
}
