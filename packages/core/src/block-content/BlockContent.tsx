import React, {FC} from 'react'

import {Box} from '../primitive'

export interface BlockContentProps {
  size?: 's' | 'm' | 'l'
}

const BlockContentSize: { [size in NonNullable<BlockContentProps['size']>]: string | number } = {
  s: 8,
  m: '44px 44px 48px',
  l: '44px 68px 48px',
}

export const BlockContent: FC<BlockContentProps> = ({size = 'm', children}) => (
  <Box
    p={BlockContentSize[size]}
    children={children}
  />
)

BlockContent.defaultProps = {
  size: 'm',
}
