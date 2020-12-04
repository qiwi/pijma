import React, {FC, ReactNode} from 'react'
import {Card} from '@qiwi/pijma-core'

export interface AnnotationProps {
  children: ReactNode
}

export const Annotation: FC<AnnotationProps> = ({children}) => (
  <Card px={11} pt={11} pb={12} r={10} b="solid 1px #e6e6e6">
    {children}
  </Card>
)
