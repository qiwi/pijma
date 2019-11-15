import {SuggestOptionModel} from '@qiwi/pijma-core'

export default interface TestHeaderSuggestOptionsModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
}
