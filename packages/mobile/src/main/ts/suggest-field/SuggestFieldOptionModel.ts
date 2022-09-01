import { SuggestOptionModel } from '@qiwi/pijma-core'
import { ReactNode } from 'react'

export interface SuggestFieldOptionModel<V> extends SuggestOptionModel<V> {
  title: string
  logo: string
  description: string
  stub?: string | boolean | ReactNode
}
