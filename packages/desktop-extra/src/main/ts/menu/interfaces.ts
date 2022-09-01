import { ReactNode } from 'react'

export interface TMenuItem {
  name: any
  value:
    | any
    | {
        value: string
        path: string
      }
  node: ReactNode
}
