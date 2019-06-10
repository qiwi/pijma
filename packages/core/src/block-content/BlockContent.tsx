import React, {FC, ReactChildren} from 'react'

import {Box} from '../primitive'

export interface BlockContentProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  children?: ReactChildren
}

const BlockContentSize: { [size in NonNullable<BlockContentProps['size']>]: string | number } = {
  xs: 4,
  s: 6,
  m: 8,
  l: '44px 44px 48px',
  xl: '44px 68px 48px',
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
