import React, {FC} from 'react'
import {Card} from '@qiwi/pijma-core'

export const Annotation: FC = ({children}) => (
  <Card px={11} pt={11} pb={12} r={10} b="solid 1px #e6e6e6">
    {children}
  </Card>
)
