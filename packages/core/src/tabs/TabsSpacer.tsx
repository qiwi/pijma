import React, {FC} from 'react'

import {Box} from '@qiwi/pijma-core'

export interface TabsSpacerProps {
  children: React.ReactNode
  size?: 's' | 'm' | 'l'
}

const SpacerSize: {
  [size in NonNullable<TabsSpacerProps['size']>]: {
    pt: number
    pl: number
    pr: number
    pb: number
  }
} = {
  s: {
    pt: 8,
    pl: 8,
    pr: 8,
    pb: 8,
  },
  m: {
    pt: 11,
    pl: 11,
    pr: 11,
    pb: 12,
  },
  l: {
    pt: 11,
    pl: 17,
    pr: 17,
    pb: 12,
  },
}

export const TabsSpacer: FC<TabsSpacerProps> = ({size, children}) => {
  return (
    <Box
      pt={size ? SpacerSize[size].pt : 0}
      pl={size ? SpacerSize[size].pl : 0}
      pr={size ? SpacerSize[size].pr : 0}
      pb={size ? SpacerSize[size].pb : 0}
      children={children}
    />
  )
}
