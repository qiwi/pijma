import React, {FC} from 'react'

import {TabsControl, TabsSpacer} from '@qiwi/pijma-core'

export interface TabsProps {
  size?: 's' | 'm' | 'l'
  selected?: number
  onSelect?: (selected: number) => void
  children: React.ReactNode
}

export const Tabs: FC<TabsProps> = (props) => {

  return (
    <TabsSpacer
      size={props.size}
      children={<TabsControl {...props} />}
    />
  )

}
