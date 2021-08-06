import {SuggestOptionModel} from '@qiwi/pijma-core'

export default interface SuggestFieldOptionsModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
  stub?: string
}
