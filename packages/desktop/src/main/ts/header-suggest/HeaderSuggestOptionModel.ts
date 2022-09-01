import { SuggestOptionModel } from '@qiwi/pijma-core'

export interface HeaderSuggestOptionModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
}
