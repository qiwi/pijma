import {SuggestControlProps, OverlayProps} from '@qiwi/pijma-core'

import HeaderSuggestOptionModel from './TestHeaderSuggestOptionModel'

export default interface TestHeaderSuggestProps<O extends HeaderSuggestOptionModel<V>, V> {
  value?: SuggestControlProps<O, V>['value']
  suggest: SuggestControlProps<O, V>['suggest']
  items: SuggestControlProps<O, V>['items']
  target?: OverlayProps['target']
  container?: OverlayProps['container']
  show: boolean
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
