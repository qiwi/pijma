import React, {FC} from 'react'

import {Box} from '@qiwi/pijma-core'

export interface BlockContentProps {
  indent?: 'm' | 'l'
}

const BlockContentIdent: { [indent in NonNullable<BlockContentProps['indent']>]: string | number } = {
  m: 4,
  l: 6,
}

export const BlockContent: FC<BlockContentProps> = ({indent = 'm', children}) => (
  <Box
    p={BlockContentIdent[indent]}
    children={children}
  />
)

BlockContent.defaultProps = {
  indent: 'm',
}
