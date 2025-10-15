import { Box, getDataProps } from '@qiwi/pijma-core'
import React, { FC, ReactNode } from 'react'

export interface BlockContentProps {
  indent?: 'm' | 'l'
  children?: ReactNode
}

const BlockContentIdent: {
  [indent in NonNullable<BlockContentProps['indent']>]: string | number
} = {
  m: 4,
  l: 6,
}

export const BlockContent: FC<BlockContentProps> = ({
  indent = 'm',
  children,
  ...rest
}) => (
  <Box
    {...getDataProps(rest)}
    p={BlockContentIdent[indent]}
    children={children}
  />
)

BlockContent.displayName = 'BlockContent'

BlockContent.defaultProps = {
  indent: 'm',
}
