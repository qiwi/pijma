import {SuggestOptionModel} from '@qiwi/pijma-core'

export default interface ContentSuggestOptionModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
}
