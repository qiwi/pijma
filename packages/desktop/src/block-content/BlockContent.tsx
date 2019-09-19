import React, {FC} from 'react'

import {Box} from '@qiwi/pijma-core'

export interface BlockContentProps {
  indent?: 's' | 'm' | 'l'
}

const BlockContentIdent: { [indent in NonNullable<BlockContentProps['indent']>]: string | number } = {
  s: 8,
  m: '44px 44px 48px',
  l: '44px 68px 48px',
}

export const BlockContent: FC<BlockContentProps> = ({indent = 'm', children}) => (
  <Box
    role="section"
    aria-label="content"
    p={BlockContentIdent[indent]}
    children={children}
  />
)

BlockContent.defaultProps = {
  indent: 'm',
}
