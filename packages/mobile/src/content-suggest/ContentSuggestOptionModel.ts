import {OptionModel} from '@qiwi/pijma-core'

export default interface ContentSuggestOptionModel<V> extends OptionModel<V> {
  title: string
  logo: string
  description: string
}
