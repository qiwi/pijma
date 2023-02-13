import React, { FC, ReactNode } from 'react'

import { Heading } from '../../ts'

interface SectionHeadingRendererProps {
  toolbar: ReactNode
  id: string
  href: string
  depth: number
  deprecated: boolean
  children?: ReactNode
}

const SectionHeadingRenderer: FC<SectionHeadingRendererProps> = (props) => (
  <Heading size="1">{props.children}</Heading>
)

export default SectionHeadingRenderer
