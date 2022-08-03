import { Box } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

export interface BlockContentProps {
  indent?: 's' | 'm' | 'l'
  children?: ReactNode
}

const BlockContentIdent: {
  [indent in NonNullable<BlockContentProps['indent']>]: string | number
} = {
  s: 8,
  m: '44px 44px 48px',
  l: '44px 68px 48px',
}

export const BlockContent: FC<BlockContentProps> = ({
  indent = 'm',
  children,
}) => <Box p={BlockContentIdent[indent]} children={children} />

BlockContent.displayName = 'BlockContent'

BlockContent.defaultProps = {
  indent: 'm',
}
