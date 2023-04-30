import React, { FC, ReactNode } from 'react'

import { Spacer } from '@qiwi/pijma-core'

// @ts-ignore
import Pathline from 'rsg-components/Pathline'

interface ReactComponentRendererProps {
  name: string
  heading: ReactNode
  filepath: string
  pathLine: string
  tabButtons?: ReactNode
  tabBody?: ReactNode
  description?: ReactNode
  docs?: ReactNode
  examples: ReactNode
  isolated: boolean
}

const ReactComponentRenderer: FC<ReactComponentRendererProps> = (props) => (
  <Spacer size="xl">
    <Spacer size="s">
      {props.heading}
      {props.pathLine ? <Pathline>{props.pathLine}</Pathline> : null}
    </Spacer>
    <Spacer size="m">
      {props.description}
      {props.docs}
      {props.tabButtons}
      {props.tabBody}
    </Spacer>
    {props.examples}
  </Spacer>
)

export default ReactComponentRenderer
