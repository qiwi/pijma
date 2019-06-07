import React, {FC} from 'react'

import {TabsControl, TabsSpacer} from '@qiwi/pijma-core'

export interface TabsProps {
  children: React.ReactNode
  size?: 's' | 'm' | 'l'
}

export const Tabs: FC<TabsProps> = ({size, ...props}) => {
  return (
    <TabsSpacer
      size={size}
      children={<TabsControl {...props} />}
    />
  )
}
