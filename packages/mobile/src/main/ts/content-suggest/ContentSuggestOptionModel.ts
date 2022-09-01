import { SuggestOptionModel } from '@qiwi/pijma-core'

export interface ContentSuggestOptionModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
}
