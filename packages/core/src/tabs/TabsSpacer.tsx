import React, {FC} from 'react'

import {Box} from '@qiwi/pijma-core'

export interface TabsSpacerProps {
  children: React.ReactNode
  size?: 's' | 'm' | 'l'
}

const SpacerSize: {
  [size in NonNullable<TabsSpacerProps['size']>]: {
    t: number
    l: number
    r: number
    b: number
  }
} = {
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

export const TabsSpacer: FC<TabsSpacerProps> = ({size, children}) => {
  return (
    <Box
      pt={size ? SpacerSize[size].t : 0}
      pl={size ? SpacerSize[size].l : 0}
      pr={size ? SpacerSize[size].r : 0}
      pb={size ? SpacerSize[size].b : 0}
      children={children}
    />
  )
}
