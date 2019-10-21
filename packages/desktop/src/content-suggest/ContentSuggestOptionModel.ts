import {OptionModel} from '@qiwi/pijma-core'

export default interface ContentSuggestOptionsModel<V> extends OptionModel<V> {
  title: string
  logo: string
  description: string
}
