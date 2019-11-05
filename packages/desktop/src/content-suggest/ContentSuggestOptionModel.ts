import {SuggestOptionModel} from '@qiwi/pijma-core'

export default interface ContentSuggestOptionsModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
}
