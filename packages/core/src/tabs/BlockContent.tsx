import React, {FC} from 'react'

import {Box} from '../primitive'

export interface BlockContentProps {
  children: React.ReactNode
  indent?: 'xs' | 's' | 'm' | 'l'
}

const Sizes: {
  [indent in NonNullable<BlockContentProps['indent']>]: {
    t: number
    l: number
    r: number
    b: number
  }
} = {
  xs: {
    t: 4,
    l: 4,
    r: 4,
    b: 4,
  },
  s: {
    t: 8,
    l: 8,
    r: 8,
    b: 8,
  },
  m: {
    t: 11,
    l: 11,
    r: 11,
    b: 12,
  },
  l: {
    t: 11,
    l: 17,
    r: 17,
    b: 12,
  },
}

export const BlockContent: FC<BlockContentProps> = ({indent, children}) => {
  return (
    <Box
      pt={indent ? Sizes[indent].t : 0}
      pl={indent ? Sizes[indent].l : 0}
      pr={indent ? Sizes[indent].r : 0}
      pb={indent ? Sizes[indent].b : 0}
      children={children}
    />
  )
}
