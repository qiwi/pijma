import React, {FC} from 'react'

import {Block} from '@qiwi/pijma-core'
import {BlockContent, BlockContentProps} from './BlockContent'

export interface TabPanelProps {
  block?: boolean
}

export const TabPanel: FC<TabPanelProps & BlockContentProps> = ({children, block, indent}) => {
  const component = (
    <BlockContent
      indent={indent}
      children={children}
    />
  )

  if (block) {
    return (
      <Block>
        {component}
      </Block>
    )
  }

  return component
}
