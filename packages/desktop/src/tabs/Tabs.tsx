import React, {FC} from 'react'

import {TabsControl, Box} from '@qiwi/pijma-core'

export interface TabsProps {
  children: React.ReactNode
  size?: 's' | 'm' | 'l'
}

const SpacerSize: {
  [size in NonNullable<TabsProps['size']>]: {
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

export const Tabs: FC<TabsProps> = ({size = 's', ...props}) => {
  return (
    <Box
      pt={SpacerSize[size].pt}
      pl={SpacerSize[size].pl}
      pr={SpacerSize[size].pr}
      pb={SpacerSize[size].pb}
      children={<TabsControl {...props} />}
    />
  )
}
