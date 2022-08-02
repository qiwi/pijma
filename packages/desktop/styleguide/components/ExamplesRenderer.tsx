import React, { FC, Fragment, ReactNode } from 'react'

interface ExamplesRendererProps {
  children?: ReactNode
}

const ExamplesRenderer: FC<ExamplesRendererProps> = (props) => (
  <Fragment>{props.children}</Fragment>
)

export default ExamplesRenderer
