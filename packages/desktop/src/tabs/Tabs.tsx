import React, {FC} from 'react'

import {TabsControl, TabsSpacer} from '@qiwi/pijma-core'

export interface TabsProps {
  children: React.ReactNode
  size?: 's' | 'm' | 'l'
}

export const Tabs: FC<TabsProps> = (props) => {

  return (
    <TabsSpacer
      size={props.size}
      children={<TabsControl {...props} />}
    />
  )

}
